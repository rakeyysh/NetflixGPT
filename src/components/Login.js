import Header from "./Header";
import Netflix from "../utils/img/Netflix.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";




const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();


    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        // validate the form data

        // console.log(email.current?.value);
        // console.log(password.current?.value);
        // console.log(name.current.value);

        const message = checkValidData(email.current?.value, password.current?.value,name.current?.value);
        setErrorMessage(message);

        if (message) return;


        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value,name.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!
                        // ...
                      
                      }).catch((error) => {
                        setErrorMessage(error.message);
                      });
                    // console.log(user);
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(errorCode);
                     setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                    
                });


        }
        else {

            // Signed In Logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                   
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }



    }
    return (
        <div><Header />

            <div className="absolute">
                <img src={Netflix} alt="background" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>



                {!isSignInForm && <input type="text"
                    ref={name}
                    placeholder="Full Name"
                    className="p-3 my-4 w-full bg-gray-700"
                />}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-3 my-4 w-full bg-gray-700"
                />


                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-3 my-4 w-full bg-gray-700"
                />


                <p className="text-red-500">{errorMessage}</p>
                <button
                    className="p-3 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>


                <p className="py-4 cursor-pointer text-lg"
                    onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?Sign In Now."}
                </p>

            </form>
        </div>
    )
}

export default Login