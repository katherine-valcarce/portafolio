import React from 'react'
import '../CSS/NavMenu.css'
import { Link } from "react-router-dom";

const navMenu = () => {

    return (
        <nav className='divNavMenu'>
            <Link to="/" className='containerLogo'> <img src='https://imgur.com/o8mw4S7.png'  className="imgLogo" alt="logo" /> </Link>
            <div className='buttonsNav'>
            <Link to="/aboutMe" className='containerEachButton' > <button className='buttonNav' id='buttonSobreMi' >Sobre mi</button> </Link>
            <Link to="" className='containerEachButton' ><button className='buttonNav'  onClick={() => {window.location.href = 'https://drive.google.com/file/d/1RBN5pcBh8tIJZzgEWMIDMl8h11M7ZyrZ/view'; }} > Curriculum </button> </Link>
            <Link to="/projects" className='containerEachButton' > <button className='buttonNav' >Proyectos</button> </Link>
            <Link to="/contacts" className='containerEachButton'>  <button className='buttonNav' >Contacto</button> </Link>
            </div>
        </nav>
    );
};
export default navMenu;