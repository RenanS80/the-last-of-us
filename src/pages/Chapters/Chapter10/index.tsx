import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter10/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter10/image1.png';

import './styles.css';

function Chapter10() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2010/01_qOoSnP_kc.png?updatedAt=1753740533265',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2010/02_4JwMZ2lpV.png?updatedAt=1753740533557',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2010/03_BFSZ9ldHC.png?updatedAt=1753740532485',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2010/04__GejcJ3r4.jpg?updatedAt=1753740523982',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2010/05_ciSFx4AACC.png?updatedAt=1753740526192',
        }
    ];

    const chapterFunFacts = [
        'Na seção onde Joel e Ellie encontram a girafa próxima ao depósito de ônibus é semelhante à cena em Jurassic Park, onde um Brachiosaurus está alimentando em uma árvore onde o Dr. Grant está dormindo;',
        'Este é o último capítulo em que aparece um infectado no jogo;',
        'Se o jogador conseguir matar todos os infectados no túnel subterrâneo (incluindo 3 baiacus, 5 estaladores e 10 corredores), Joel murmurará a citação "Preservar e sobreviver".'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter10">
                <div className="container">
                    <h1>Capítulo 10 - Depósito de Ônibus</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 10 - Depósito de Ônibus" />
                        </div>
                        <p>Depósito de Ônibus é o décimo capítulo de The Last of Us, no qual Joel e Ellie chegam a Salt Lake em busca dos Vaga-lumes.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Saída pela rodovia" />
                            <p>Na primavera, vemos Joel e Ellie entrarem em Salt Lake City, onde eles deveriam encontrar os Vaga-Lumes no St. Mary's Hospital. Os dois agora têm um laço muito mais forte desde os eventos do último inverno e Joel observa que Ellie ainda está abalada 
                                por eles, devido ao seu comportamento quieto e distante de Joel.
                            </p> <br />
                            <p>Eles passam por uma rodovia cheia de carros abandonados &#40;outra zona de quarentena vazia&#41; e fazem o seu caminho através de uma estação de ônibus. Joel pede ajuda a Ellie para subir na plataforma. Ellie sobe primeiro, mas percebe algo e foge à 
                                frente de Joel. Ele a alcança e atenta várias girafas vagando pela cidade, agora deserta. Enquanto param por um momento para observá-las, Joel hesita. Ele diz a ela que eles não têm que fazer isso, e se ela quiser eles podem voltar para Tommy 
                                e começar uma nova vida. No entanto, Ellie está determinada a continuar dizendo que eles passaram por muita coisa para chegar tão perto e desistir, afirmando que &#8220;nada pode ser em vão&#8221;.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Joel e Ellie observando as girafas" />
                                    <figcaption>Joel e Ellie observando as girafas.</figcaption>
                                </figure>
                            </div> 
                            <p>Ao passarem por um grande número de tendas médicas, Joel comenta sobre os primeiros meses da infecção e que tinha feito parte de uma triagem parecida com a presente, cercado por famílias destruídas. Ellie então lhe dá a foto dele com Sarah 
                                e pede desculpas por roubá-la de Maria na represa. Joel pega a foto e a agradece.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Túnel subterrâneo" />
                            <p>Joel e Ellie fazem o seu caminho através de um túnel subterrâneo, repleto de infectados, como corredores, estaladores e baiacus. Após passarem por eles, a dupla chega em uma área inundada e precisam passar por cima de veículos abandonados. 
                                Quando pulam em cima de um ônibus, o mesmo cai, mas Ellie consegue se salvar, diferentemente de Joel que afunda com o veículo. Ellie tenta salvar Joel, mas acaba caindo e se machucando ao bater com a cabeça no ônibus, em seguida ela afunda e 
                                é arrastada pela correnteza. 
                            </p> <br />
                            <p>Quando está prestes a morrer afogada, Joel a salva e a traz à superfície. Ao perceber que a garotinha não está respirando, ele tenta fazer uma massagem cardíaca sobre ela, mas Vaga-lumes fardados aparecem e ordenam 
                                que ele fique de pé, mas Joel ignora a ordem e recebe uma coronhada que o deixa inconsciente.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ChapterLists lstFunFacts={chapterFunFacts} />
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['Saída pela rodovia', 'Túnel subterrâneo']}
                                location="Salt Lake City, Utah"
                                date="Primavera de 2033"
                                lstCharacters={['Joel', 'Ellie']}
                                lstEnemies={['Infectados']}
                                lstMentions={['Sarah', 'início do cordyceps', 'triagem', 'girafa', "St. Mary's Hospital", 'Vaga-lumes']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={3}
                                qtdPingentes={3}
                                qtdManuais={1}
                                qtdGibis={2}
                                qtdDialogos={6}
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

export default Chapter10;