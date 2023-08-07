const initial = {
    movies: [],
    url: '/movie/popular',
    page: 1
}


export const MoviesReducer = (state = initial, action) => {

    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload };
        case 'SET_URL':
            if (action.payload === '') {
                console.log(state.url);
                return { ...state , url: '/movie/popular' + action.payload};
            } else {
                console.log(state.url);
                return { ...state, url: '/search/movie?query=' + action.payload };
            }
            
        case 'SET_PAGE':
            
            return { ...state, page: action.payload };
        default:
            return state;
    }
}