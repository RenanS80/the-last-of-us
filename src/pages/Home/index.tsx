import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import Navbar from 'components/Navbar';
import TabJourney from 'components/TabJourney';
import Footer from 'components/Footer';

import ScrollDownIcon from '../../assets/images/home/scroll-down-icon.svg';
import PlayIcon from '../../assets/images/home/play-icon.svg';
import OfflineIcon from '../../assets/images/home/offline-icon.png';
import PlayerIcon from '../../assets/images/home/player-icon.png';
import ControllerIcon from '../../assets/images/home/controller-icon.png';
import Controller2Icon from '../../assets/images/home/controller2-icon.png';
import Controller3Icon from '../../assets/images/home/controller3-icon.png';
import HelpIcon from '../../assets/images/home/help-icon.png';
import FireflySmall from '../../assets/images/home/firefly-small.png';
import Star from '../../assets/images/home/star.svg';
import CloseModal from '../../assets/images/close-icon.svg';

import './styles.css';

function Home() {

    const anchorNavigate = (id : string) => {
        window.location.href = `#${id}`;
    };

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return(
        <>
            <Navbar />

            <section className="hero">
                <div className="container">
                    <div className="hero__action">
                        <h1>Endure and Survive</h1>
                        <div className="hero__btn-group">
                            <NavLink to="https://store.playstation.com/pt-br/product/UP9000-PPSA03396_00-THELASTOFUSPART1" target="_blank" className="btn--buy">Compre agora</NavLink>
                            <span className="btn--trailer" onClick={toggleModal}>
                                <img src={PlayIcon} alt="Trailer" />
                                Trailer
                            </span>
                            
                        </div>
                    </div>
                    <Link to="#" onClick={() => anchorNavigate('info')} className="scroll-down">
                        <img src={ScrollDownIcon} alt="" />
                    </Link>
                </div>
            </section>

            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}>
                        <div className="modal__content">
                            <iframe 
                                width="1000" 
                                height="562.5" 
                                className="iframe-modal"
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="The Last of Us Trailer"
                                src={`https://www.youtube.com/embed/WxjeV10H1F0`} 
                            />
                            <img src={CloseModal} className="close-modal" alt="Fechar vídeo" onClick={toggleModal} />
                        </div>
                    </div>
                </div>
            )}

            <section id="info">
                <div className="container">
                    <div className="info__content">
                        <div>
                            <img src={OfflineIcon} alt="Jogo offline habilitado" />
                            <p>Jogo offline habilitado</p>
                        </div>
                        <div>
                            <img src={PlayerIcon} alt="1 jogador" />
                            <p>1 jogador</p>
                        </div>
                        <div>
                            <img src={ControllerIcon} alt="Compatível com uso remoto" />
                            <p>Compatível com uso remoto</p>
                        </div>
                        <div>
                            <img src={Controller2Icon} alt="Função de vibração necessária" />
                            <p>Compatível com função de vibração</p>
                        </div>
                        <div>
                            <img src={Controller3Icon} alt="Efeito gatilho necessário" />
                            <p>Compatível com efeito gatilho</p>
                        </div>
                        <div>
                            <img src={HelpIcon} alt="Compatível com a ajuda do jogo" />
                            <p>Compatível com a ajuda do jogo</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="journey">
                <div className="container">
                    <div className="journey__content">
                        <h2>A incrível jornada de Joel e Ellie</h2>
                        <TabJourney />

                    </div>
                </div>
            </section>

            <section className="awards">
                <img src={FireflySmall} className="awards__firefly-small" alt="Vaga-lume" />
                <img src={FireflySmall} className="awards__firefly-small" alt="Vaga-lume" />
                
                <div className="container">
                    <div className="awards__title">
                        <h2>Mais de 200 prêmios de jogo do ano</h2>
                    </div>
                    <div className="awards__score">
                        <div className="awards__score-first-block">
                            <div className="awards__score-machinima">
                                <h2>10/10</h2>
                                <h2>Machinima</h2>
                            </div>
                            <div className="awards__score-telegraph">
                                <div>
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                </div>
                                <h2>Telegraph</h2>
                            </div>
                        </div>

                        <div className="awards__score-second-block">
                            <div className="awards__score-empire">
                                <div>
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                    <img src={Star} alt="Estrela" />
                                </div>
                                <h2>Empire</h2>
                            </div>
                            <div className="awards__score-joistiq">
                                <h2>10/10</h2>
                                <h2>Joistiq</h2>
                            </div>
                        </div>

                        <div className="awards__score-comment">
                            <blockquote cite="http://ign.com">
                                <h3>&#34;The Last of Us é uma obra de arte&#34;</h3>
                                <h3>&#45; IGN</h3>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home;