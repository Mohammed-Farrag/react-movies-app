import { combineReducers } from "redux";
import { loaderReducer } from "./loaderReducer";
import { authReducer } from "./authReducer";
import { favReducer } from "./favReducer";
import { MoviesReducer } from "./MoviesReducer";
import { themeReducer } from "./themeReducer";

export default combineReducers({
    loader: loaderReducer,
    auth: authReducer,
    fav: favReducer,
    getMovies: MoviesReducer,
    theme: themeReducer
})