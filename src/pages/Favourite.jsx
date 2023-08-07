import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../axios/config';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import PaginationSection from '../components/Pagination';
import { Link, useParams } from 'react-router-dom';
import { BsSuitHeartFill, BsCameraReelsFill } from 'react-icons/bs';

const Favourite = () => {

  
  const dark = useSelector((state) => state.theme.darkTheme)
  let favs = useSelector(state => state.fav.favs)
  let dispatch = useDispatch()

  const handleHeart = (e, movie) => {
    e.target.parentNode.classList.toggle('selected');
    dispatch({ type: "TOGGLE_TO_FAV", payload: movie })
    
}
  return (
    <>
      <Container>

        <Row>
          {favs.map(movie => (
            <Col sm={4} key={movie.id}>
              <Card className='mb-4' style={{ width: '18rem' }}>

                <BsSuitHeartFill className={`heart selected`} onClick={(e) => handleHeart(e, movie)} size={30} />


                <Card.Img variant="top" height="250" src={"https://image.tmdb.org/t/p//w500" + movie.poster_path} />
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
      </Container>
    </>
  )
}

export default Favourite