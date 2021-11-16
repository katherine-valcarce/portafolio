import React from 'react'
import '../CSS/Contacts.css'

const Contacts = () => {
    return (
        <div className='containerContacts'>
            <h1 className='titleContact mobile'>Contactos</h1>
            <img className='imgContacts' src='https://imgur.com/HCACXsc.png' alt='icono contacto'></img>
            <div className='containerIconsContacts'>
                <div className='containerIconContacts'>
                <a className='aIcon' href="https://wa.me/56967163650">
                    <img src='https://imgur.com/tbTr0w6.png' alt='icono telefono' className='iconContacts'></img>
                        <p className='textIcon'>+569 6716 3650</p>
                    </a>
                </div>
                <div className='containerIconContacts'>
                <a className='aIcon' href="https://www.linkedin.com/in/katherine-valcarce/"> 
                    <img src='https://imgur.com/ksE8nee.png' alt='icono linkedin' className='iconContacts'></img>
                    <p className='textIcon'>linkedin.com/in/katherine-valcarce </p>
                    </a>
                </div>
                <div className='containerIconContacts'>
                <a className='aIcon' href="mailto:katherine.v@live.cl">
                    <img img src='https://imgur.com/r8qFUE3.png' alt='icono correo' className='iconContacts'></img>
                        <p className='textIcon'> Katherine.v@live.cl </p>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contacts