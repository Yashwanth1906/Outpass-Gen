import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import {Signup} from "./pages/signup"
import {Signin} from './pages/login'

function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Signin />}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
