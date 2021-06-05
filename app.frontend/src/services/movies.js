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