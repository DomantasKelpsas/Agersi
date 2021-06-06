import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, FormControl, InputGroup, FormGroup } from 'react-bootstrap';
import { NewMovie, EditMovie } from '../services/movies'

export const NewMovieModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>New Movie</Button>
        <MovieModal movie={null} handleFormSubmit={NewMovie} show={show} handleClose={handleClose} />

    </div>
}

export const EditMovieModal = ({ movie }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-warning'>Edit</Button>
        <MovieModal movie={movie} handleFormSubmit={EditMovie} show={show} handleClose={handleClose} />

    </div>
}

const MovieModal = ({ movie, handleFormSubmit, show, handleClose }) => {

    const [modalMovie, setModalMovie] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModalMovie(movie);
    }, [movie]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Movie Info</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalMovie);
            }}>
                <Modal.Body>
                    <FormGroup>
                        <Form.Label>Movie Title</Form.Label>
                        <InputGroup>
                            <FormControl value={modalMovie === null ? '' : modalMovie.title} onChange={event =>
                                setModalMovie({ ...modalMovie, title: event.target.value })
                            }>
                            </FormControl>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Movie Release Date</Form.Label>
                        <InputGroup>
                            <FormControl type="date" value={modalMovie === null ? '' : modalMovie.releaseDate} onChange={event =>
                                setModalMovie({ ...modalMovie, releaseDate: event.target.value })
                            }>
                            </FormControl>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Movie Genre</Form.Label>
                        <InputGroup>
                            <FormControl as="select" value={modalMovie === null ? '' : modalMovie.genre} onChange={event =>
                                setModalMovie({ ...modalMovie, genre: event.target.value })
                            }>

                                <option value="Drama">Drama</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Action">Action</option>

                            </FormControl>
                        </InputGroup>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
}
