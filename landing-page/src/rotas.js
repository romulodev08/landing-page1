import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./cabeçalho.jsx"

import PgInicial from "./páginas/pginicial.jsx";
import Cadastro from "./páginas/cadastro.jsx"


function Rotas() {
  return (
    <div>
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PgInicial />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Rotas;
