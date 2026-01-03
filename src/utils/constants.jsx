export const Logo = "/netflix_logo.png"
export const userImage = "/user_avatar.jpg"
export const loginPageBackgroundImage = "https://assets.nflxext.com/ffe/siteui/vlv3/58622d3e-49bc-482d-8b16-bddc4b672e8e/web/IN-en-20251110-TRIFECTA-perspective_281b0878-5972-49a4-9956-3f0cb5eb039b_large.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY,
    }
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
export const IMAGE_URL_W200 = "https://image.tmdb.org/t/p/w200"
export const IMAGE_URL_ORIGINAL = "https://image.tmdb.org/t/p/original"

export const LANGUAGES_SUPPORTED = [{ identifier: "en", name: "English" }, { identifier: "hindi", name: "Hindi" }]

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;