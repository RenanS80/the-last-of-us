import { useState } from 'react';

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
                                <a href="#functionality" style={{fontWeight: 700}}>Home</a>
                            </li>
                            <li>
                                <a href="#app">História</a>
                            </li>
                            <li>
                                <a href="#plan">Personagens</a>
                            </li>
                            <li>
                                <a href="#contact">Sobre</a>
                            </li>
                            <li>
                                <a href="#extra">Extra</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;