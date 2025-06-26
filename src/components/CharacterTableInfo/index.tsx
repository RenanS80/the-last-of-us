import './styles.css';

type Props = {
    infoBio: Array<Object>;
    infoBehindScenes: Array<Object>;
    photo: String,
    name: string
}

function CharacterTableInfo({ infoBio, infoBehindScenes, photo, name } : Props) {
    const strPhoto = String(photo);

    return(
        <section className="character__bio-information">
            <img src={strPhoto} alt={name} />
            <div className="bio-information__title">
                <p>Informações Biográficas</p>
            </div>
            <div>
               
                {infoBio.map((info, index) => (
                    <div className="bio-information__content" key={index}>
                        <div className="category">
                            <p>{Object.keys(info)}</p>
                        </div>
                        <div className="value">
                            <p>{Object.values(info)}</p>
                        </div>
                    </div>      
                ))}
  
            </div>

            <div className="bio-information__title">
                <p>Behind The Scenes</p>
            </div>
            <div>

                {infoBehindScenes.map((info, index) => (
                    <div className="bio-information__content" key={index}>
                        <div className="category">
                            <p>{Object.keys(info)}</p>
                        </div>
                        <div className="value">
                            <p>{Object.values(info)}</p>
                        </div>
                    </div>      
                ))}
                
            </div>
        </section>
    );
}

export default CharacterTableInfo;


            