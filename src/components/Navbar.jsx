import { Link } from "react-router-dom"
import { DropMenu } from "./DropMenu"
import { useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import { ModeContext } from '../context/mode/ModeContext.js'
import { useNavigate } from "react-router-dom"
import { SwitchMode } from './SwitchMode.jsx'

import Icon from '@mui/material/Icon';
import { Logo } from "./Logo.jsx"

import '../styles/Navbar.css'

export const Navbar = () => {
    const navigate = useNavigate()

    const { style } = useContext(ModeContext)

    const location = useLocation()

    const { pathname } = location
    // console.log("pathname ", pathname)
    const array = pathname.split('/')
    // console.log("array ", array)
    const path = "/" + array[1] + "/" + array[2]
    // console.log("path ", path)
    const hideLinkProfile = path == "/dash/tutor" ? 'hide' : ''
    const hideDropMenuProfile = path != "/dash/tutor" ? 'hide' : ''

    const [showDrop, setShowDrop] = useState(false)

    const token = ''

    const handleDropMenu = () => {

        setShowDrop(!showDrop)
    }

    const closeDrop = () => {
        setShowDrop(false)
    }

    const goToCart = () => {
        navigate("/cart")
    }

    const hideBtnLogin = token ? 'hide' : ''
    const routhHome = token ? '/dash' : ''

    return (
        <>
            <nav className={` navBar ${style.navbar.navMode}`}>
                <div className="boxLogo">
                    <Link className="home" to={"/"}>
                        <Icon className='icon'>shopping_bag</Icon>
                        <span className="hide-text">Tienda</span>
                    </Link>
                </div>

                <div className={`boxMenu ${style.navbar.boxMenuMode}`}>
                    <button onClick={goToCart} className="menu-action">
              
                    <Icon className='icon'>local_grocery_store</Icon>
                    {/*  */}
                    </button>
                    {/* <button className="menu-action login">
                     
                        <Icon className='icon '>person_2</Icon>
                        <span className="hide-text">Ingresar</span>
                    </button> */}
            
                </div>



            </nav>
            {
                showDrop && (
                    <span className='boxDrop'>
                        <DropMenu closeDrop={closeDrop} />

                    </span>
                )
            }
        </>

    )
}
