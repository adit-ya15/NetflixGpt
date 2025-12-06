export const Logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const userImage = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const loginPageBackgroundImage = "https://assets.nflxext.com/ffe/siteui/vlv3/58622d3e-49bc-482d-8b16-bddc4b672e8e/web/IN-en-20251110-TRIFECTA-perspective_281b0878-5972-49a4-9956-3f0cb5eb039b_large.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY,
    }
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w780"

export const LANGUAGES_SUPPORTED = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"}]

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;