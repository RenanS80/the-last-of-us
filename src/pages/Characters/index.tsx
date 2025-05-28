import Navbar from 'components/Navbar';
import Title from 'components/Title';
import CharactersTab from 'components/CharactersTab';
import Footer from 'components/Footer';

import './styles.css';

function Characters() {
    return(
        <>
            <Navbar />

            <main className="characters__main pad-bottom110">
                <div className="container">
                    <div className="characters__title">
                        <Title title="Conheça o elenco" textColor="white" />
                    </div>

                    <div className="t-center mar-top70">
                        <CharactersTab />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Characters;