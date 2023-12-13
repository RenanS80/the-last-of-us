import { useState } from 'react';
import { journey } from 'data/journey';

import PlusIcon from '../../assets/images/home/plus-icon.png';
import MinusIcon from '../../assets/images/home/minus-icon.png';

import './styles.css';

function TabJourney() {

    const [toggleTabJourney, setToggleTabJourney] = useState(1);

    const handleTabClick = (index: number) => {
        setToggleTabJourney(index);
    }

    return (
        <div className="tab-journey">

            {journey.map((j,i) => 
                <>
                    <div className="tab-journey__title" key={i} id={String(j.id)} onClick={() => handleTabClick(j.id)}>
                        {toggleTabJourney === Number(`${j.id}`) ? <img src={MinusIcon} alt="Minimizar" /> : <img src={PlusIcon} alt="Expandir" />}
                        <h3 className={toggleTabJourney === Number(`${j.id}`) ? "active" : ""}>{j.title}</h3>
                    </div>

                    <div className="tab-journey__description" key={i} id={String(j.id)}>
                        {toggleTabJourney === Number(`${j.id}`) && <p>{j.description}</p>}
                    </div>
                </>
            )}

        </div>
    )
}

export default TabJourney;