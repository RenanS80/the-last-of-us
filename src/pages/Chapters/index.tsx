import { chapterCard } from 'data/chapterCard';

import Navbar from 'components/Navbar';
import Title from 'components/Title';

import './styles.css';
import Footer from 'components/Footer';
import ChapterCard from 'components/ChapterCard';

function Chapters() {
    return(
        <>
            <Navbar />

            <section className="chapters__hero"></section>

            <main className="chapters__main">
                <div className="container">
                    <Title title={"História"}/>

                    <div className="chapters__main-resume">
                        <p>
                            A trama de <strong>The Last of Us</strong> envolve o surto do fungo cordyceps entre os humanos. Esse fungo realmente existe na natureza, mas só ataca insetos, crescendo dentro do cérebro deles até o ponto de começarem a 
                            sair pelo corpo do pobre animal. No jogo, o cordyceps evoluiu e passou a infectar humanos, que se tornam extremamente agressivos, atacando outras pessoas. E como o fungo não para de crescer dentro do cérebro, 
                            quanto mais tempo alguém passa infectado, mais deformado fica o seu corpo. O jogo começa justamente quando a coisa toda está se espalhando e o protagonista Joel precisa fugir com a sua filha Sarah e seu 
                            irmão Tommy. 
                        </p>
                        <p>
                            The Last of Us é dividido em <strong>12 capítulos</strong>, passa por diferentes estados e estações do ano, mostrando a intensidade do relacionamento dos diferentes personagens envolvidos na trama.
                        </p>
                    </div>

                    <div className="chapters__main-cards">

                        {chapterCard.map(item => (
                            <div key={item.id}>
                                <ChapterCard card={item} />
                            </div>
                        ))}

                    </div>
                </div>
            </main>

            <Footer />

        </>
    )
}

export default Chapters;