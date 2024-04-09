import { NavLink } from 'react-router-dom';
import SmallArrow from '../../assets/images/chapters/small-arrow.svg';

import './styles.css';
import { useEffect } from 'react';

function Pagination() {

    const url = window.location.href;
    let urlNumChapter = Number(url[url.length-1]);
    let urlNumChapterAux = urlNumChapter;
    let lstChaptersToShow = [urlNumChapterAux];

    if(urlNumChapter === 1) {
        while(lstChaptersToShow.length !== 5) {
            lstChaptersToShow.push(urlNumChapterAux + 1);
            urlNumChapterAux++;
        }
    }

    else if(urlNumChapter === 2) {
        lstChaptersToShow.pop();
        lstChaptersToShow.push(urlNumChapterAux - 1);
        lstChaptersToShow.push(urlNumChapterAux);
        lstChaptersToShow.push(urlNumChapterAux + 1);
        lstChaptersToShow.push(urlNumChapterAux + 2);
        lstChaptersToShow.push(urlNumChapterAux + 3);
    }

    else if(urlNumChapter >= 3 && urlNumChapter <= 10) {
        lstChaptersToShow.pop();
        lstChaptersToShow.push(urlNumChapterAux - 2);
        lstChaptersToShow.push(urlNumChapterAux - 1);
        lstChaptersToShow.push(urlNumChapterAux);
        lstChaptersToShow.push(urlNumChapterAux + 1);
        lstChaptersToShow.push(urlNumChapterAux + 2);
    }

    else if(urlNumChapter === 11) {
        lstChaptersToShow.pop();
        lstChaptersToShow.push(urlNumChapterAux - 3);
        lstChaptersToShow.push(urlNumChapterAux - 2);
        lstChaptersToShow.push(urlNumChapterAux - 1);
        lstChaptersToShow.push(urlNumChapterAux);
        lstChaptersToShow.push(urlNumChapterAux + 1);
    }

    else if(urlNumChapter === 12) {
        while(lstChaptersToShow.length !== 5) {
            lstChaptersToShow.push(urlNumChapterAux - 1);
            urlNumChapterAux--;
        }
        lstChaptersToShow.reverse();
    }   

    // Fazer scroll top quando mudar a página do chapter
    useEffect(() => {
        const body: any = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);
        
    return(
        <div className="pagination">
            <NavLink to={`/chapters/${urlNumChapter - 1}`} className={urlNumChapter === 1 ? "pagination-buttons pagination-buttons__disabled" : "pagination-buttons"}>
                <img src={SmallArrow} alt="Capítulo anterior" />
            </NavLink>

            {lstChaptersToShow.map((numChapter, index) => (
                <NavLink to={`/chapters/${numChapter}`} className={numChapter === urlNumChapter ? "pagination-buttons pagination-buttons__active" : "pagination-buttons" } key={index}>
                    <p title={`Capítulo ${numChapter}`}>{numChapter}</p>
                </NavLink>
            ))}

            <NavLink to={`/chapters/${urlNumChapter + 1}`} className={urlNumChapter === 12 ? "pagination-buttons pagination-buttons__disabled next-chapter-button" : "pagination-buttons next-chapter-button"}>
                <img className="teste" src={SmallArrow} alt="Capítulo seguinte" />
            </NavLink>
        </div>
    )
}

export default Pagination;