import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteMovie, GetMovies } from '../services/movies';
import {Button} from 'react-bootstrap';
import { EditMovieModal } from './MovieModal';

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
                        <td style={{ width: '3rem' }}>
                            <EditMovieModal movie={n.value}/>
                        </td>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => DeleteMovie(dispatch, n)}>Delete</Button>
                        </td>
                        <td style={{ textAlign: 'left' }}>{n.value}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}