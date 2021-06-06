import { ActionCreators } from "../redux/moviesReducer";

export const GetMovies = async(dispatch) =>{

    try{
        const response = [
            {value: 'Interzone',id:1},
            {value: 'Interstela',id:2},
            {value: 'Godfather',id:3},
        ];

        dispatch(ActionCreators.setMovies(response));
    }
    catch{
        console.log('Error!')
    }
}

export const DeleteMovie = async(dispatch, movie) =>{

    try{
        dispatch(ActionCreators.deleteMovie(movie));
    }
    catch{
        console.log('Error!')
    }
}

export const NewMovie = async(dispatch, movie) =>{

    try{
        const response = {value: movie,id:4}         
        dispatch(ActionCreators.newMovie(response));
    }
    catch{
        console.log('Error!')
    }
}

export const EditMovie = async(dispatch, movie) =>{

    try{
        const response = {value: movie,id:3}
        dispatch(ActionCreators.editMovie(response));
    }
    catch{
        console.log('Error!')
    }
}