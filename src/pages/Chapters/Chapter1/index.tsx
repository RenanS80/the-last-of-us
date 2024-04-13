import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter1/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter1/image1.jpg';
import WilhelmAudio from '../../../assets/audios/Wilhelm_Scream.mp3';

import './styles.css';
import Pagination from 'components/Pagination';

function Chapter1() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%201/screenshot1_hgpZpXana.png?updatedAt=1709926051963',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%201/screenshot2_5XPgnbfZY.png?updatedAt=1709926071558',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%201/009_iuBKzmyLrL.png?updatedAt=1711287981305',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%201/019_vXnbuMSTz.png?updatedAt=1711287981843',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%201/022_nhWhGZOsg.png?updatedAt=1711287981907',
        }
    ]

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter1">
                <div className="container">
                    <h1>Capítulo 1 - Cidade Natal</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 1 - Cidade Natal" />
                        </div>
                        <p>Cidade Natal é o primeiro capítulo de The Last of Us e contém o prólogo em que o jogador assume o controle de <strong>Sarah</strong> e <strong>Joel</strong>.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Prólogo" />
                            <p>O jogo começa com a apresentação de Joel, um pai solteiro que vive nas proximidades de Austin, Texas, com sua filha Sarah. Ele chega em casa tarde da noite, falando ao 
                                telefone com o irmão Tommy e encontra Sarah dormindo no sofá, que ao acordar, lhe dá um relógio de pulso por seu aniversário, 10 minutos antes da meia-noite. Logo depois, 
                                Joel alega que o relógio está parado e após uma descontraída conversa, Sarah adormece e Joel a leva para a cama. Horas mais tarde, Sarah acorda com um telefonema desesperado 
                                de Tommy, no entanto, a chamada rapidamente sofre alguma interferência. Ela se levanta e vai à procura do pai dentro de casa.
                            </p> <br />
                            <p>Sarah encontra um cartão de aniversário que fez para Joel e que esqueceu de dar a ele. Ao sair do quarto, ela vai ao banheiro e sobre a pia há um artigo de jornal datado de 
                                26 de setembro de 2013 (presumivelmente o dia anterior a esse momento no jogo), referindo-se a uma onda de pessoas infectadas acumulando-se nos hospitais locais. Ao entrar no quarto de Joel 
                                &#8211; localizado no fim do corredor &#8211; um noticiário de TV ao vivo mostra uma repórter falando sobre um tipo de infecção recente, quando de repente uma bomba de gás explode atrás dela, cortando 
                                o sinal da transmissão. Sarah vê a explosão pela janela. Com medo, vai para o andar de baixo da casa e percebe vários carros da polícia indo em direção ao local da explosão.
                            </p> <br />
                            <p>Sarah pega o celular de Joel no balcão e vê que ele tem várias chamadas perdidas e mensagens de texto de Tommy dizendo que está a caminho. Há também um bilhete de Joel na geladeira dizendo que ele 
                                chegará atrasado e para que ela peça comida. Ela caminha em direção a outro cômodo da casa quando de repente Joel entra extremamente perturbado e sujo de sangue, dizendo que algo ruim está acontecendo, 
                                assustando Sarah. Enquanto pega um revólver na gaveta, seu vizinho Jimmy Cooper quebra a porta de vidro e tenta atacá-los. Joel avisa para Jimmy se afastar várias vezes, no entanto, ele não obedece e Joel 
                                é forçado a atirar e matá-lo.
                            </p> <br />
                            <p>Em seguida, Tommy chega de carro do lado de fora da casa, Joel e Sarah entram e eles seguem com intenção de sair da cidade, comentando como as pessoas "perderam a cabeça" por causa de algum tipo de parasita, 
                                e que todo o país parece estar passando pela mesma coisa. Minutos mais tarde, eles seguem para uma rua e um homem sai do carro e começa a reclamar sobre o congestionamento, quando um infectado sai dos arbustos 
                                ao lado da estrada e o ataca. Tommy dá a ré no carro e eles buscam um caminho alternativo desesperadamente. Entretanto, ao desviarem de um trailer atravessado na rua, eles colidem com outro veículo que vinha em 
                                uma rua transversal. Após o acidente, eles rastejam para fora dos destroços, mas veem que Sarah ficou ferida, então Joel é forçado a carregá-la, enquanto Tommy dá cobertura com o revólver de Joel. Eles correm pelas 
                                ruas, em um caos completo e entram em um bar, no qual Tommy permanece para segurar um grupo de infectados e diz que vai encontrá-los na estrada.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="O inesperado acontece" />
                                    <figcaption>O inesperado acontece.</figcaption>
                                </figure>
                            </div>  
                            <p>Joel continua correndo carregando Sarah em direção a um caminho alternativo, quando de repente, um soldado atira e mata o infectado que os perseguem para salvá-los. Logo depois, questiona por que eles estão circulando 
                                no “perímetro externo”. Joel tenta argumentar dizendo que Sarah está com a perna quebrada, mas o soldado recebe ordens via rádio para matar mata-los, provavelmente para evitar que a infecção se espalhe, e apesar do 
                                apelo de Joel, o soldado relutantemente abre fogo contra Joel que salta virando de costas para impedir que Sarah seja atingida. O soldado então caminha até Joel, e quando vai executá-lo, Tommy aparece e atira na cabeça 
                                do militar. Em seguida, Joel e Tommy, percebem que Sarah foi ferida no abdômen. Joel tenta fazer pressão sobre o local do tiro em uma última tentativa de salvar sua filha, mas não funciona, e depois de alguns segundos, 
                                Sarah morre nos braços do pai.
                            </p> <br />
                            <p>Por fim, é exibido o título do jogo, os créditos de abertura e várias notícias sobre a infecção se espalhando pelos Estados Unidos e pelo mundo inteiro. É descrito brevemente como os militares começaram a colocar as pessoas 
                                nas zonas de quarentena sob a lei marcial. Além disso, um grupo de milícias conhecido como Vaga-lumes foi criado para lutar contra eles, com sucesso limitado. O capítulo termina com a líder &#8211; <strong>Marlene</strong> &#8211; 
                                afirmando que todos devem "procurar a luz e acreditar nos Vaga-lumes".
                            </p>   
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ul>
                                <li>Após Tommy matar o soldado, o tambor do revólver parece ser mais longo.</li>
                                <li>Há um PS3 sob a televisão na casa de Joel.</li>
                                <li>Há fotos de família na parede junto à cama de Sarah. Uma delas é a foto de Joel e Sarah, que é destaque em capítulos posteriores.</li>
                                <li>A cena na pintura sobre a cama de Joel será familiar para os jogadores que vão revisitar este capítulo em Novo Jogo+. De fato, muitos artigos e imagens na casa tem dicas de cenas posteriores ou conversas e estão claramente 
                                    presentes para o benefício dos jogadores em sua segunda jogatina.</li>
                                <li>Esta é a única vez no jogo que você pode controlar Sarah.</li>
                                <li>Os carros de polícia que bloqueiam as estradas estão vazios.</li>
                                <li>Duas cópias de "The Turning" podem ser vistas na estante de Sarah. "The Turning" é um jogo de arcade também visto na Cidade do Bill e em Left Behind.</li>
                                <li>Durante a sequência onde o jogador controla Joel, um grito "Wilhelm" (efeito sonoro utilizado repetidamente em produções cinematográficas e televisivas) pode ser ouvido quando um carro em chamas bate em outro, pouco antes 
                                    de Joel e Tommy entrarem no beco.</li>
                            </ul>
                            <audio src={WilhelmAudio} controls></audio>
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Possíveis erros" />
                            <ul>
                                <li>No prólogo, Sarah está usando pijama e com os pés descalços, ela completa o prólogo com os pés descalços. No entanto, apesar do fato de que ela até pisa em vidros quebrados uma vez que você controla Joel, seus pés estão 
                                    completamente limpos e sem cortes.</li>
                                <li>Dependendo de onde Joel está passando, às vezes não é possível para Sarah ver alguém pegando fogo, mas mesmo assim ela diz: "essas pessoas estão pegando fogo".</li>
                                <li>O calendário na cozinha está errado. Ele diz que 1 de setembro de 2013 foi uma segunda-feira, mas foi um domingo.</li>
                            </ul>
                        </div>

                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['Prólogo']}
                                location="Austin, Texas"
                                date="27 de setembro de 2013"
                                lstCharacters={['Joel', 'Sarah', 'Tommy', 'Jimmy Cooper']}
                                lstEnemies={['Corredores']}
                                lstMentions={['Infectados', 'pandemia', 'cordyceps', 'militares']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={0}
                                qtdPingentes={0}
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

export default Chapter1;