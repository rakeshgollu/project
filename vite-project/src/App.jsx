import { useState } from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"

import Register from './components/egister';
import Login from './components/ogin';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
