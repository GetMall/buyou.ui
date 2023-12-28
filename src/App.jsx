import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Institucional/Home'
import Acesso from './pages/Institucional/Acesso'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acesso" element={<Acesso />} />
      </Routes>
    </Router>
  )
}

export default App
