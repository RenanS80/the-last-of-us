import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter12/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter12/image1.jpg';

import './styles.css';

function Chapter12() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2012/01_sBn5ywMUu.png?updatedAt=1762373279302',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2012/02_Vba7xivY6.jpg?updatedAt=1762373270469',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2012/03_M0P48v1yQ.png?updatedAt=1762373276960',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2012/04_xrdkvdTun.png?updatedAt=1762373276728',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2012/05_9H1DuMbeQ.png?updatedAt=1762373276573',
        }
    ];

    const chapterFunFacts = [
        'Este é o único capítulo em que não há inimigos;',
        'O final apresenta paralelos com o início do jogo, embora de forma invertida. No prólogo, eles começam em casa, depois usam o carro para escapar, que acaba sofrendo um acidente, forçando Joel a carregar Sarah, que é baleada por um soldado. Sarah então morre nos braços de Joel. Perto do final do jogo, uma Ellie inconsciente é carregada por Joel para fora do hospital e colocada em um carro. A dupla então dirige para casa, que é o assentamento de Tommy;',
        'A cena final, antes do capítulo terminar, quando Ellie diz "ok", é uma referência ao filme The Road, de 2009, que serviu de inspiração para o jogo original The Last of Us. Na cena final do filme, o menino (que não tem nome) é abordado por um grupo e convidado a se juntar a eles. A cena termina com um close no rosto do menino, que acena levemente com a cabeça e diz "ok", de forma muito semelhante à reação de Ellie;'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter12">
                <div className="container">
                    <h1>Capítulo 12 - Jackson</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 12 - Jackson" />
                        </div>
                        <p>Jackson é o décimo segundo capítulo de The Last of Us e marca o fim da jornada de Joel e Ellie na busca da cura.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Epílogo" />
                            <p>Joel e Ellie estão voltando para o assentamento de Tommy em Wyoming. A estrada fica bloqueada, forçando-os a sair do carro e começar a caminhar pela floresta. Joel comenta que Ellie e Sarah teriam sido ótimas amigas, pois as duas são muito 
                                parecidas. Assim que avistam o assentamento, Ellie confessa que não estava sozinha quando foi infectada e que precisou matar sua amiga Riley, sentindo-se culpada também pelas mortes de Tess e Sam. Joel a consola, mas Ellie, desconfiada, 
                                pergunta a Joel se o que ele disse sobre o que aconteceu no hospital era verdade, pedindo que ele jurasse. Joel mente novamente, concluindo com um &#8220;Eu juro&#8221;. Ellie responde &#8220;Ok&#8221; e os créditos sobem.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Joel e Ellie conversando" />
                                    <figcaption>Joel e Ellie conversando.</figcaption>
                                </figure>
                            </div> 
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ChapterLists lstFunFacts={chapterFunFacts} />
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['Epílogo']}
                                location="Jackson County, Wyoming"
                                date="Primavera de 2033"
                                lstCharacters={['Joel', 'Ellie']}
                                lstMentions={['Riley', 'Sarah', 'Sam', 'Vaga-lumes', 'cura']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={0}
                                qtdPingentes={0}
                                qtdManuais={0}
                                qtdGibis={1}
                                qtdDialogos={0}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Screenshots" />
                            <ChapterImageSlider slides={slides} />
                        </div>
                    </div>
                    
                    <Pagination />
                     
                </div>
            </main>
            
            <Footer />
        </>
    );
}

export default Chapter12;