import React from 'react'
import '../CSS/Home.css'

const home = () => {
    return (
            <div className='containerHome'>
                <div className='contenedorRighttHome'>
                    <img 
                    src={'https://imgur.com/vE1xEkk.png'}  
                    alt="Fotografia"
                    className="fotoPerfil"></img>
                </div>
                <div className='contenedorLeftHome'>
                <div className='contenedorTextHome'>
                    <p className='titleText desktop'> ¡Hola! Bienvenid@, Mi nombre es Katherine Valcarce </p>
                    <p className='titleText mobile'> Mi nombre es Katherine Valcarce </p>
                    <p className='titleText2'> Soy desarolladora Front-End </p>
                </div>
                <img 
                    src={'https://imgur.com/X965fxE.png'}  
                    alt="Fondo"
                    className="imgFondoHome"></img>
                </div>
            </div>



    )
}
export default home;