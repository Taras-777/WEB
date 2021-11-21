import { NavLink } from "react-router-dom"

import logo from "./assets/plane_icon.svg"

const Header = () => {
    return (
        <header>
            <img className='icon' src={logo} alt='Icon'/>
            <nav className='header__nav'>
                <div className='header__nav-link'><NavLink exact to='/'>Home</NavLink></div>
                <div className='header__nav-link'><NavLink to='/catalog'>Catalog</NavLink></div>
            </nav>
        </header>
    )
}

export default Header
