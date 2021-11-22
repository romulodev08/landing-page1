import { BrowserRouter, Switch, Route } from "react-router-dom"

import PgInicial from './pages/pgInicial.jsx';
export default function Rotas(props) {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={PgInicial} />
                <Route path="/ewe" component={PgInicial} />
            </BrowserRouter>
        </div>
    )
}