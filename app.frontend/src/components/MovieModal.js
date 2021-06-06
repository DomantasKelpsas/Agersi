import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form, FormControl, InputGroup } from 'react-bootstrap';
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
        <Button onClick={handleShow} className='btn btn-warning'>Edit Movie</Button>
        <MovieModal movie={movie} handleFormSubmit={EditMovie} show={show} handleClose={handleClose} />

    </div>
}

const MovieModal = ({ movie, handleFormSubmit, show, handleClose }) => {

    const [modalMovie, setModalMovie] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setModalMovie(movie);
    }, [movie]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalMovie);
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl value={modalMovie === null ? '' : modalMovie} onChange={event =>
                            setModalMovie(event.target.value)
                        }>
                        </FormControl>
                    </InputGroup>
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
