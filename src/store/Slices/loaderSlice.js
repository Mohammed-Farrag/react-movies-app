import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader: false
}
 
export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        hideLoader: (state) => {
            state.loader = false
        },
        showLoader: (state) => {
            state.loader = true
        }
    }
})

export const { hideLoader, showLoader} = loaderSlice.actions;
export default loaderSlice;