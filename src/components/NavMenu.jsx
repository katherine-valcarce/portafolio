import React from 'react'
import '../CSS/NavMenu.css'
import { Link } from "react-router-dom";

const navMenu = () => {
const clickMenu = () => {
   const btnMenu = document.getElementById('menu')
   if(btnMenu.style.display === 'block'){
        btnMenu.style.animation = '2s slideRight';
        btnMenu.style.display = 'none';
        
        
    }else{
        btnMenu.style.display = 'block';
        btnMenu.style.animation = '2s slideRightReturn';
        
    }
}
    return (
        <nav className='divNavMenu'>
            <div className='containerLogoMenu'>
            <Link to="/" className='containerLogo'> <img src='https://imgur.com/o8mw4S7.png'  className="imgLogo" alt="logo" /> </Link>
            <button className='btnMenu' onClick={(e) => {clickMenu()}}><img id='btnMenu' src='https://imgur.com/J1tJkH1.png'  className="iconMenu" alt="logo"/></button>
            </div>
            <div className='buttonsNav' id='menu'>
            <Link to="/aboutMe" className='containerEachButton' > <button className='buttonNav' id='buttonSobreMi' >Sobre mi</button> </Link>
            <Link to="" className='containerEachButton' ><button className='buttonNav'  onClick={() => {window.location.href = 'https://drive.google.com/file/d/1j4miRPKJsd_AYVAdjxHlVadkmu-Dvp7l/view?usp=sharing'; }} > Curriculum </button> </Link>
            <Link to="/projects" className='containerEachButton' > <button className='buttonNav' >Proyectos</button> </Link>
            <Link to="/contacts" className='containerEachButton'>  <button className='buttonNav' >Contacto</button> </Link>
            </div>
        </nav>
    );
};
export default navMenu;