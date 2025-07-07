export const LOGO = 
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";




 export const USER_AVATAR =  
 "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";


 export const API_OPTIONS ={
    method: "GET",
    headers:{
        accept: "application/json",
        Authorization:
        'Bearer ' + process.env.REACT_APP_TMDB_BEARER
  
    }
 };



 

 console.log("TMDB Token:", process.env.REACT_APP_TMDB_BEARER);

 export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";


 export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg";


 export const SUPPORTED_LANGUAGES = [
    {identifier: "en",name: "English"},
    {identifier: "hindi",name: "Hindi"},
    {identifier: "spanish",name: "Spanish"},
 ]


 export const OPENAI_KEY  = process.env.REACT_APP_OPENAI_KEY;