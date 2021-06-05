const initialState = {
    movies: [],
}

export const ActionTypes = {
    SET_MOVIES: 'SET_MOVIES',
}

export const ActionCreators = {
    setMovies: payload => ({ type: ActionTypes.SET_MOVIES, payload })
}

export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: [...action.payload] };
        default:
            return state;
    }
}