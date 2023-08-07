import { useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { langContext } from '../contexts/language';

function NavbarComponent() {

  const { lang, setLang } = useContext(langContext)
  const isAuth = useSelector(state => state.auth.isAuth);
  const dark = useSelector(state => state.theme.darkTheme)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch({ type: 'LOGIN', payload: false })
    navigate("/movies")
  }

  const themeToggle = () => {
    console.log(dark)
    dispatch({ type: 'TOGGLE_THEME', payload: !dark })
  }
  return (
    <Navbar className={(dark ) ? 'bg-slate-950' : ''}  expand="lg">

      <Container>
        <Navbar.Brand className={(dark ) ? 'text-white' : ''} as={Link} to="/">Movies App </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link className={(dark ) ? 'text-white' : ''} as={Link} to="/movies">Movies</Nav.Link>

            <Nav.Link className={(dark ) ? 'text-white' : ''} as={Link} to="/fav">Fav</Nav.Link>
            {!isAuth && (
              <>
                <Nav.Link className={(dark ) ? 'text-white' : ''} as={Link} to="/login">Login</Nav.Link>
                <Nav.Link className={(dark ) ? 'text-white' : ''} as={Link} to="/register">Register</Nav.Link>
              </>
            )}

            {isAuth && (

              <Nav.Link className={(dark ) ? 'text-white' : ''} onClick={() => logout()}>Logout</Nav.Link>
            )}
            
          </Nav>
          <Nav className="">
            <div className='d-flex align-items-end gap-2 '>

              <Button 
              className={(dark ) ? 'w-75 text-white' : 'w-75'}
              variant="outline-primary" size='md'
              onClick={() => themeToggle()}>Toggle Theme</Button>
              <Form.Select
              className="w-auto"
              aria-label="Default select example" onChange={(e) => setLang(e.target.value)}>
                <option>Select Language</option>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="fr">Francis</option>
              </Form.Select>
              <h1 className={(dark ) ? 'lead text-white' : 'lead'} >{lang}</h1>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;