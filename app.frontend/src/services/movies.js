import { ActionCreators } from "../redux/moviesReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/movies',
})

export const GetMovies = async(dispatch) =>{

    try{
        const {data} = await axiosInstance.get();

        dispatch(ActionCreators.setMovies(data));
    }
    catch{
        console.log('Error!')
    }
}

export const DeleteMovie = async(dispatch, movie) =>{

    try{
        await axiosInstance.delete(`/${movie.id}`);
        dispatch(ActionCreators.deleteMovie(movie));
    }
    catch{
        console.log('Error!')
    }
}

export const NewMovie = async(dispatch, movie) =>{

    try{
        const {data} = await axiosInstance.post('',movie);       
        dispatch(ActionCreators.newMovie(data));
    }
    catch{
        console.log('Error!')
    }
}

export const EditMovie = async(dispatch, movie) =>{

    try{
        await axiosInstance.put('',movie);    
        dispatch(ActionCreators.editMovie(movie));
    }
    catch{
        console.log('Error!')
    }
}