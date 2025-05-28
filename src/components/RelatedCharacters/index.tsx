import { NavLink } from "react-router-dom";
import relatedCharactersIcon from '../../assets/images/characters/person-icon.svg';
import { RelatedCharactersType } from "types/RelatedCharactersType";

import './styles.css';

type Props = {
    character: Array<RelatedCharactersType>;
}

function RelatedCharacters({ character } : Props) {
    return(
        <aside className="related__characters">
            <div className="related__characters-title">
                <img src={relatedCharactersIcon} alt="Outros Personagens" />
                <h4>Outros personagens</h4>
                <span></span>
            </div>
            <div>
                
                {character.map(cha => (
                    <div key={cha.id}>
                        <NavLink to={cha.url}>
                            <img src={cha.image} alt={cha.name} />
                            <p>{cha.name}</p>
                        </NavLink>
                    </div>
                ))}
                
            </div>
        </aside>
    )
}

export default RelatedCharacters;