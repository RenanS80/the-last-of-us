import SmallArrow from '../../assets/images/chapters/small-arrow.svg';

import './styles.css';

function Pagination() {

    const url = window.location.href;
    let urlNumChapter = Number(url[url.length-1]);
    let urlNumChapterAux = urlNumChapter;
    let lstChaptersToShow = [urlNumChapter];

    // ALTERAR A LÓGICA PARA ACEITAR DINAMICAMENTE OS CHAPTERS 
    while(lstChaptersToShow.length !== 5) {
        lstChaptersToShow.push(urlNumChapterAux + 1)
        urlNumChapterAux++
    }    

    return(
        <div className="pagination">
            <div className={urlNumChapter === 1 ? "pagination-buttons pagination-buttons__disabled" : "pagination-buttons"}>
                <img src={SmallArrow} alt="Capítulo anterior" />
            </div>

            {lstChaptersToShow.map((numChapter, index) => (
                <div className={numChapter === urlNumChapter ? "pagination-buttons pagination-buttons__active" : "pagination-buttons" } key={index}>
                    <p title={`Capítulo ${numChapter}`}>{numChapter}</p>
                </div>
            ))}

            <div className={urlNumChapter === 12 ? "pagination-buttons pagination-buttons__disabled next-chapter-button" : "pagination-buttons next-chapter-button"}>
                <img className="teste" src={SmallArrow} alt="Capítulo seguinte" />
            </div>
        </div>
    )
}

export default Pagination;