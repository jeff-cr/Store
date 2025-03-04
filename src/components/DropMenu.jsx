
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from 'react'

import '../styles/DropMenu.css'

export const DropMenu = ({closeDrop}) => {

    const dropRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropRef.current && !dropRef.current.contains(event.target)) {
            closeDrop(); // Llama a la función para cerrar el dropdown
        }
    };
    useEffect(() => {
        // Añadir el listener al hacer clic en el documento
        document.addEventListener('mousedown', handleClickOutside);

        // Eliminar el listener cuando el componente se desmonta
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div ref={dropRef} className="boxDropProfile">
            <ul className="list">
                <li >
                    {/* onClick={closeDrop} */}
                    <Link
                        to={'/dash/tutor/ad'}
                        className="list-item"
                    >
                        <i className="bi bi-image"></i>
                        <span>Agregar anuncio</span>
                    </Link>
                    {/* <button onClick={() => handleShow('addAd')} className='list-item'>
                        <i className="bi bi-image"></i>
                        <span>Agregar anuncio</span>
                    </button> */}

                </li>
                <li>
                    <Link
                        to={'/dash/tutor/contact'}
                        className="list-item"
                    >
                        <i className="bi bi-whatsapp"></i>
                        <span>Agregar whatsapp</span>
                    </Link>
                    {/* <button onClick={() => handleShow('addWhatsApp')} className="list-item">
                        <i className="bi bi-whatsapp"></i>
                        <span>Agregar whatsApp</span>
                    </button> */}
                </li>
                <li>
                    <Link
                        to={'/dash/tutor/services'}
                        className="list-item"
                    >
                        <i className="bi bi-card-text"></i>
                        <span>Agregar servicios</span>
                    </Link>
                    {/* <button onClick={() => handleShow('addServices')} className="list-item">
                        <i className="bi bi-card-text"></i>
                        <span>Agregar servicios</span>
                    </button> */}
                </li>
                <li >
                    <Link
                        to={'/dash/tutor/profile'}
                        className="list-item"
                    >
                        <i className="bi bi-window-sidebar"></i>
                        <span>Ver perfil</span>
                    </Link>
                </li>
            </ul>
           
        </div>
  )
}
