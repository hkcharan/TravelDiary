import React from 'react'

import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>}  />
          <Route  path='/signup' element={<SignUp/>}  />
          <Route  path='/login' element={<Login/>}  />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

