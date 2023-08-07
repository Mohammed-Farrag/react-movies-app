import  { createSlice } from '@reduxjs/toolkit';


const init = {
    loader: false
}
export const loaderReducer = (state= init, action) => {
    switch(action.type){

        case 'SET_LOADER':
            return {...state, loader: action.payload}
        default:
            return state;
    }
}