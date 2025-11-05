import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "../../assets/images/logo.svg";
import DropdownIcon from "../../assets/images/dropdown-icon.svg";

import './styles.css';

function Navbar() {

    const [mobileToggle, setMobileToggle] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header>
            <div className="container">
                <div>
                    <img src={Logo} alt="The Last of Us" />
                </div>

                <div className={mobileToggle ? "menu-section on" : "menu-section"} onClick={() => setMobileToggle(!mobileToggle)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul className="menu">
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
                                <div className="d-flex-8" onClick={() => setShowDropdown(!showDropdown)}>
                                    <span>Extra</span>
                                    <img src={DropdownIcon} alt="Ícone dropdown" />
                                </div>

                                {showDropdown && 
                                    <ul className="dropdown-menu">
                                        <li>
                                            <NavLink to="/americandreams">American Dreams</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/cordyceps">Cordyceps</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/factions">Factions</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/leftbehind">Left Behind</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/trophies">Troféus</NavLink>
                                        </li>
                                    </ul>
                                }
                                
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;