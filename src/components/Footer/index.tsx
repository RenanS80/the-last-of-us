import NaughtyDogLogo from '../../assets/images/naughty-dog.png';
import PlaystationLogo from '../../assets/images/playstation.png';
import './styles.css';

function Footer() {
    return(
        <footer>
            <div className="container">
                <div>
                    <p>Este site é feito por um fã e contém <strong>spoilers</strong> sobre a história.</p>
                </div>

                <div className="footer__copyright">
                    <div className="footer__copyright-text">
                        <p>&copy; 2023 Sony Interactive Entertainment LLC &#45; Playstation Studios</p> 
                    </div>
                    <div className="footer__copyright-images">
                        <img src={NaughtyDogLogo} alt="Naughty Dog" />
                        <img src={PlaystationLogo} alt="Playstation" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;