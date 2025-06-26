import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter5/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter5/image1.png';
import Image2 from '../../../assets/images/chapters/chapter5/image2.png';
import Image3 from '../../../assets/images/chapters/chapter5/image3.png';

import './styles.css';

function Chapter5() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%205/01_cGofDKksz.jfif?updatedAt=1749147908375',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%205/02_NwlpMgtq_.png?updatedAt=1749147917980',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%205/03_A0BDFXH31.jpg?updatedAt=1749147908672',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%205/04_vyrQ3IkxE.png?updatedAt=1749147913902',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%205/05_baepl9hLZ.png?updatedAt=1749147918856',
        }
    ];

    const chapterFunFacts = [
        `No início do capítulo há uma cutscene no carro, na qual Ellie mostra algumas coisas que roubou da casa de Bill, como um cassete com a música "I'll Never Get Out of This World Alive" de Hank Williams;`,
        'Após o acidente com a caminhonete de Joel, ele é atacado por um caçador e é forçado contra um pedaço de vidro na janela. Essa cena é semelhante à morte de Dayna Jurgens na minissérie norte-americana The Stand de 1994;',
        'Quando Joel entra em um dos quartos do hotel, há um jornal no chão com o seguinte título: "Uncharted 13: Um filme exuberante - Justin Bieber como Drake". Uma referência ao Uncharted, outro título de sucesso da Naughty Dog;',
        'No apartamento onde Joel conhece Sam e Henry, há um boneco do Nathan Drake, protagonista da série Uncharted, sobre a cama no quarto de criança. Há também um boneco do Jak e Daxter na sala, outro jogo da desenvolvedora;',
        'Ao entrar na loja de brinquedos pouco depois de conhecer Henry e Sam há um tabuleiro do game Uncharted sobre uma prateleira.  Há também um tabuleiro do game Jax e Daxter ao lado;',
        'Ellie é vista observando o robô que Sam deixou na loja de brinquedos, mas só vai levá-lo quando Joel não estiver olhando. Se Joel ficar de costas para Ellie e se virar rapidamente, poderá vê-la pegando o brinquedo;',
        'Depois da luta no Distrito Financeiro, onde Joel elimina dois caçadores, as mesas de escritório têm placas de identificação legíveis. Vários são da equipe de design ambiental do jogo;',
        'Após sair do hotel, Joel dá a Ellie um rifle para matar os caçadores. Nessa parte é possível matar todos furtivamente e Ellie não matar nenhum deles, mas a cutscene, continuará a mesma;',
        'A seção "Lobby do Hotel” foi apresentada ao público na E3 de 2012, um ano antes do lançamento de The Last of Us para PS3;',
        'Durante a seção “Distrito Financeiro”, Joel confia em Ellie para usar uma arma pela primeira vez.'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter5">
                <div className="container">
                    <h1>Capítulo 5 - Pittsburgh</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 5 - Pittsburgh" />
                        </div>
                        <p>Pittsburgh é o quinto capítulo de The Last of Us e é marcado pela introdução de dois novos personagens: Henry e seu irmão mais novo, Sam.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Um novo caminho" />
                            <p>Durante a condução até Tommy, Ellie desabafa com Joel sobre uma história em quadrinhos chamada Savage Starlight. Segundo Ellie, embora seja uma boa leitura, a edição termina com um &#8220;continua..&#8221; deixando um suspense no ar, que a 
                                desagrada. Joel pergunta onde ela conseguiu o gibi e Ellie diz que roubou das coisas do Bill. Em seguida, ele pergunta o que mais Ellie roubou e ela lhe dá uma fita cassete para ouvir no rádio da caminhonete. Ela ainda revela que roubou uma revista 
                                com &#34;algumas fotos interessantes&#34;. Joel percebe que é uma revista gay para maiores de idade e diz que ela não deve ver. Ellie então a descarta e brinca com Joel, perguntando &#8220;Por que as páginas grudam?&#8221;. 
                            </p> <br />
                            <p>A dupla segue seu caminho para Pittsburgh, mas a estrada principal para a ponte Fort Duquesne está bloqueada por entulhos e carros abandonados. Joel decide ir pela cidade em vez de voltar. Ao dirigir pela cidade, eles avistam um homem, supostamente 
                                ferido e pedindo ajuda. Ellie quer parar e ajudar, mas Joel percebe que é uma emboscada e acelera em direção ao impostor, oo perceber que seria atropelado, ele puxa uma arma da cintura e atira na caminhonete. Na medida em que mais homens saem 
                                de um esconderijo. Um deles arremessa um tijolo, danificando o para-brisa. Outros caçadores surgem com um ônibus, que colide com o veículo de Joel e Ellie, levando-os a bater em uma loja de quinquilharias, onde são forçados a confrontá-los. 
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Joel lutando com um caçador." />
                                    <figcaption>Joel lutando com um caçador.</figcaption>
                                </figure>
                            </div>  
                            <p>Depois de eliminar o grupo, a dupla abre caminho para um ponto de controle militar abandonado. Ao longo do caminho, descobrem que os militares haviam sido eliminados pelos cidadãos que agora se tornaram os caçadores. No ponto de verificação, 
                                se depararam com grande grupo de caçadores em uma livraria próxima. A dupla precisa passar por todos &#40;eliminando-os ou não&#41; para avançar.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Lobby do hotel" />
                            <p>Ao passar pelos caçadores, eles vão em direção à ponte que dá acesso ao outro lado da cidade, mas primeiro precisam passar pelo Hotel Grand, repleto de caçadores por todos os andares. Ao eliminá-los, Joel encontra uma saída através de um poço 
                                do elevador. Embora seja arriscado, é a única saída do hotel e a dupla é separada pela primeira vez: enquanto Joel dá impulso para Ellie subir, o elevador despenca e o leva junto para uma espécie de porão - um lugar escuro e repleto de 
                                corredores, estaladores e um baiacu.
                            </p> <br />
                            <p>Ellie hesita em pular para ajudá-lo, mas ele ordena que ela fique onde está, para sua segurança. Minutos mais tarde, Joel encontra uma maneira de sair do local, mas precisa do cartão de acesso, deixado em uma sala por um dos funcionários do hotel, 
                                provavelmente morto. Ao ligar o gerador para ativar a energia e a porta de saída, uma série de infectados são atraídos pelo barulho e Joel precisa correr rumo à porta para desbloqueá-la e sair com segurança. 
                            </p> <br />
                            <p>Depois de escapar, ele tenta encontrar Ellie, mas encontra um pequeno grupo de caçadores. Após eliminá-los, ele sobe em uma escada para chegar ao andar de cima, mas um caçador o derruba, fazendo Joel cair em uma poça de água. Ele luta com o 
                                caçador que quase o afoga, mas Ellie entra em cena no último instante e atira no inimigo, salvando a vida de Joel. No entanto, ele não mostra gratidão e a repreende por não ficar onde ele mandou, antes de se separarem. Eles passam por uma 
                                série de áreas dentro do hotel e chegam ao salão de jantar. Joel pede ajuda a Ellie para empurrar um piano e chegar ao andar de cima. Posteriormente, eles acham uma saída do hotel e vão para o distrito financeiro. 
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Distrito financeiro" />
                            <p>Ao saírem do hotel, Joel encontra um homem morto com um rifle na mão em um posto de observação e logo à frente, mais um grupo de caçadores. Ele ensina Ellie a manusear o rifle para cobri-lo, repetindo a frase que Tess disse à ele 
                                &#8220;Faça os tiros valerem a pena&#8221;. Joel encara os inimigos, mas agora com o apoio de Ellie. Após neutralizar todos os caçadores, Joel sutilmente agradece a Ellie pelo apoio, reconciliando seu relacionamento. Em seguida, 
                                dá a Ellie uma pistola 9mm, insistindo que seu uso é somente para emergência.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Joel ensinando Ellie a manusear o rifle." />
                                    <figcaption>Joel ensinando Ellie a manusear o rifle.</figcaption>
                                </figure>
                            </div>  
                            <p>Eles fazem seu caminho rumo à ponte, mas encontram um veículo militar &#40;Humvee&#41; patrulhando a área e os detecta, a dupla é perseguida pelo veículo e por mais caçadores e são obrigados e fugirem por um edifícil próximo, despistando os inimigos.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Fuga da cidade" />
                            <p>Ao entrar pela janela de um dos apartamentos, Joel é surpreendido por um homem. Ellie tenta ajudar com uma faca, mas impedida é pelo suposto caçador. Joel consegue se desvencilhar e derruba-o no chão, dando socos. Ellie grita para Joel parar, 
                                enquanto vê um menino apontando uma arma para ele. O homem, no entanto, diz ao menino que está tudo bem, afirmando que Joel e Ellie não são caçadores. Em seguida eles próprios se apresentam como Henry e Sam, dois irmãos sobreviventes de um 
                                grupo que foi ao distrito em busca de suprimentos. Os quatro decidem se unir para escapar da cidade.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image3} alt="Sam e Henry." />
                                    <figcaption>Sam e Henry.</figcaption>
                                </figure>
                            </div>  
                            <p>Em seguida, vão rumo ao esconderijo que os irmãos tinham. Pelo caminho, passam por uma loja de brinquedos e Sam pega um robô para guardar na mochila, mas é repreendido por Henry, afirmando que eles devem levar apenas o necessário, 
                                obrigando seu irmão a deixar o brinquedo na loja. Do lado de fora, encontram mais caçadores e após eliminá-los, chegam rapidamente ao destino: um escritório com vista para o posto de guarda dos caçadores, bem próximo à ponte. Ao descobrir que 
                                Joel e Ellie estão procurando os Vaga-lumes, Henry diz a Joel que o seu grupo de sobreviventes tinha planejado encontrá-los em uma estação de rádio militar abandonada, nos arredores de Pittsburgh na noite seguinte e explica que o posto de 
                                guarda para a ponte é protegido por muitos caçadores e decidem descansar para escapar à noite. 
                            </p> <br />
                            <p>Mais tarde, os quatro fazem o seu caminho em direção ao posto de guarda. Depois de furtivamente eliminarem dois caçadores, Joel e Henry se esgueiram em direção ao portão, evitando o holofote dos caçadores que o usam para iluminar e matar 
                                estaladores que surgem no final da rua. Após matar os caçadores, o quarteto precisa abrir o portão da guarda que dá acesso à ponte, mas durante a ação o Humvee dos caçadores entra em cena, mas por sorte eles conseguem fechar o portão rapidamente.
                            </p> <br />
                            <p>Com o portão bloqueado, eles conseguem um pouco de tempo para fugir, mas dão de cara com um caçador que surge em cima de um caminhão. Após matá-lo, precisam subir rapidamente através de uma escada localizada na lateral do veículo. Henry e Sam 
                                sobem primeiro e em seguida Ellie, mas a escada quebra, o que dificulta a subida de Joel. Quando o Humvee está prestes a arrombar o portão, Henry abandona Joel por medo e foge, seguido relutantemente por Sam. 
                                Ellie decide descer do caminhão para ajudar Joel, a dupla consegue fugir a tempo para um bar, antes que o Humvee atire neles. 
                            </p> <br />
                            <p>Ao entrarem, encontram mais caçadores, que são eliminados. Após saírem do bar, o Humvee aparece novamente, forçando a fuga dos dois para a ponte. À medida que chegam desesperadamente na ponte, percebem que uma parte está bloqueada por escombros e veículos, além de uma parte desmoronada, impedindo que eles 
                                prossigam. Sem saber o que fazer e com o veículo militar se aproximando, Ellie salta corajosamente da ponte para o Rio Allegheny, forçando Joel a segui-la. Joel alcança Ellie antes de se afogar, mas a corrente os arrasta e Joel bate a cabeça 
                                em uma rocha e desmaia.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ChapterLists lstFunFacts={chapterFunFacts} />
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['Um novo caminho', 'Lobby do hotel', 'Distrito financeiro', 'Fuga da cidade']}
                                location="Pittsburgh, Pennsylvania"
                                date="2033"
                                lstCharacters={['Joel', 'Ellie', 'Henry', 'Sam']}
                                lstEnemies={['Caçadores']}
                                lstMentions={['Pittsburgh', 'ponte', 'caçadores', 'torre de rádio', 'esconderijo']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={17}
                                qtdPingentes={3}
                                qtdManuais={4}
                                qtdGibis={4}
                                qtdDialogos={10}
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

export default Chapter5;