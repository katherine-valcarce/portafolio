import React from 'react'
import '../CSS/AboutMe.css'
import data from '../tools.json'


const AboutMe = () => {
    //Llamando datos de JSON
    const tools = data.tools

    return (
        <div className='containerAboutMe'>
                <p className='paragraphAboutMe'>El año 2018 me titulé de Ingeniería Comercial (Licenciatura en ciencias de la administración de empresas)
                    de la Universidad Tecnológica Metropolitana (UTEM), trabajé en el área contable de Agrosuper, hasta que conocí
                    <a className='linkLaboratoria' href="https://www.laboratoria.la/"> Laboratoria </a>
                    , el mundo de la programación  y tomé la decisión de enfocar mi desarrollo profesional hacia la transformación digital.
                    Mi paso por el Bootcamp para formarme como una Desarrolladora Front End fue muy enriquecedor, realice varios proyectos
                    utilizando un marco de trabajo basado en Metodologías Ágiles (Scrum),<b> potencie mi capacidad de autoaprendizaje,
                    análisis, solución de problemas y trabajo en equipo</b>. Me considero una profesional comprometida, adaptable y
                    siempre dispuesta a aprender y ayudar.
                </p>
                <h1 className='titleAboutMe'>Herramientas</h1>
                <div className="containerIcons">
                    {tools.map((item) => (
                            <div key={item.id} className="containerIcon">
                                <figuere className="figureIcon">
                                    <img src={item.img}  className="imgIcon" alt="iconos" /> 
                                </figuere>
                                <p className="titleIcon">{item.name}</p>
                            </div>
                        ))}
                </div>
        </div>
    )
}

export default AboutMe