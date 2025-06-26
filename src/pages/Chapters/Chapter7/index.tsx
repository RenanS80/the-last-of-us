import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter7/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter7/image1.jpg';
import Image2 from '../../../assets/images/chapters/chapter7/image2.jpg';

import './styles.css';

function Chapter7() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%207/01_aZrDrtWwn.png?updatedAt=1749243521543',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%207/02_j_6xA4N9o.png?updatedAt=1749243520018',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%207/03_GBqA6BlJa.png?updatedAt=1749243521840',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%207/04_Z5tAMWWv9.png?updatedAt=1749243520870',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%207/05_YZAjMy_9r.jpg?updatedAt=1749243515095',
        }
    ];

    const chapterFunFacts = [
        'Em um dos cômodos do 2° andar da casa de campo, sobre o computador há uma cópia do jogo de tabuleiro Carcassonne;',
        'A casa de campo é muito limpa e conservada no jogo, com móveis e janelas intactos. No entanto, a arte conceitual mostra uma casa desordenada com janelas quebradas;',
        'Este capítulo e o "Laboratório Vaga-lume" são os únicos capítulos que não têm infectados.'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter7">
                <div className="container">
                    <h1>Capítulo 7 - Represa do Tommy</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 7 - Represa do Tommy" />
                        </div>
                        <p>Usina Hidrelétrica é o sétimo capítulo de The Last of Us, no qual Joel e Ellie vão em busca de Tommy.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Usina hidrelétrica" />
                            <p>Em Wyoming, meses após a morte de Henry e Sam, Joel conta à Ellie sobre seu irmão Tommy, que havia entrado para a milícia Vaga-lume há alguns anos e que eles tinham se separado, afirmando que &#8220;enxergavam o mundo de formas diferentes&#8221;. 
                                Em seguida, Joel e Ellie vão ao encontro de Tommy, na esperança de obter ajuda para chegar aos Vaga-lumes e fazem seu caminho em direção a uma represa. No local, encontram uma pequena sepultura com um urso de pelúcia sobre ela, o que 
                                faz Ellie lembrar que esqueceu de colocar o robô de brinquedo no túmulo de Sam. Joel se recusa a falar sobre isso e diz que independente do que aconteça, eles sempre vão continuar em frente. 
                            </p> <br />
                            <p>Posteriormente, a dupla chega ao portão da usina, mas ao tentar abri-lo são surpreendidos por algumas pessoas que estavam patrulhando a entrada e ameaçam Joel e Ellie. Entretanto, Tommy está entre eles e ameniza a situação ao ver o irmão, 
                                cumprimentando-o com um abraço. Ele os apresenta Maria, sua mulher, que juntamente com o pai foram responsáveis ativação da usina, tornando-se autossustentável e ajudando diversas famílias nas proximidades. 
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Joel encontra Tommy" />
                                    <figcaption>Joel encontra Tommy.</figcaption>
                                </figure>
                            </div> 
                            <p>Em seguida, os irmãos andam pela usina em direção a uma sala, para Joel explicar porque foi pedir ajuda. Durante a conversa, Tommy diz que voltou ao Texas &#40;cidade onde ambos moravam antes do surto&#41; há alguns meses e que a 
                                maioria de suas coisas já não estavam mais lá, mas encontrou uma foto de Sarah e Joel juntos, mas Joel se recusa a guardá-la. 
                            </p> <br />
                            <p>Ao chegarem na sala, Joel diz a Tommy sobre a imunidade de Ellie e pede para levá-la aos Vaga-lumes. Tommy logo recusa, já que ele é o responsável pela usina e pelas pessoas da comunidade próxima. Os dois discutem e irritado, 
                                Joel empurra Tommy contra a parede e o chama de ingrato por todos os anos em que cuidou dele. Em seguida, a usina é atacada por bandidos, forçando Joel e Tommy a se unirem novamente para combatê-los. Depois de eliminar os bandidos, Tommy concorda 
                                em levá-la e tenta convencer Maria, que discute com ele, lembrando-o dos diversos perigos que ele poderia enfrentar fora da usina com infectados e caçadores. Ao mesmo tempo, Ellie, suspeitando que Joel vai deixá-la, rouba um dos cavalos e foge em 
                                direção ao bosque.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Casa de campo" />
                            <p>Joel e Tommy pegam rapidamente seus cavalos e vão atrás de Ellie. No caminho, encontram alguns caçadores que armaram uma emboscada para a dupla. Após eliminá-los, continuam a procurar por Ellie, seguindo pegadas deixadas por seu cavalo, até que 
                                finalmente encontram uma casa de campo abandonada, onde o animal se encontra. Joel desce do cavalo, entra na casa e encontra Ellie no 2º andar lendo um diário deixado no quarto. Em seguida, ele repreende Ellie por ter fugido da 
                                usina e consequentemente colocar em risco sua vida, que segundo ele, é importante para salvar a humanidade, mas Ellie o confronta afirmando que todas as pessoas de que ela gostava morreram ou a abandonaram, menos Joel, e que longe dele, ela só
                                sentiria mais medo.
                            </p> <br />
                            <p>Durante a discussão, Tommy entra no quarto e avisa que caçadores chegaram ao rancho. Após matá-los, eles voltam para os cavalos e seguem seu rumo a comunidade de Jackson, mas no meio do caminho Joel muda de opinião e decide levar pessoalmente 
                                Ellie aos Vaga-lumes. Com isso, Tommy informa que os Vaga-lumes têm uma base no prédio de Ciências da Universidade Leste do Colorado. Joel pede para Ellie entregar o cavalo à Tommy e os irmãos se despedem.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Joel, Ellie e Tommy chegando a Jackson" />
                                    <figcaption>Joel, Ellie e Tommy chegando a Jackson.</figcaption>
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
                                lstSections={['Usina hidrelétrica', 'Casa de campo']}
                                location="Jackson County, Wyoming"
                                date="Outono de 2033"
                                lstCharacters={['Joel', 'Ellie', 'Tommy', 'Maria']}
                                lstEnemies={['Caçadores']}
                                lstMentions={['Jackson', 'comunidade', 'vaga-lumes', 'usina', 'rancho', 'universidade']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={2}
                                qtdPingentes={2}
                                qtdManuais={1}
                                qtdGibis={2}
                                qtdDialogos={3}
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

export default Chapter7;