import { Card } from 'types/ChapterCard';

import './styles.css';

type Props = {
    card: Card;
}

function ChapterCard({ card } : Props) {
    return(
        <div className="chapter-card">
            <div className="chapter-card__image">
                <img src={require(`../../assets/images/chapters/${card.imageName}.jpg`)} alt="Capítulo 1" />
            </div>
            <div className="chapter-card__info">
                <div>
                    <p className="chapter-card__title">Capítulo {card.id}: {card.name}</p>
                    <small>{card.location}</small>
                    <p className="chapter-card__resume">{card.resume}...</p>
                </div>

                    <button>Leia mais</button>
            </div>
        </div>
    )
}

export default ChapterCard;