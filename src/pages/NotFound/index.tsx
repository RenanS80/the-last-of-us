import { NavLink, useNavigate } from 'react-router-dom';

import Clicker from '../../assets/images/not-found/clicker.png';
import Arrow from '../../assets/images/not-found/left-arrow.svg';

import './styles.css';

function NotFound() {

    const navigate = useNavigate();

    return(
        <main className="not-found">
            <div className="container">
                <div>
                    <h1>Ops, esta página não foi encontrada</h1>
                    <p>A página que você está procurando não existe ou está temporariamente indisponível.</p>
                    <div className="not-found__group-buttons">
                        <button onClick={() => navigate(-1)}>
                            <img src={Arrow} alt="Voltar" />
                            Voltar
                        </button>
                        <NavLink to="/">Ir para a home</NavLink>
                    </div>
                </div>
                <div>
                    <img src={Clicker} alt="Clicker" />
                </div>
            </div>
        </main>
    )
}

export default NotFound;