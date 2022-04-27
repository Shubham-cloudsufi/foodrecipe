import React from 'react'
import App from './App'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ErrorPage from './ErrorPage'
const Path = () => {
  return (
    <Router>
    {/* <Navbar /> */}
        <Routes>
            <Route exact path='/' element= {<App />} />
            <Route exact path='/app' element= {<App />} />
            <Route exact path = "*" element ={<ErrorPage />} />
        </Routes>
    </Router>
  )
}

export default Path