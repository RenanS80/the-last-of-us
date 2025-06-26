import { Characters } from 'types/Characters';
import './styles.css';

type Props = {
    character: Characters;
}

function CharactersImage({ character } : Props) {   
    return (
        <div>   
            <picture className="character__image">
                <source srcSet={character.srcImageXl} media="(min-width: 1100px)" />
                <source srcSet={character.srcImageSm} media="(min-width: 768px)" />
                <img src={character.srcImageMd} alt={character.name} />
            </picture>
            <p>{character.name}</p>
        </div>
    );
}

export default CharactersImage;