import { useState } from 'react';
import { ImageSlider } from 'types/ImageSlider';

import LeftArrow from '../../assets/images/chapters/left-arrow.svg';
import RightArrow from '../../assets/images/chapters/right-arrow.svg';
import SlideControl from '../../assets/images/chapters/slide-control.svg';
import ActiveSlideControl from '../../assets/images/chapters/active-slide-control.svg';

import './styles.css';

type Props = {
    slides: Array<ImageSlider>;
}

function ChapterImageSlider({ slides } : Props) {

    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(`url(${slides[currentIndex].url})`)

    console.log(slides.length)

    const previousImage = () => {
        const isFirstSlide = currentIndex === 0 ? true : false;
        const newIndex = isFirstSlide ? currentIndex : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextImage = () => {
        const isLastSlide = currentIndex === slides.length - 1 ? true : false;
        const newIndex = isLastSlide ? currentIndex : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (index : number) => {
        setCurrentIndex(index);
    }

    return(
        <div className="image-slider">
            <div className="left-arrow" onClick={previousImage}>
                <img src={LeftArrow} alt="Imagem anterior" />
            </div>
            <div className="right-arrow" onClick={nextImage}>
                <img src={RightArrow} alt="Imagem seguinte" />
            </div>
            <div className="image-slider__background" style={{background: `url(${slides[currentIndex].url}) center center/cover no-repeat`}}></div>
            <div className="slide-control">
                {slides.map((slide, index) => (
                    <div key={index} onClick={() => goToSlide(index)}>
                        <img src={SlideControl} alt="Selecionar imagem" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChapterImageSlider;