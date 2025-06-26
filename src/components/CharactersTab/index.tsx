import { useState } from 'react';
import { mainCharacters } from 'data/mainCharacters';
import { secondaryCharacters } from 'data/secondaryCharacters';
import { infectedCharacters } from 'data/infectedCharacters';
import { otherCharacters } from 'data/otherCharacters';

import CharactersImage from 'components/CharactersImage';
import CloseModal from '../../assets/images/close-icon.svg';

import './styles.css';
import { NavLink } from 'react-router-dom';

function CharactersTab() {

    const [toggleState, setToggleState] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalName, setName] = useState('');
    const [modalImage, setModalImage] = useState('');
    const [modalResumeFirst, setModalResumeFirst] = useState('');
    const [modalResumeSecond, setModalResumeSecond] = useState('');
    const [modalBioUrl, setModalBioUrl] = useState('');
    
    
    const toggleTab = (index : number) => setToggleState(index);
    const toggleModal = (character : any) => {
        setName(character !== '' ? character.name : '');
        setModalImage(character !== '' ? character.srcModalImage : '');
        setModalResumeFirst(character !== '' ? character.modalResume.firstPart : '');
        setModalResumeSecond(character !== '' ? character.modalResume.secondPart : '');
        setModalBioUrl(character !== '' ? character.bioUrl : '');
        setModal(!modal);
    }
    
    return (
        <div>
            <div className="tabs__header">
                <div className={toggleState === 1 ? "tabs active--tabs" : "tabs"} onClick={() => toggleTab(1)}>Elenco principal</div>
                <div className={toggleState === 2 ? "tabs active--tabs" : "tabs"} onClick={() => toggleTab(2)}>Elenco secundário</div>
                <div className={toggleState === 3 ? "tabs active--tabs" : "tabs"} onClick={() => toggleTab(3)}>Infectados</div>
                <div className={toggleState === 4 ? "tabs active--tabs" : "tabs"} onClick={() => toggleTab(4)}>Outros</div>
            </div>

            <div className="tabs__content">
                <div className={toggleState === 1 ? "content active--content" : "content"}>
                    <div className="tabs__image-container main-characters">

                        {mainCharacters.map(item => (
                            <div key={item.id} onClick={() => toggleModal(item)}>
                                <CharactersImage character={item} />
                            </div>
                        ))}

                    </div>
                </div>

                {modal && (
                    <div className="modal">
                        <div className="overlay" onClick={() => toggleModal('')}>
                            <div className="modal__content--character">
                                <div>
                                    <img src={modalImage} alt={modalName} />
                                </div>
                                <div className="modal__content-text">
                                    <h1>{modalName}</h1>
                                    <p>{modalResumeFirst}</p>
                                    <p>{modalResumeSecond}</p>
                                    <div className="mar-top45">
                                        <NavLink to={modalBioUrl} className="btn-modal">Biografia completa</NavLink>
                                    </div>
                                </div>
                                <img src={CloseModal} className="close-modal" alt="Fechar vídeo" />
                            </div>
                        </div>
                    </div>
                )}

                <div className={toggleState === 2 ? "content active--content" : "content"}>
                    <div className="tabs__image-container other-characters">
                        
                        {secondaryCharacters.map(item => (
                            <div key={item.id} onClick={() => toggleModal(item)}>
                                <CharactersImage character={item} />
                            </div>
                        ))}
                       
                    </div>
                </div>
                <div className={toggleState === 3 ? "content active--content" : "content"}>
                    <div className="tabs__image-container other-characters">
                        
                        {infectedCharacters.map(item => (
                            <div key={item.id} onClick={() => toggleModal(item)}>
                                <CharactersImage character={item} />
                            </div>
                        ))}
                       
                    </div>
                </div>
                <div className={toggleState === 4 ? "content active--content" : "content"}>
                    <div className="tabs__image-container other-characters">
                        
                        {otherCharacters.map(item => (
                            <div key={item.id} onClick={() => toggleModal(item)}>
                                <CharactersImage character={item} />
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharactersTab;