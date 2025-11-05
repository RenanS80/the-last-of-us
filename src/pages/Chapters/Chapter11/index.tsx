import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter11/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter11/image1.png';
import Image2 from '../../../assets/images/chapters/chapter11/image2.jpg';

import './styles.css';

function Chapter11() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2011/01_zQ_bUNGeF.jpg?updatedAt=1762208665019',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2011/02_oBK57_DeD.jpg?updatedAt=1762208665259',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2011/03_aJ0qBoReD.jpg?updatedAt=1762208664549',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2011/04_fYVWsnkrL.jpg?updatedAt=1762208665189',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%2011/05_0M1pu5HCin.jpg?updatedAt=1762208665084',
        }
    ];

    const chapterFunFacts = [
        'Este capítulo é um dos três em que o jogador não encontra nenhum infectado. É também o último capítulo em que o jogador controla Joel;',
        'Em uma das salas do hospital há uma tabe de teste de visão, no qual as letras formam a mensagem: "RUN YOU R NEARLY THERE DONT QUIT" que é um aviso ao jogador para que não desista, pois a jornada está quase no fim;',
        'Se Joel permanecer na sala de cirurgia com os médicos por muito tempo sem fazer nada, uma cena será exibida mostrando os Vagalumes entrando e matando-o;',
        'Quando Joel foge dos Vagalumes carregando Ellie, a situação é muito semelhante a quando ele fugiu dos infectados carregando Sarah. Desta vez, ele é parado por Marlene, que o ameaça com uma arma, assim como um soldado fez vinte anos antes.'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter11">
                <div className="container">
                    <h1>Capítulo 11 - Laboratório dos Vaga-lumes</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 11 - Laboratório dos Vaga-lumes" />
                        </div>
                        <p>Laboratório dos Vaga-lumes é o décimo primeiro e penúltimo capítulo de The Last of Us e marca uma etapa decisiva na história de Joel e Ellie.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="O hospital" />
                            <p>Na noite de 28 de abril de 2034, Joel acorda em uma cama de hospital e encontra Marlene lhe dando as boas-vindas aos Vaga-lumes. Depois de se desculpar pelo ferimento na cabeça, Marlene pergunta como Joel e Ellie conseguiram encontrá-los, 
                                e  Joel responde que Ellie &#8220;lutou como louca&#8221; para chegar ali.
                            </p> <br />
                            <p>Joel pede para ver Ellie, mas Marlene o impede, dizendo que ela está sendo preparada para uma cirurgia naquele momento. Marlene revela que o fungo Cordyceps no cérebro de Ellie sofreu uma mutação, segundo os médicos, e é por isso que ela é imune. 
                                Estudar o cérebro dela permitiria aos médicos desenvolver uma vacina, mas, como o fungo se espalha por todo o cérebro, Joel percebe que Ellie morreria no processo e insiste para que Marlene encontre outra pessoa, mas é ele é detido por Ethan, 
                                um dos guardas de Marlene.
                            </p> <br />
                            <p>Prevendo isso, e sabendo que Joel havia criado um forte laço com Ellie, a ponto de não permitir que a cirurgia prosseguisse, Marlene ordena a Ethan que leve Joel para fora do hospital e o mate se ele tentar qualquer coisa. Marlene sai, e Joel, 
                                depois de ver sua mochila, desarma e tortura Ethan para que ele lhe diga onde fica a sala de cirurgia. Ao descobrir que fica no último andar, Joel o mata..
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Joel e Ethan" />
                                    <figcaption>Joel e Ethan.</figcaption>
                                </figure>
                            </div> 
                            <p>Alertados pelos tiros, os Vaga-lumes encontram o corpo de Ethan e começam a procurar Joel para matá-lo. Após avançar pelo hospital, Joel chega ao último andar e encontra várias gravações, uma delas sendo a avaliação do cirurgião-chefe sobre a imunidade 
                                de Ellie e outras duas gravando a indecisão e a relutância de Marlene em matar a criança que prometeu proteger. Joel finalmente encontra a sala de cirurgia, onde mais Vaga-lumes patrulhavam o corredor que levava à sala de operações. 
                                Depois de matá-los e/ou evitá-los, Joel invade a sala de cirurgia. O cirurgião-chefe, Jerry Anderson, tenta impedir que Joel leve Ellie, que está inconsciente, bloqueando seu caminho, mas é morto por Joel. Deixando os dois assistentes à própria sorte, 
                                Joel carrega Ellie enquanto mais Vaga-lumes se aproximam. Ele consegue chegar ao elevador e alcançar a garagem, mas é confrontado por Marlene.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Joel chega à sala de operações" />
                                    <figcaption>Joel chega à sala de operações.</figcaption>
                                </figure>
                            </div> 
                            <p>Marlene tenta argumentar com ele, perguntando quanto tempo Ellie poderá viver em segurança sem ser atacada por infectados ou assassinada por bandidos. Joel ignora o argumento, dizendo que não cabe a Marlene decidir, mas também sem ter certeza se é isso 
                                que Ellie quer. Marlene permite que ele viva se entregar Ellie aos Vagalumes e, lentamente, abaixa a arma como um sinal de confiança, enquanto caminha em sua direção. Joel hesita por alguns instantes, antes de atirar nela. Depois de colocar Ellie em um carro,
                                 ele volta até Marlene, que implora para que ele a deixe ir, mas Joel a mata, dizendo: &#8220;Você viria atrás dela&#8221;.
                            </p> <br />
                            <p>Enquanto Joel dirige para fora da cidade, Ellie acorda, perguntando o que havia acontecido. Joel responde que eles encontraram os Vaga-lumes. Ele continua dizendo que havia dezenas de pessoas imunes como Ellie e que os Vaga-lumes não conseguiram desenvolver 
                                uma vacina a partir delas, a ponto de terem desistido de procurar a cura. Ellie, triste, descansa enquanto Joel os leva de volta para casa e pede desculpas.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ChapterLists lstFunFacts={chapterFunFacts} />
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['O hospital']}
                                location="Salt Lake City, Utah"
                                date="Primavera de 2033"
                                lstCharacters={['Joel', 'Ellie', 'Marlene']}
                                lstEnemies={['Vaga-lumes']}
                                lstMentions={['Ellie', 'cirurgia', 'cordyceps', 'Vaga-lumes']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={4}
                                qtdPingentes={1}
                                qtdManuais={0}
                                qtdGibis={0}
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

export default Chapter11;