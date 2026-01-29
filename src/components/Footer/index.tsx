import { NavLink } from 'react-router-dom';
import NaughtyDogLogo from '../../assets/images/naughty-dog.png';
import PlaystationLogo from '../../assets/images/playstation.png';
import './styles.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <div className="container">
                <div>
                    <p>Este site é feito por um fã e contém spoilers sobre a história. Referências obtidas em <NavLink to="https://thelastofus.fandom.com/" target="_blank">The Last of Us Fandom</NavLink>.</p>
                </div>

                <div className="footer__copyright">
                    <div className="footer__copyright-text">
                        <p>&copy; {currentYear} Sony Interactive Entertainment LLC &#45; Playstation Studios.</p> 
                    </div>
                    <div className="footer__copyright-images">
                        <img src={NaughtyDogLogo} alt="Naughty Dog" />
                        <img src={PlaystationLogo} alt="Playstation" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;