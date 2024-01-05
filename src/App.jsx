import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Institucional/Home'
import Acesso from './pages/Institucional/Acesso'
import Inicio from './pages/Plataforma/Inicio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acesso" element={<Acesso />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  )
}

export default App
