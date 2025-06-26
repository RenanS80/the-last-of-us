import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter3/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter3/image1.jpg';
import Image2 from '../../../assets/images/chapters/chapter3/image2.png';
import Image3 from '../../../assets/images/chapters/chapter3/image3.jpg';

import './styles.css';

function Chapter3() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%203/430_xOvnqmrnU.jpg?updatedAt=1712963809302',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%203/065_ExMEUPxAu.png?updatedAt=1712963687572',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%203/088_ORvG7KDqy.png?updatedAt=1712963687905',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%203/471_s2xLIsG4n.jpg?updatedAt=1712963686557',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%203/092_nwecuNUKL.png?updatedAt=1712963687566',
        }
    ];

    const chapterFunFacts = [
        'Este capítulo é marcado pela primeira aparição de um estalador.', 'Ellie encontra a lanterna e a usa durante o resto do jogo;', 
        'No metrô há o primeiro dos 4 cofres secretos espalhados no game. Esses cofres precisam de uma senha que estão em lugares próximos aos respectivos cofres;',
        'É possível desbloquear os cofres sem saber a senha, apenas com o barulho "click" diferenciado quando a senha correta é inserida.'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter3">
                <div className="container">
                    <h1>Capítulo 3 - A Periferia</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 3 - A Periferia" />
                        </div>
                        <p>A Periferia é o terceiro capítulo de The Last of Us e marca o início da jornada de Joel e Ellie pelas ruas de Boston em busca dos Vaga-lumes.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Do lado de fora" />
                            <p>Joel, Tess e Ellie vão para o lado de fora do muro para começar a sua jornada até o Congresso. Os dois debatem sobre, de fato, quem Ellie é. Tess suspeita que ela seja "filha algum figurão importante". Eles continuam 
                                através dos túneis subterrâneos localizados sob edifícios de apartamentos, atingindo uma escada que os leva para o lado de fora. Joel avança primeiro para verificar se está tudo limpo. Eles percebem uma patrulha ao longe, 
                                mas continuam mesmo assim. Ellie comenta brevemente que esta é a sua primeira vez fora da cidade. Os três passam por um caminhão abandonado e são surpreendidos por soldados que estavam no local.
                            </p> <br />
                            <p>Um dos soldados exibe que o seu subordinado examine os três, a fim de buscar vestígios de infecção. Tess tenta suborná-los, mas é ordenada a calar a boca. O soldado examina Tess e Joel - ambos com resultado negativo. Entretanto, na hora de 
                                examinar Ellie, ela o ataca, esfaqueando-o na perna. Ellie parte para cima do soldado, que a joga no chão e quando ele estava se preparando para matá-la, felizmente Joel reage a tempo e luta com o soldado, derrubando-o. 
                                Os dois lutam no chão e simultaneamente Tess atira no outro soldado, distraído com o conflito entre seu parceiro e Joel. Após uma breve luta, Joel consegue pegar a arma do soltado e atira em sua cabeça.
                            </p> <br />
                            <p>À medida que eles recuperam o fôlego, Tess percebe que o scanner do soldado estava apitando. Ao checá-lo, vê que Ellie está infectada. Joel e Tess exigem que Ellie se explique e ela levanta a manga da blusa e mostra a mordida, afirmando
                                foi há três semanas.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="A mordida de Ellie." />
                                    <figcaption>A mordida de Ellie.</figcaption>
                                </figure>
                            </div>  
                            <p>Tess não acredita, alegando que a infecção transforma a vítima em um corredor dentro de dois dias e Joel afirma que Marlene tinha armado para eles. Antes que eles possam resolver isso, mais soldados se aproximam, com isso, os três 
                                fogem rapidamente do local. Eles se esgueiram de vários soldados nas trincheiras, mas encontram outra patrulha. Percebendo que há muitos soldados nas proximidades, escapam do perímetro pelos esgotos, enquanto os soldados 
                                são chamados de volta.
                            </p>  
                        </div>

                        <div>
                            <Subtitle subtitle="Centro da cidade" />
                            <p>Com tempo para pensar, Joel e Tess debatem suas opções. Ellie explica que sua imunidade poderia levar à cura. Joel é contra completar a missão, enquanto Tess parece esperançosa com a cogitação de uma cura. Joel tenta dissuadi-la, lembrando dos 
                                infectados e hostis. Tess entende, mas não está disposta a mudar de ideia e caminham rumo ao Congresso.
                            </p> <br />
                            <p>Eles prosseguem pelo centro de Boston até chegar a um grande abismo, o que os forçam a entrar no edifício Goldstone, parcialmente desmoronado. À medida que passam pelo edifício instável, eles encontram um Estalador morto, preso à porta. 
                                Tess explica o que eles são à Ellie, enquanto Joel retira o infectado para abrir a porta. Pouco tempo depois, ao abrir outra porta, Joel é surpreendido por outro estalador que o ataca e o joga no chão, mas ele é salvo por Tess que atira na cabeça 
                                do infectado.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="A primeira aparição de um estalador" />
                                    <figcaption>A primeira aparição de um estalador.</figcaption>
                                </figure>
                            </div>  
                            <p>Eles encontram uma patrulha de soldados que tinham ido para o edifício, mas foram mortos por Corredores. Eles sobem uma parede, fugindo de estaladores e atirando tijolos ou garrafas para distrair as criaturas. Eles chegam ao outro lado do edifício, 
                                mas têm pelo caminho um grande grupo de corredores, Joel elimina todos eles para que Tess e Ellie possam avançar com segurança. Ao avançar, o trio chega à estação de metrô e encontram membros da milícia Vaga-lume mortos, além de um coquetel molotov 
                                que passará a ser usado por Joel. Em seguida, eles se deparam com uma grande quantidade de infectados, a maioria estaladores e devem passar por eles matando-os ou não para avançar e sair do metrô.
                            </p> <br />
                            <p>Do lado de fora, precisam subir em um caminhão para avançar. Joel encontra um latão de lixo dentro de um estabelecimento destruído, mas primeiro precisa matar os infectados no local, encontrados em estado de inércia. Após matá-los e avançarem por cima 
                                do caminhão, Joel encontra o museu e ao abrir o seu portão de ferro, uma onda de infectados correm pra cima de Joel, que consegue fechar o portão a tempo e se salvar.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="O museu" />
                            <p>Ao entrarem no museu, Tess e Ellie conversam sobre as inúmeras exposições presentes, algumas centenárias e históricas. Eles rastejam através de uma abertura cheia de escombros e Joel precisa abrir caminho, entretanto, a velha estrutura entra em colapso
                            e faz o trio se separar, deixando Joel sozinho em uma área com estaladores. Após eliminar os infectados e avançar para os andares superiors do museu, ele encontra um corredor batendo em uma porta. Após neutralizá-lo, Joel abre a porta e encontra Tess e Ellie em apuros, 
                            com um grande número de infectados as atacando. 
                            </p> <br />
                            <p>Após o confronto, eles sobem para o telhado do museu, a fim de se localizarem melhor e Tess passa a apresentar um comportamento diferente, mais irritadiço, mas passa despercebido por Joel e Ellie. No telhado, elese avistam o 
                                prédio do Congresso a poucos metros e caminham em direção a ele.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="O prédio do congresso" />
                            <p>Joel, Tess e Ellie chegam ao edifício do Congresso, mas encontram membros Vaga-lume mortos no perímetro. Joel e Tess discutem sobre o que fazer a seguir. Tess procura desesperadamente nos cadáveres algum um mapa ou evidências do laboratório onde os Vaga-lumes iam. 
                                Joel argumenta que eles estão levando isso longe demais e que deveriam ir para casa. Tess, no entanto, adota um comportamento agressivo e diz: “Essa é a minha última parada. Nossa sorte iria acabar cedo ou tarde”.
                            </p> <br />
                            <p>Joel continua sem entender e Ellie presume que Tess esteja infectada. Até que o inesperado acontece: ela mostra a Joel uma ferida no pescoço e observa que já está pior do que a ferida de Ellie, mesmo tendo sido mordida há apenas uma hora. Tess pede para que Joel 
                                leve Ellie para Tommy, seu irmão e ex-membro da milícia Vaga-lume, afirmando que ele deve saber a localização do laboratório dos Vaga-lumes. Joel protesta, mas Tess pede a ele para fazer isso por ela, afirmando: "Passamos por coisas suficientes para que sinta que tem uma dívida comigo".
                                Antes de Joel responder, os militares chegam e tentam arrombar a porta do Congresso. Tess se sacrifica para dar Joel e Ellie mais tempo para fugir. Ambos correm para outros andares do local e neutralizam mais militares até conseguirem fugir do prédio.
                            </p> <br />
                            <p>Após a saída, eles são brevemente perseguidos por um veículo militar antes de entrarem na estação de metrô. Lá eles encontram dois militares e precisam atravessar o metrô repleto de seções inundadas antes de saírem de Boston.
                            </p>
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image3} alt="Tess infectada" />
                                    <figcaption>Tess infectada.</figcaption>
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
                                lstSections={['Do lado de fora', 'Centro da cidade', 'O museu', 'O prédio do Congresso']}
                                location="Boston, Massachusetts"
                                date="2033"
                                lstCharacters={['Joel', 'Tess', 'Ellie']}
                                lstEnemies={['Corredores', 'estaladores', 'militares']}
                                lstMentions={['Vaga-lumes', 'militares', 'Boston', 'infectados', 'Congresso', 'cura']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={9}
                                qtdPingentes={4}
                                qtdManuais={0}
                                qtdGibis={0}
                                qtdDialogos={4}
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

export default Chapter3;