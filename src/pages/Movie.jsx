import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { axiosInstance } from '../axios/config';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Movie = () => {

  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    
    axiosInstance.get(`/movie/${params.id}?api_key=c0db38bc1e87af55054598068626238c`)
      .then(res => res.data)
      .then((res) => {
        setMovie(res)
      })


  }, [])


  return (
    <Container 
    // style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}
    >
      {
        <div className='row mt-5 py-5'>
          
          <Col sm={4} key={movie.id}>
           
            <LazyLoadImage
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} 
              effect="blur"
             className="w-96"
             />
              
            
          </Col>
          <Col sm={8}>
            <Card.Body>
              <div className='mb-5 text-center text-3xl'>{movie.original_title}</div>
              <Card.Text>
                
                {movie.overview}
              </Card.Text>
              <Link to="/movies" className='float-right'>
                <Button  variant="primary" >All Movies</Button>
              </Link>
            </Card.Body>
          </Col>
        </div>
      }
    </Container>
  )
}

export default Movie