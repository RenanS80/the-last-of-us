import { NavLink } from 'react-router-dom';
import { joel } from 'data/relatedCharacters/joel';

import CharacterSummary from 'components/CharacterSummary';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import relatedCharactersIcon from '../../../assets/images/characters/person-icon.svg';
import QuotationMark from '../../../assets/images/characters/quotation-mark.svg';
import JoelInfoBio from '../../../assets/images/characters/joel/joel-info-bio.jpg';
import Img1 from '../../../assets/images/characters/joel/img1.png';
import Img2 from '../../../assets/images/characters/joel/img2.png';
import Img3 from '../../../assets/images/characters/joel/img3.png';
import Img4 from '../../../assets/images/characters/joel/img4.png';
import Img5 from '../../../assets/images/characters/joel/img5.png';

function Ellie() {

    const summaryItems = [
        {
            main: 'Biografia',
            nested: ['Antecedentes e início da vida']
        },
        {
            main: 'Eventos de The Last of Us',
            nested: [
                'Perdendo Sarah', 'Sobrevivendo', 'Confrontando Robert', 'Contrabandeando Ellie', 
                'Encontrando Bill', 'Enfrentando caçadores em Pittsburgh', 'Conhecendo Henry e Sam',
                'Encontrando Tommy', 'A universidade', 'O inverno', 'Chegando em St. Mary', 'Salvando Ellie'
            ]
        }, 
        {
            main: 'Habilidades'
        },
        {
            main: 'Hobbies'
        },
        {
            main: 'Galeria'
        }
    ]

    return(
        <>
            <Navbar />
            

        </>
    )
}

export default Ellie;