
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Signup } from './pages/signup'
import { Signin } from './pages/login'



function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
        <Route path="/home" element={<Home />}></Route>



      </Routes>

    </BrowserRouter>
  )
}

export default App
