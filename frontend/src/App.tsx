
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Signup } from './pages/signup'
import { Signin } from './pages/login'
import { OutPass } from './pages/outpass'



function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/outpass" element={<OutPass />} ></Route>



      </Routes>

    </BrowserRouter>
  )
}

export default App
