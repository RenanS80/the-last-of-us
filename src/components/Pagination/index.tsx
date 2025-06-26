import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import PaginationArrow from '../../assets/images/chapters/pagination-arrow.svg';
import PaginationDisabledArrow from '../../assets/images/chapters/pagination-disabled-arrow.svg';

import './styles.css';

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

    // Fazer scroll top quando mudar de página na paginação
    useEffect(() => {
        const body: any = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);
        
    return(
        <div className="pagination">
            <NavLink to={urlNumChapter === 1 ? `` : `/chapters/${urlNumChapter - 1}`} className={urlNumChapter === 1 ? "pagination-buttons previous-chapter-button pagination-buttons__disabled" : "pagination-buttons previous-chapter-button"}>
                <img src={urlNumChapter === 1 ? PaginationDisabledArrow : PaginationArrow} className={urlNumChapter === 1 ? '' : 'transform-180deg'} title="Capítulo anterior" alt="Capítulo anterior" />
            </NavLink>

            {lstChaptersToShow.map((numChapter, index) => (
                <NavLink to={`/chapters/${numChapter}`} className={numChapter === urlNumChapter ? "pagination-buttons pagination-buttons__active" : "pagination-buttons" } key={index}>
                    <p title={`Capítulo ${numChapter}`}>{numChapter}</p>
                </NavLink>
            ))}

            <NavLink to={urlNumChapter === 12 ? `` : `/chapters/${urlNumChapter + 1}`} className={urlNumChapter === 12 ? "pagination-buttons pagination-buttons__disabled next-chapter-button" : "pagination-buttons next-chapter-button"}>
                <img src={PaginationArrow} title="Próximo capítulo" alt="Próximo capítulo" />
            </NavLink>
        </div>
    );
}

export default Pagination;