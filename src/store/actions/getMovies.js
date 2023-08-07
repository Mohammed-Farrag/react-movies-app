import { axiosInstance } from "../../axios/config"
import store from "../store"

export const getMovies = () => {
    return (dispatch) => {


        axiosInstance.get(store.getState().getMovies.url, {
            params: {
                api_key: 'c0db38bc1e87af55054598068626238c',
                page: store.getState().getMovies.page
            }
        }).then(res => {

                dispatch({ type: 'SET_MOVIES', payload: res.data.results })

            })
    }
}