import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "../../assets/images/logo.png";

import './styles.css';

function Navbar() {

    const [mobileToggle, setMobileToggle] = useState(false);

    return (
        <header>
            <div className="container">
                <div className="header__brand">
                    <img src={Logo} alt="The Last of Us" />
                </div>

                <div className={mobileToggle ? "menu-section on" : "menu-section"} onClick={() => setMobileToggle(!mobileToggle)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/chapters" className={({ isActive }) => isActive ? 'active' : ''}>História</NavLink>
                            </li>
                            <li>
                                <NavLink to="/characters" className={({ isActive }) => isActive ? 'active' : ''}>Personagens</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink>
                            </li>
                            <li>
                                <NavLink to="/extra" className={({ isActive }) => isActive ? 'active' : ''}>Extra</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;