import './styles.css';

type Props = {
    lstImages: Array<String>;
}

function CharactersGallery({ lstImages } : Props) {
    const img1 = String(lstImages[0]);
    const img2 = String(lstImages[1]);
    const img3 = String(lstImages[2]);
    const img4 = String(lstImages[3]);
    const img5 = String(lstImages[4]);

    return(
        <section className="collage-photos-grid">
            <div className="photo photo1">
                <img src={img1} alt="Joel e Sarah" />
            </div>
            <div className="photo photo2">
                <img src={img2} alt="Joel, Ellie e Marlene" />
            </div>
            <div className="photo photo3">
                <img src={img3} alt="Joel e Tess" />
            </div>
            <div className="photo photo4">
                <img src={img4} alt="Joel e Tommy" />
            </div>
            <div className="photo photo5">
                <img src={img5} alt="Joel, Ellie e Henry" />
            </div>
        </section>
    );
}

export default CharactersGallery;