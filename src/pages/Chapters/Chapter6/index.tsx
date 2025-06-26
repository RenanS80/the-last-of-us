import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter6/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter6/image1.png';
import Image2 from '../../../assets/images/chapters/chapter6/image2.png';

import './styles.css';

function Chapter6() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%206/01_bwIdV4XM4.png?updatedAt=1749158846207',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%206/02_ppUVKZ86A5.jpg?updatedAt=1749158840999',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%206/03_qbj3--yUV.png?updatedAt=1749158848538',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%206/04_sS4ct21Br.jpg?updatedAt=1749158841302',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%206/05_-4eblhv1X.png?updatedAt=1749158845315',
        }
    ];

    const chapterFunFacts = [
        'O personagem Ish presente nos bilhetes do esgoto pode ter sido inspirado no protagonista Isherwood Williams do romance Earth Abides, que também ensinava sobrevivência aos jovens de sua comunidade;',
        'Em um dos cômodos do esgoto, Ellie e Sam encontrarão um conjunto de traves de futebol em ruínas. Se Joel esperar, Ellie chutará a bola para Sam, que a defende. Henry intervirá, pedindo silêncio, e Sam chutará a bola para longe;',
        'Após saírem do esgoto, Joel pode entrar na casa de Kyle (a primeira casa acessível) e há uma foto de uma mulher segurando um cachorro em uma das prateleiras na parede. A mesma foto pode ser vista nos capítulos "A Represa do Tommy" e "A Universidade";',
        'É impossível matar os corredores antes de atacarem Henry e Sam após saírem da casa colidida pelo veículo militar;',
        'Se Joel ficar por um tempo em uma casa específica do subúrbio (a que tem um sótão), Ellie e Sam começarão um jogo de dardos, no qual Joel poderá participar. Curiosamente, Sam e Ellie são melhores que Joel, que erra o alvo, acertando o dardo na parede, enquanto Ellie e Sam acertam o alvo duas vezes;',
        'Se o jogador olhar ao redor das casas nos subúrbios, ele poderá ver a mesma pintura de uma mulher de vestido com os braços no ar em várias casas.'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter6">
                <div className="container">
                    <h1>Capítulo 6 - O Subúrbio</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 6 - O Subúrbio" />
                        </div>
                        <p>O Subúrbio é o sexto capítulo de The Last of Us e continua a jornada de Joel e Ellie com os irmãos Henry e Sam.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Esgotos" />
                            <p>Joel acorda na margem do praia e encontra Ellie, junto com Henry e Sam. Henry fica feliz que Joel esteja bem, mas Joel fica furioso porque foi abandonado para morrer na cidade e derruba Henry no chão, apontando uma arma.
                                Henry consegue acalmar a situação, dizendo que, se os papéis fossem invertidos, Joel faria o mesmo e que ele os salvou do afogamento. Joel concorda lentamente e os quatro seguem seu caminho. Ao longo da praia, eles encontram 
                                um barco em ruínas e desgastado pelo tempo, bem como um bilhete de Ish, um dos sobreviventes do surto. 
                            </p> <br />
                            <p>Os quatro encontram um grande cano, coberto por uma grade que dá entrada ao esgoto. Henry garante ao grupo que é possível chegar à torre de rádio passando pelos esgotos. Ao avançar pelo subterrâneo, eles chegam a uma sala cheia de água, 
                                Sam exclama que não sabe nadar. Ellie aponta para o gerador do outro lado da sala, enquanto Henry nota uma plataforma antiga em um trilho motorizado. Após um desvio momentâneo para abrir o portão e guiar Ellie até o gerador usando uma 
                                tábua, Henry, Sam e Joel são então levados para o outro lado.
                            </p> <br />
                            <p>Seguindo pelo corredor, eles chegam a um conjunto de portas duplas pintadas como um castelo, de uma forma muito brilhante e alegre. Ao abri-las, Joel aciona uma armadilha sonora, que, segundo Henry, é um tipo de alarme. O esgoto parece ter 
                                servido de abrigo para outros sobreviventes tempos atrás assentamento &#40;é possível encontrar diversos bilhetes deixados por um homem chamado Ish ao longo do esgoto&#41;. Como um alívio momentâneo, Ellie e Sam brincam com uma bola de futebol 
                                descartada, mas Henry gentilmente avisa Sam para falarem baixo.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Sala nos esgotos" />
                                    <figcaption>Sala nos esgotos.</figcaption>
                                </figure>
                            </div>  
                            <p>
                                Logo em seguida, o grupo ouve uma horda de infectados vindo em sua direção; eles rapidamente os despacham. Joel observa que, como um estaçadpr fazia parte da horda, os infectados estavam nos esgotos há algum tempo. 
                                Além disso, em uma das muitas salas, há três esqueletos de crianças cobertos por uma lona, ao lado das palavras &#8220;eles não sofreram&#8221;, rabiscadas no chão. Próximo deles há um bilhete que revela que um dos Kyle, um dos cuidadores 
                                adultos matou as crianças porque eles foram encurralados por infectados que tentavam entrar na sala e para evitar a possibilidade serem infectados, Kyle optou pelo caminho mais &#8220;fácil&#8221;. 
                            </p> <br />
                            <p>
                                Continuando, eles descem um lance de escadas que leva a um espaço aberto com uma porta de arame fechada. Joel tenta abri-la, mas, sem perceber, aciona uma portão de segurança que se fecha com força, dividindo o grupo: Ellie fica com Henry do 
                                lado de fora do portão; Sam e Joel ficam do lado de dentro. Eles conversam brevemente até que vários infectados são atraídos pelo brusco barulho do portão, forçando Henry e Ellie a fugirem. O local onde Joel e Sam ficaram presos está repleto 
                                de espreitadores e estaladores. Após eliminá-los, é possível perceber que o local poderia ter sido a principal área do esconderijo dos sobreviventes no esgoto, com vários colchões, armários, utensílios de cozinha e de banheiro. 
                                Ao passarem por este local, encontram Henry e Ellie em apuros e o quarteto se junta novamente.
                            </p> <br />
                            <p>
                                Durante a fuga, eles entram em uma sala que está com a porta bloqueada, mas com uma pequena passagem sobre ela que dá para o lado de fora dos esgotos. Henry levanta Sam e Ellie para que eles possam liberar a porta. Enquanto isso, 
                                Joel e Henry lutam contra os infectados. Após conseguirem abrir a porta, Henry e Joel conseguem escapar e o quarteto se vê fora dos esgotos.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Subúrbios" />
                            <p>Após saírem dos esgotos, chegam a um bairro suburbano com casas vazias que podem ser exploradas. Após descerem em um barranco, são emboscados por um sniper que, refugiando-se em uma casa no final da rua, atira no grupo. Joel prontamente se 
                                separa do grupo para contornar a rua e entrar pela parte de trás da casa, para surpreender o atirador. Outros caçadores aparecem e Joel os elimina. Ao chegar no terceiro andar da casa, o atirador se esconde e surpreende Joel ao saltar 
                                sobre ele com uma faca - eles se envolvem brevemente em uma luta e Joel esfaqueia ele.
                            </p> <br />
                            <p>Mais caçadores surgem no início da rua e atiram no trio. Após Joel eliminar todos eles, o veículo militar Humvee de Pittsburgh aparece, avançando pela rua em direção a Henry, Ellie e Sam. Os tiros de Joel são ineficazes, até que um caçador 
                                aparece abre a escotilha e joga um coquetel molotov em Henry e nas crianças. Depois que Joel atira nele, o caçador deixa cair o molotov, que incendeia o interior do Humvee. O veículo perde o controle e bate em uma casa próxima.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Veículo militar" />
                                    <figcaption>Veículo militar.</figcaption>
                                </figure>
                            </div> 
                            <p>O grupo, aparentemente seguro e controlado, é pego de surpresa quando alguns infectados, atraídos pelos sons da briga recente saem da casa em que o veículo colidiu, os atacam e conseguem derrubar Sam e Henry no chão. Com a ajuda de Joel, 
                                eles conseguem matá-los antes que causem algum dano grave. Logo, uma horda de infectados surge e avança em direção a eles, levando Joel e os outros a escaparem por uma brecha na cerca de madeira atrás da casa, e eles escapam do Subúrbio.
                            </p> <br />
                            <p>Eles finalmente chegam à torre de rádio e passam a noite. Henry e Joel contam histórias do passado enquanto Ellie e Sam conversam sobre seus medos no cômodo ao lado. Ellie admite que tem medo de ficar sozinha, e Sam tem medo de ser infectado. 
                                Antes de dar boa noite, Ellie se lembra de dar a ele o robô de brinquedo com o qual ele estava brincando em Pittsburgh. Sam, frustrado, joga o brinquedo no chão e levanta a calça, revelando uma mordida na perna.
                            </p> <br />
                            <p>Na manhã seguinte, Ellie acorda com Henry preparando o café da manhã. Ela pergunta onde está Sam, e Henry responde que o deixou dormir até mais tarde. Henry sugere que ela vá acordá-lo, e ela concorda prontamente. No entanto, momentos depois 
                                de entrar no quarto, é atacada por Sam, que se transformou durante a noite. Em pânico, Joel procura sua arma na bolsa, mas Henry atira em seu próprio irmão para salvar Ellie. Atormentado com suas ações, Henry culpa Joel e a si mesmo pelo que 
                                aconteceu com Sam e comete suicídio, atirando na própria cabeça.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ChapterLists lstFunFacts={chapterFunFacts} />
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['Esgotos', 'Subúrbios']}
                                location="Pittsburgh, Pennsylvania"
                                date="2033"
                                lstCharacters={['Joel', 'Ellie', 'Henry', 'Sam']}
                                lstEnemies={['Caçadores', 'corredores', 'estaladores']}
                                lstMentions={['Ish', 'Kyle', 'vaga-lumes', 'torre de rádio', 'infectados', 'esconderijo']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={10}
                                qtdPingentes={4}
                                qtdManuais={2}
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

export default Chapter6;