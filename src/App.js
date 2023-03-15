import React from 'react'
import Login from './pages/Login';
import Register from './pages/Register';
import "./index.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App