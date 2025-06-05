import { SummaryCharacter } from 'types/SummaryCharacter';
import SummaryIcon from '../../assets/images/characters/summary-icon.svg';

import './styles.css';

type Props = {
    lstItems: Array<SummaryCharacter>;
}

function CharacterSummary({ lstItems } : Props) {
    return(
        <div className="summary">
            <div className="summary__header">
                <div>
                    <img src={SummaryIcon} alt="Índice" />
                    <p>Índice</p>
                </div>
            </div>
            <div className="summary__content">
                <ol>

                    {lstItems.map((item, key) => (
                        <li key={key}>
                            <strong>{item.main}</strong>
                                    
                            {item.nested !== undefined &&
                                <ol className="summary__sublist">
                                    {item.nested.map((subItem, subKey) => (
                                        <li key={subKey}>{subItem}</li>
                                    ))}
                                </ol>
                            }                                
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}

export default CharacterSummary;