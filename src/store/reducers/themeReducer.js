const init = {
    darkTheme: false
}
export const themeReducer = (state= init, action) => {
    switch(action.type){

        case 'TOGGLE_THEME':
           return { ...state, darkTheme: action.payload}
        default:
            return state;
    }
}