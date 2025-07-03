import React from 'react'
import logo from '../utils/img/logo.png';
import userIcon from '../utils/img/userIcon.jpg';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) =>store.user);  // subscribed to the redux store
  // this user is for photoUrl done akshaysaini different from onAuthStateChange(auth,(user)=>{}); --> don't confuse

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
     
      // An error happened.
    });
  }

  useEffect(()=>{
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user


        //   const uid = user.uid;
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");

         
          // ...
        } else {
          // User is signed out
          // ...

          dispatch(removeUser());
          navigate("/");
         
        }
      });

     // Unsubscribe when components unmounts (its like component unmount);
      return () => Unsubscribe();
},[])

const handleGptSearchClick = () =>{
  // Toggle GPT Search button
  dispatch(toggleGptSearchView());

}

const handleLanguageChange = (e) =>{
  // console.log(e.target.value);
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between'>
       <img  className='w-44'
        src={logo} alt="logo"
       />
       { user &&
        (
        <div className='flex p-2 m-2'>
        {showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
           {SUPPORTED_LANGUAGES.map((lang) =>(
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}</option>
          ))}
        </select>)}
        <button className='py-2 px-4 mx-4 bg-purple-800 text-white rounded -lg' onClick={handleGptSearchClick}
        >
         {showGptSearch ? "HomePage" : "GPT Search"}</button>
        <img className=' w-11 h-9' src={userIcon} alt='userIcon'/>
        <button onClick={handleSignOut} className='font-bold text-white cursor-pointer'>Sign Out</button>
       </div>)
}
    </div>
  )
}

export default Header