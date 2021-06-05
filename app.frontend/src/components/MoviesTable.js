import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetMovies } from '../services/movies'

export const MoviesTable = () => {
    const movies = useSelector(state => state.moviesReducer.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        GetMovies(dispatch);
    }, []);

    return <table className='table table-dark'>
        <tbody>
            {
                movies.map(n =>
                    <tr>
                        <td style={{textAlign: 'left'}}>{n.value}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}