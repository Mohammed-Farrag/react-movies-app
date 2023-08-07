const init = {
    favs:[],
}
export const favReducer = (state= init, action) => {
    switch(action.type){

        case 'TOGGLE_TO_FAV':
            if(state.favs.includes(action.payload)){
                 let newFav = state.favs.filter(mov => mov.id !== action.payload.id)
                 
                 return {
                    ...state,
                    favs: newFav
                 };
            }else{
                
                return {
                    ...state,
                    favs: [...state.favs, action.payload]
                };
            }
        default:
            return state;
    }
}