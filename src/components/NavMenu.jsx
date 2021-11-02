import React from 'react'
import '../CSS/NavMenu.css'
import { Link } from "react-router-dom";

const navMenu = () => {
    return (
        <nav className='divNavMenu'>
            <div className='buttonsNav'>
            <Link to="/aboutMe" className='containerEachButton' ><button className='buttonNav'>Sobre mi</button> </Link>
            <Link to="/resumes" className='containerEachButton' > <button className='buttonNav'>Curriculum</button> </Link>
            <Link to="/projects" className='containerEachButton' > <button className='buttonNav'>Proyectos</button> </Link>
            <Link to="/contacts" className='containerEachButton'>  <button className='buttonNav'>Contacto</button> </Link>
            </div>
        </nav>
    );
};
export default navMenu;