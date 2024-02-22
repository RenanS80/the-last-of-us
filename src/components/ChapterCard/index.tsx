import { useState } from "react";
import { Card } from 'types/ChapterCard';

import Arrow from "../../assets/images/chapters/arrow.svg";
import './styles.css';

type Props = {
    card: Card;
}

function ChapterCard({ card } : Props) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const bgCardStyle = {
        background: isHover ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${card.imageUrl}) center center/cover no-repeat` : `url(${card.imageUrl}) center center/cover no-repeat`,
    }

    return(
        <div className="chapter-card" style={bgCardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="chapter-card__info">
                <p className="chapter-card__title">Capítulo {card.id}: {card.name}</p>
                <p className="chapter-card__resume">{card.resume}...</p>
                <a href="#">
                    Leia mais
                    <img src={Arrow} alt="" />
                </a>
            </div>
        </div>

    )
}

export default ChapterCard;