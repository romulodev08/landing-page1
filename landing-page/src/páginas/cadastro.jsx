import { useState } from "react"
import "../estilo/cadastro.css"

export default function Cadastro(props) {
    const [password, setPassword] = useState(true)
    return (
        <div className="containerForm">
            <form id="formCadastro" action="#">
                <div>
                    <label htmlFor="#">Nome completo:</label><br />
                    <input type="text" placeholder="Nome completo" />
                </div>
                <div>
                    <label htmlFor="#">E-mail:</label><br />
                    <input type="email" name="" id="" placeholder="E-mail" />
                </div>
                <div>
                    <label htmlFor="#">idade:</label><br />
                    <input type="number" name="" id="" placeholder="Idade" />
                </div>
                <div>
                    <label htmlFor="#">Sexo:</label><br />
                    <span>Masc.</span><input type="radio" name="Sexo" id="" />
                    <span>Fem.</span><input type="radio" name="Sexo" id="" />
                </div>
                <div>
                    <label htmlFor="#">Senha:</label><br />
                    <input type={password ? "password" : "text"} name="" placeholder="Senha" /> <br />
                    <input type="checkbox" name="" id="" onClick={()=> setPassword(!password)} /> <span>Mostrar senha</span>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}