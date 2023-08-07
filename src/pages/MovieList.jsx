import React from 'react'
import { useEffect, useState } from 'react';
import { axiosInstance } from '../axios/config';
import { Card, Col, Container, Row, Button, Form, Badge } from 'react-bootstrap/esm';
import { Link, useParams } from 'react-router-dom';
import PaginationSection from '../components/Pagination';
import { BsSuitHeartFill, BsCameraReelsFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerInfinity } from 'spinners-react';
import { getMovies } from '../store/actions/getMovies';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const MovieList = () => {

    const [totalPages, setTotalPages] = useState();
    const dispatch = useDispatch();
    const loader = useSelector((state) => state.loader.loader)
    const movies = useSelector((state) => state.getMovies.movies)
    const dark = useSelector((state) => state.theme.darkTheme)
    const page = useSelector((state) => state.getMovies.page)
    const url = useSelector((state) => state.getMovies.url)
    const favs = useSelector(state => state.fav.favs)
    useEffect(() => {

        dispatch(getMovies())


    }, [page, url])


    const getMovieByName = (e) => {
        console.log(e.target.value)
        dispatch({ type: 'SET_URL', payload: e.target.value })
    }

    const getMoviePage = (page) => {
        dispatch({ type: 'SET_PAGE', payload: +page })
    }

    const handleHeart = (e, movie) => {
        e.target.parentNode.classList.toggle('selected');
        dispatch({ type: "TOGGLE_TO_FAV", payload: movie })

    }


    return (

        <div className={`pt-5 ${dark ? 'main-wrraper' : ''}`}>

            <Container className='' >
                <PaginationSection getMoviePage={getMoviePage} totalPages={totalPages} currentPage={page} />
                <h2>Search by Movie Name</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="movieSearch">
                        <Form.Control type="search" onChange={(e) => getMovieByName(e)}
                            placeholder="Enter Movie Name..." />
                    </Form.Group>
                </Form>

                {loader ?
                    <Container>

                        <SpinnerInfinity size={500} thickness={200} speed={100} color="#0d6efd"
                            secondaryColor="rgba/(0, 0, 0, 0.44)" />
                    </Container> :

                    <Row>
                        {movies.map(movie => (

                            <Col sm={4} key={movie.id}>
                                <Card className='mb-4' style={{ width: '18rem' }}>

                                    <BsSuitHeartFill className='heart' onClick={(e) => handleHeart(e, movie)} size={30} />
                                    {movie.video &&

                                        <BsCameraReelsFill className='video' size={28} />
                                    }

                                    <LazyLoadImage
                                        src={"https://image.tmdb.org/t/p//w500" + movie.poster_path} 
                                        effect="blur"
                                    />

                                    <Card.Body>
                                        <Card.Title>
                                            {movie.original_title.slice(0, 10)}
                                        </Card.Title>
                                        <Card.Text>
                                            {movie.overview.slice(0, 20)}
                                        </Card.Text>
                                        <Link to={`/movies/${movie.id}`}>
                                            <Button variant="primary" className='me-2 '>Show movie</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
            </Container>
        </div>
    )
}


export default MovieList