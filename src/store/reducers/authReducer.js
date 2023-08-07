const init = {
 
    isAuth: true,
   
}
export const authReducer = (state= init, action) => {
    switch(action.type){

       
        case 'LOGIN':
            return {...state, isAuth: action.payload}
        default:
            return state;
    }
}