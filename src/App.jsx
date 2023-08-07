import React, { Suspense, useState } from 'react'
import './App.css'
import NavbarComponent from './components/Navbar'
import { Route, Routes, redirect } from 'react-router-dom'
const MovieList = React.lazy(() => import('./pages/MovieList'))
import Favourite from './pages/Favourite'
import Login from './pages/Login'
import Private from './pages/Private'
import { useSelector } from 'react-redux'
import { langContext, LangConProvider } from './contexts/language.jsx';
import { ToastContainer } from 'react-toastify'
import Register from './pages/Register'
function App() {

  const logged = useSelector(state => state.auth.isAuth)
  const [lang, setLang] = useState('en');

  return (
    <div dir={(lang == 'ar') ? 'rtl' : 'ltr'}>
      <LangConProvider value={{ lang, setLang }} >

        <NavbarComponent  />

        <Routes>
          <Route path='' element={<MovieList />} />
          <Route path='/movies' element={
            <Suspense fallback={<div>Loading</div>}>
              <MovieList />
            </Suspense>
          } />
          <Route path='/movies/:id' element={<Private logged={logged} />} />
          <Route path='/fav' element={<Favourite />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
       
        <ToastContainer containerId="1"  theme='dark' progressStyle={{backgroundColor:'blue'}}/>

      </LangConProvider>
    </div>
  )
}

export default App
