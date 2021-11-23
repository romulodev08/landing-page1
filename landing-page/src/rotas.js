import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./cabeçalho.jsx"

import PgInicial from "./páginas/pginicial.jsx";
import Contato from "./páginas/contato.jsx"


function Rotas() {
  return (
    <div>
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PgInicial />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Rotas;
