import axios from 'axios';
import store from '../store/store';
import { changeLoader } from '../store/actions/loaderAction';
import { showLoader } from '../store/Slices/loaderSlice';

export const  axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


axiosInstance.interceptors.request.use((req) => {

    // store.dispatch(showLoader())
    store.dispatch({ type: "SET_LOADER", payload: true })
    
    return req
}, (err) => {


    return Promise.reject(err)
    
})

axiosInstance.interceptors.response.use((res) => {

   
    
    store.dispatch({ type: "SET_LOADER", payload: false })
    
    return res
}, (err) => {

    console.log("res inter")

    return Promise.reject(err)
    
})


