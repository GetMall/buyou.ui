import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Institucional/Home'
import Acesso from './pages/Institucional/Acesso'
import Inicio from './pages/Plataforma/Inicio'
import Shopping from './pages/Plataforma/Shopping'
import Loja from './pages/Plataforma/Loja'
import Perfil from './pages/Plataforma/Perfil'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acesso" element={<Acesso />} />
        <Route path="/inicio" element={<Inicio />} />
'       <Route path="/shopping/:idShopping/:nomeShopping" element={<Shopping />} />
        <Route path="/loja/:idLoja/:nomeLoja" element={<Loja />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  )
}

export default App
