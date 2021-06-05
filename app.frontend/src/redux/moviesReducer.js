const initialState = {
    movies: [],
}

export const ActionTypes = {
    SET_MOVIES: 'SET_MOVIES',
    DELETE_MOVIE: 'DELETE_MOVIE',
    NEW_MOVIE: 'NEW_MOVIE',
    EDIT_MOVIE: 'EDIT_MOVIE',


}

export const ActionCreators = {
    setMovies: payload => ({ type: ActionTypes.SET_MOVIES, payload }),
    deleteMovie: payload => ({ type: ActionTypes.DELETE_MOVIE, payload }),
    newMovie: payload => ({ type: ActionTypes.NEW_MOVIE, payload }),
    editMovie: payload => ({ type: ActionTypes.EDIT_MOVIE, payload })
}

export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: [...action.payload] };
        case ActionTypes.DELETE_MOVIE:
            for (let i = 0; i < state.movies.length; i++) {
                if (state.movies[i].id === action.payload.id) {
                    state.movies.splice(i, 1);
                    break;
                }
            }
            return { ...state, movies: [...state.movies] };
        case ActionTypes.NEW_MOVIE:
            return { ...state, movies: [...state.movies, action.payload] };
        case ActionTypes.EDIT_MOVIE:
            for (let i = 0; i < state.movies.length; i++) {
                if (state.movies[i].id === action.payload.id) {
                    state.movies[i].value = action.payload.value;
                    break;                  
                }
            }
            return { ...state, movies: [...state.movies] };
        default:
            return state;
    }
}