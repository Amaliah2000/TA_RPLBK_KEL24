import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <header className="main-header">
           <div className="main-header__wrapper">
                <div className="main-header__logo">
                        <Link to="/" className="main-header__link" onClick={closeMobileMenu}> 
                            <h1>Universitas 24</h1>
                        </Link>  
                </div>
                <nav className="main-header__nav nav">  
                    <div className="nav__icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav__list nav__list--active' : 'nav__list '} >
                        <li className="nav__list-item">
                            <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav__list-item">
                            <Link to="/Details" className="nav__links" onClick={closeMobileMenu}>
                                Detail
                            </Link>
                        </li>
                        <li className="nav__list-item">

                            <Link to="/Pendaftaran" className="nav__links" onClick={closeMobileMenu}>
                                Daftar
                            </Link>
                        </li>

                    </ul>
                </nav>
           </div>
           
        </header>
    )
}
