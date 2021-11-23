import { Component } from "react";
import { Link } from "react-router-dom";

import "./estilo/header.css"

export default class Header extends Component {
    render() {
        return (
            <header id="cabeçalhoPrincipal">
                <h1 className="cabeçalhoPrincipalItem">Título da página</h1>
                <nav className="cabeçalhoPrincipalItem">
                    <Link className="Link" to="/" >Início</Link>
                    <Link className="Link" to="/contato" >Contato</Link>
                </nav>
            </header>
        )
    }
}