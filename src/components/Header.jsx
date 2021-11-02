import React from 'react'
import '../CSS/Header.css'

const header = () => {
    return (
            <div className='containerHome'>
                <div>
                    <img 
                    src={'https://imgur.com/vE1xEkk.png'}  
                    alt="Fotografia"
                    className="fotoPerfil"></img>
                </div>
                <div>
                    <p className='titleText'> ¡Hola! Bienvenid@, Mi nombre es Katherine Valcarce </p>
                    <p className='titleText2'> Soy desarolladora Front-End </p>
                </div>
                <img 
                    src={'https://imgur.com/X965fxE.png'}  
                    alt="Fondo"
                    className="imgFondoHome"></img>
            </div>



    )
}
export default header;