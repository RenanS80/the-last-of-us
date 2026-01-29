import Header from 'components/Header';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter9/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter9/image1.png';
import Image2 from '../../../assets/images/chapters/chapter9/image2.png';

import './styles.css';

function Chapter9() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%209/01_f3pZ6mj0y.png?updatedAt=1753483273991',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%209/02_8erCKbirU.jpg?updatedAt=1753483266406',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%209/03_kV2DTcrC4.png?updatedAt=1753483273533',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%209/04_OnUfCqAhf.png?updatedAt=1753483273953',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%209/05_L4ED8KLqL.png?updatedAt=1753483274026',
        }
    ];

    const chapterFunFacts = [
        'Ao escapar de David, o jogador poderá entrar em uma loja. Em uma das prateleiras, é possível encontrar um PlayStation 3 e dois controles DualShock;',
        'Este é o único capítulo de The Last of Us em que há uma batalha contra um chefe não infectado, quando Ellie luta contra David;',
        'Na casa em que Ellie está cuidando dos ferimentos de Joel, há um aparelho de som idêntico ao que pode ser visto no quarto de Sarah, logo no começo do jogo;',
        'Quando David pede ajuda para mover o armário, o jogador pode optar por não ajudar. David o moverá sozinho, embora mais lentamente. Além disso, quick time event em que o estalador ataca Ellie não ocorrerá.'
    ];

    return (
        <>
            <Header />

            <section className="individual-chapter__hero chapter9">
                <div className="container">
                    <h1>Capítulo 9 - Resort à Beira do Lago</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 9 - Resort à Beira do Lago" />
                        </div>
                        <p>Resort à Beira do Lago é o nono capítulo de The Last of Us e marca a primeira vez que o jogador assume o controle de Ellie.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="A Caçada" />
                            <p>É inverno e Ellie mata um coelho com uma flecha. Ela então avista um veado e o persegue, acertando-o com o arco algumas vezes antes de finalmente rastreá-lo pelo caminho de sangue deixado pelo animal. Ela o encontra perto 
                                de um celeiro, nos arredores de uma mina de carvão abandonada. Logo ao chegar, dois estranhos aparecem e se apresentam como David e James, dois sobreviventes de um grande grupo com mulheres e crianças, todos com fome. Eles 
                                tentam negociar com Ellie pela carne do veado, e ela desconfiada, mas sem opções para salvar Joel, diz que, se eles tiverem remédios, podem ficar com o animal inteiro. 
                            </p> <br />
                            <p>David pede que ela os acompanhe, mas ela se recusa. David então manda James buscar dois frascos de penicilina e uma seringa, enquanto Ellie o mantém sob a mira de uma arma. David e Ellie se abrigam em um armazém para evitar o frio. 
                                Logo após entrarem, um grande número de infectados os cercam e tentam invadir o local. Eles mantêm a posição por um tempo, mas são forçados a fugir. Nas regiões internas do armazém, encontram mais infectados e após eliminá-los, Ellie 
                                se senta com David enquanto ele conta como &#8220;tudo acontece por um motivo&#8221;, quando um grupo de seus homens foi morto algumas semanas atrás por &#8220;um homem louco que estava acompanhado de uma garotinha&#8221;, apontando para Ellie.
                                Alarmada, ela se levanta e aponta o rifle para ele quando James chega. David ordena que ele se afaste e que ele dê o remédio à Ellie, que foge de volta para uma casa abandonada, onde Joel está ferido e febril.
                                ao lado dele.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Ellie e David conversando" />
                                    <figcaption>Ellie e David conversando.</figcaption>
                                </figure>
                            </div> 
                            <p>Ao chegar na casa, ela aplica a penicilina em Joel e se deita ao lado dele. Na manhã seguinte, Ellie acorda ouvindo o grupo de David lá fora. Ela monta em Callus e sai cavalgando para chamar a atenção deles, afastando-os de Joel, mas eles matam o 
                                cavalo, forçando-a a se esconder em um resort abandonado. Para escapar, ela se dirige a uma pousada e, enquanto tenta sair, David aparece e a estrangula até que ela desmaie. 
                            </p> <br />
                            <p>Joel acorda e, ao sair para procurá-la, um grupo de bandidos restantes começa a atirar nele. Ele lida com os inimigos e consegue capturar dois. Em seguida, começa a torturá-los para descobrir o paradeiro de Ellie e, quando um deles cede, Joel o mata.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Resort com cabanas" />
                            <p>O jogador assume o controle novamente de Ellie, que acorda presa em uma gaiola. Ela vê James decepar os membros de um cadáver para seu grupo comer. David entra e diz que não quer matá-la - quer que ela se junte a eles. Agora percebendo 
                                suas verdadeiras intenções, ela se recusa a cooperar, quebrando o dedo de David para tentar pegar suas chaves. Mais tarde, David e James agarram Ellie e a colocam sobre uma mesa para matá-la e servir de comida aos demais do grupo. 
                                Em um ato de desespero, Ellie grita que está infectada e pede para que levantem a sua manga da blusa para verem a marca de mordida. Aproveitando a distração deles, ela pega o facão de David, mata James e corre para fora do local, em meio a uma 
                                tempestade de neve.
                            </p> <br />
                            <p>Armada apenas com seu canivete, passa por diversos canibais até que chega a um restaurante abandonado, mas quando tenta sair pela porta principal, David aparece novamente e prende ela dentro do restaurante com ele, afirmando que somente ele 
                                possui as chaves. Para tentar escapar de David, Ellie queima um pedaço de madeira e tenta acertá-lo, mas erra e acerta a cortina do restaurante, que começa a pegar fogo. Agora ela precisa se esgueirar e pegar David de surpresa. 
                            </p> <br />
                            <p>Depois de esfaqueá-lo várias vezes, ele entra em pânico e a agarra pelos cabelos, jogando-a no chão. Ambos caem inconscientes, Ellie acorda primeiro e rasteja para pegar o facão de David. Quando ela se aproxima, ele corre para chutá-la, 
                                provocando-a que ela deveria desistir. Quando ela luta para se mover, ele a atinge novamente, prendendo-a e quase a estrangulando. Ela cegamente agarra o cabo do facão e corta o braço de David. Pego inesperadamente, ele grita e rola para longe dela. 
                                Ela repetidamente corta seu rosto com raiva, até que Joel chega e a puxa para longe. Segurando Ellie chorando em seus braços, Joel a consola e a leva embora.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Joel amparando Ellie" />
                                    <figcaption>Joel amparando Ellie.</figcaption>
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
                                lstSections={['A Caçada', 'Resort com cabanas']}
                                location="Silver Lake, Colorado"
                                date="Inverno de 2033"
                                lstCharacters={['Joel', 'Ellie', 'David', 'James']}
                                lstEnemies={['Canibais', 'Infectados']}
                                lstMentions={['Inverno', 'infecção', 'veado', 'cabana']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={12}
                                qtdPingentes={2}
                                qtdManuais={2}
                                qtdGibis={1}
                                qtdDialogos={1}
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

export default Chapter9;