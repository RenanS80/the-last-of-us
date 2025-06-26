import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import Intro from '../../../assets/images/chapters/chapter8/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter8/image1.jpg';
import Image2 from '../../../assets/images/chapters/chapter8/image2.png';

import './styles.css';

function Chapter8() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%208/01_091mp9C00.jpg?updatedAt=1750961818031',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%208/02_h0m755MxS.png?updatedAt=1750961826842',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%208/03_SrclB-JEn.png?updatedAt=1750961824478',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%208/04_9mnT-f7cjM.png?updatedAt=1750961822517',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%208/05_DsiUuIcJp.jpg?updatedAt=1750961817077',
        }
    ];

    const chapterFunFacts = [
        'The Last of Us: Left Behind explora as consequências deste capítulo. Especificamente, revela que Joel e Ellie fugiram para a vizinha Colorado Mountain Plaza, ao serem perseguidos por um grupo dissidente de canibais;',
        'Um dos recortes de jornal dentro do prédio de ciências, na sala à esquerda da entrada, é da edição de 9 de agosto de 2011 do jornal The Times sobre os distúrbios de Londres. Além disso, um dos recortes de jornal dentro dos dormitórios traz um artigo escrito por Lev Benioff, uma homenagem ao protagonista do romance "Cidade de Ladrões" de David Benioff, que foi uma das inspirações de The Last of Us;',
        'Nas áreas em que há infectados na universidade há dois Playstation 3 pelo cenário;',
        'A Universidade do Leste do Colorado não é uma universidade real, mas sua modelagem foi baseada na Colorado State University em Fort Collins;',
        'No jogo Firewatch (2016), um suéter pode ser encontrado em um dos muitos esconderijos acessíveis ao longo do jogo, localizado perto do Lago Jonesy. Este suéter está com a estampa da Universidade do Leste do Colorado, uma referência direta a The Last of Us.'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter8">
                <div className="container">
                    <h1>Capítulo 8 - A Universidade</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 8 - A Universidade" />
                        </div>
                        <p>A Universidade é o oitavo capítulo de The Last of Us e Joel e Ellie vão atrás dos Vaga-lumes na Universidade do Leste do Colorado.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Vamos carneiros selvagens" />
                            <p>Joel e Ellie vão ao campus da Universidade do Leste do Colorado à procura do prédio de ciências, que, segundo Tommy parece um espelho gigante. Enquanto eles exploram o campus, Joel compartilha um pouco sobre seu passado, 
                                contando a Ellie sobre o seu sonho de infância, no qual queria ser cantor e também que nunca frequentou uma faculdade porque havia se tornado pai muito cedo. 
                            </p> <br />
                            <p>Em certo ponto, eles se deparam com um portão e precisam destrancá-lo para seguirem o percurso, entretanto, o local está cheio de infectados. Joel precisa descer do cavalo e eliminá-los. Após se reunir novamente com Ellie, 
                                eles começam a perceber o quão estranho é o lugar completamente deserto e que eles já deveriam ter encontrado alguém. 
                            </p> <br />
                            <p>Após avançarem um pouco, Joel encontra o prédio de ciências, mas seu portão está trancado. Para conseguir entrar, ele empurra um latão de lixo com rodinhas em direção ao portão para abri-lo.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Prédio de ciências" />
                            <p>Após entrarem e explorarem as dependências do prédio de ciências, eles percebem que os Vaga-lumes partiram às pressas, por razões desconhecidas. Joel encontra um gravador perto do cadáver de um cientista Vaga-lume e descobre que eles 
                                estavam usando macacos como cobaias, tentando estudar os efeitos causados pelo Cordyceps, em busca de uma cura. O cientista, que havia sido instruído a matar as cobaias infectadas, achava que elas mereciam ser libertadas para viver
                                na natureza. Ao tentar libertá-las de suas gaiolas, ele é mordido por um dos macados, infectando-o.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Joel encontra o cadáver de um Vaga-lume" />
                                    <figcaption>Joel encontra o cadáver de um Vaga-lume.</figcaption>
                                </figure>
                            </div> 
                            <p>Ouvindo a gravação do cientista, eles descobrem que os Vaga-lumes foram para Salt Lake City, para continuarem suas pesquisas. Logo em seguida, um grupo de saqueadores entra no predio de ciências e atiram contra a dupla. Joel e Ellie 
                                atravessam o prédio, matando seus agressores no caminho. Ao chegarem à área externa no 3º andar do prédio, Joel tenta abrir uma porta, mas é pego de surpresa por um deles. Eles lutam brevemente sobre o frágil corrimão da área externa
                                e ambos caem da sacada. O saqueador morre com o impacto e Joel tem a barriga atravessada por um vergalhão que estava no chão. Ellie desce desesperada para o ajudar a se levantar e o guia em direção à saída.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Ellie descendo para ajudar Joel" />
                                    <figcaption>Ellie descendo para ajudar Joel.</figcaption>
                                </figure>
                            </div> 
                            <p>Ellie é forçada a proteger Joel, pois ele está gravemente ferido. Ao tentarem sair do prédio, mais saqueadores aparecem e Ellie lida com eles e conseguem fugir da universidade à cavalo. Após se distanciarem o suficiente para Ellie 
                                presumir que estão seguros, Joel desaba e cai do cavalo, desmaiando. Ellie tenta acordá-lo, chamando seu nome e perguntando desesperada o que ela deve fazer.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ChapterLists lstFunFacts={chapterFunFacts} />
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['Vamos carneiros selvagens', 'Prédio de ciências']}
                                location="Boulder, Colorado"
                                date="Outono de 2033"
                                lstCharacters={['Joel', 'Ellie']}
                                lstEnemies={['Infectados', 'Saqueadores']}
                                lstMentions={['Vaga-lumes', 'universidade', 'Salt Lake City', 'macacos', 'prédio de ciências']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={9}
                                qtdPingentes={5}
                                qtdManuais={2}
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

export default Chapter8;