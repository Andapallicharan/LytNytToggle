import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login'
import Context from './components/Context';
const Home=()=>{
  return <div className='card'><h1>Home page</h1></div>
}
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Context/>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

