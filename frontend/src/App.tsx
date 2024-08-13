import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'



function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />}></Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App
