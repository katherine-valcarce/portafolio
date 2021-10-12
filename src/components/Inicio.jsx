import React from 'react'
import { Link} from "react-router-dom";

export const Inicio = () => {
    return (
        <div>
            <h1> Inicio </h1>
            <Link to='/informacion'><button>Mesero</button></Link>
        </div>
    )
}
export default Inicio;