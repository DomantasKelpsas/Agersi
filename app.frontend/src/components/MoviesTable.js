import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteMovie, GetMovies } from '../services/movies';
import { Button } from 'react-bootstrap';
import { EditMovieModal } from './MovieModal';

export const MoviesTable = () => {
    const movies = useSelector(state => state.moviesReducer.movies);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        GetMovies(dispatch);
    }, []);

    return <div className="px-5">
        <input className="float-right" type="text" placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value)
        }}></input>
        <table className='table table-striped'>
            <thead>
                <tr>
                
                <th style={{ textAlign: 'left' }}>Title</th>
                <th style={{ textAlign: 'left' }}>Release Date</th>
                <th style={{ textAlign: 'left' }}>Genre</th>
                <th style={{ textAlign: 'left' }}>Edit</th>
                <th style={{ textAlign: 'left' }}>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.filter((val) => {
                        if (searchTerm == "") return val;
                        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }
                    ).map(n =>
                        <tr>
                           
                            <td style={{ textAlign: 'left' }}>{n.title}</td>
                            <td style={{ textAlign: 'left' }}>{n.releaseDate.split('T')[0]}</td>
                            <td style={{ textAlign: 'left' }}>{n.genre}</td>

                            <td style={{ width: '3rem' }}>
                                <EditMovieModal movie={n} />
                            </td>
                            <td style={{ width: '3rem' }}>
                                <Button className='btn btn-danger' onClick={() => DeleteMovie(dispatch, n)}>Delete</Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
}