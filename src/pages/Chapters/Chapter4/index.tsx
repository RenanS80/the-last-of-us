import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterLists from 'components/ChapterLists';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Footer from 'components/Footer';
import Pagination from 'components/Pagination';

import Intro from '../../../assets/images/chapters/chapter4/intro.jpg';
import Image1 from '../../../assets/images/chapters/chapter4/image1.jpg';
import Image2 from '../../../assets/images/chapters/chapter4/image2.jpg';
import Image3 from '../../../assets/images/chapters/chapter4/image3.jpg';

import './styles.css';

function Chapter4() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%204/495_df7CMZRYv.jpg?updatedAt=1713036259440',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%204/502_dAB2AkM2W.jpg?updatedAt=1713036587830',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%204/524_8Amm7VsMf.jpg?updatedAt=1713036587677',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%204/542_VEL8sLY0B.jpg?updatedAt=1713036588052',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%204/553_t443ABuPhB.jpg?updatedAt=1713036587925',
        }
    ];

    const chapterFunFacts = [
        'O capítulo é marcado pela primeira vez que Ellie vai a um bosque.', 'Em um dos estabelecimentos da cidade do Bill há um fliperama da Angel Knives, "jogado" por Ellie na DLC Left Behind com sua amiga Riley.',
        'Esta é a primeira vez que Joel enfrenta um baiacu.', 'Este capítulo é marcado pela primeira caixa de ferramentas, encontrada no segundo esconderijo de Bill e é usada para desbloquear as qualidades das armas.',
        'O momento em que Joel fica pendurado de cabeça para baixo preso acidentalmente a uma armadilha de Bill, é uma provável referência ao filme "Eu Sou a Lenda" de 2007. Onde o personagem principal Robert Neville (interpretado por Will Smith) passa pela mesma situação e quase é morto por um grupo de Darkseekers.',
        'Não há inimigos humanos nesse capítulo, embora sejam mencionados nas notações de Bill.'
    ];

    const chapterMistakes = [
        'Há um bug quando Joel e Ellie precisam se agachar sob um fio que se conecta a duas bombas de pregos. Joel irá avisar a Ellie para se abaixar. Às vezes ela anda em linha reta e passa pelo fio, desencadeando as bombas. Ela sobrevive à explosão, mas se Joel estiver muito próximo, ele pode morrer.'
    ];

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter4">
                <div className="container">
                    <h1>Capítulo 4 - Cidade do Bill</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="Capítulo 4 - Cidade do Bill" />
                        </div>
                        <p>Cidade do Bill é o quarto capítulo de The Last of Us e introduz um novo personagem na trama: Bill, um velho amigo de Joel e Tess.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="O bosque" />
                            <p>Joel e Ellie decidem cortar caminho e passam pelo bosque nos arredores da cidade de Lincoln para encontrarem Bill. Ellie gosta de seu primeiro contato com a natureza, já que ela nunca havia deixado a zona de quarentena de Boston.
                                Ao saírem da mata eles chegam ao lado de uma torre d'água e avistam fumaça nas proximidades, onde provavelmente Bill mora. Eles decidem ir em direção a ela e Joel avisa a Ellie que Bill é um cara bom, mas é completamente paranoico
                                e não gosta de estranhos. 
                            </p> <br />
                            <p>À medida que eles avançam na cidade, percebem que ela está cheia de armadilhas, barricadas e bombas caseiras feitas por Bill para manter os infectados longe. Eles fazem o seu caminho através dos becos até atingirem uma garagem onde 
                                Joel acidentalmente ativa uma das armadilhas de Bill e fica pendurado de cabeça para baixo por uma corda. Ellie rapidamente tenta cortar a corda presa a uma geladeira, que faz o contrapeso com que Joel fique nessa posição. Pouco tempo depois, 
                                surgem vários infectados e Joel precisa matá-los para que Ellie termine de cortar a corda. Finalmente quando Ellie consegue, Joel cai de cabeça no chão e é atacado por um corredor e quando seria mordido, seu amigo Bill surge e mata 
                                o infectado, salvando Joel. O trio é forçado a correr para uma lavanderia próxima na medida em que surgem mais infectados. Após matar os infectados na lavanderia, eles fogem e se abrigam em um bar na esquina.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image1} alt="Bill salvando Joel." />
                                    <figcaption>Bill salvando Joel.</figcaption>
                                </figure>
                            </div>  
                        </div>

                        <div>
                            <Subtitle subtitle="Esconderijo" />
                            <p>Quando eles entram no bar e têm tempo de respirar, Bill fica zangado com Joel por destruir suas armadilhas na cidade e atrair muitos infectados para sua área. Em seguida, ele algema Ellie por se tratar de uma estranha e a mesma afirma 
                                que Bill deve favores à Joel e manda ele a soltar. Joel tenta apaziguar o clima e explica para Bill porque estavam lhe procurando e pede um carro emprestado para encontrar seu irmão Tommy em Wyoming. Relutantemente, Bill concorda, 
                                mas diz que não há carros que funcionam na cidade, apenas peças. 
                            </p> <br />
                            <p>Em seguida, eles vão para o esconderijo de Bill, uma igreja, a fim de reunir armas e suprimentos, pois as peças estão em uma escola cheia de infectados. Bill diz que tem um presente para Joel e o entrega uma bomba de pregos usada explodir
                                infectados. Quando se prepararem para sair, Bill diz após recuperar as peças, ele não deve mais nenhum favor a Joel. 
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="O cemitério" />
                            <p>Quando os três saem do esconderijo, precisam passar por um cemitério, repleto de estaladores e devem matá-los para sair do local. Do lado de fora, encontram mais infectados, dentre eles corredores e estaladores, e necessitam passar por eles 
                                para chegar a uma casa nos fundos da escola.
                            </p> <br />
                            <p>Ao chegarem na escola, são encurralados na garagem por uma horda de infectados e Bill percebe que suas peças não estão mais lá. Sem tempo para pensar, o trio refugia-se em um dos corredores da escola, onde há um número menor 
                                de infectados.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Infectados na escola." />
                                    <figcaption>Infectados na escola.</figcaption>
                                </figure>
                            </div>  
                        </div>

                        <div>
                            <Subtitle subtitle="Fuga da escola" />
                            <p>Após eliminarem os corredores e estaladores na parte inicial da escola, eles avançam pelos corredores e entram no ginásio. Imediatamente se deparam com um Verme (também chamado de Baiacu). Se trata de um infectado de muitos anos e a sua aparência 
                                é semelhante à de um estalador, porém maior e mais lento, além de ser capaz de arremessar bolas de esporos que causam danos. 
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image3} alt="Baiacu." />
                                    <figcaption>Baiacu.</figcaption>
                                </figure>
                            </div>  
                            <p>Após matá-lo e fugirem para uma casa nas proximidades, eles encontram o antigo parceiro de Bill, chamado Frank, que cometeu suicídio depois de ser mordido. Ao explorarem a casa de Frank, encontram uma caminhonete na garagem com a bateria e as peças 
                                de Bill, que afirma que a bateria está fraca, mas as células funcionam. Na sala, próximo do corpo de Frank, Joel encontra um bilhete que Frank escreveu para Bill, onde ele diz odiar o “amigo”. Joel então entrega o bilhete ao destinatário que o joga 
                                fora. Posteriormente, o trio precisa trabalhar junto para sair do local. Ellie assume o volante, enquanto Joel e Bill empurram o carro para que ele funcione no tranco. No caminho encontram alguns infectados que são eliminados e, após descerem uma 
                                ladeira, o carro funciona e os três saem da cidade em segurança. 
                            </p> <br />
                            <p>Depois de escaparem, Ellie para o carro para que Bill possa descer e retornar à sua cidade, depois disso ele afirma que não deve mais nada a Joel. Em seguida, Ellie e Joel dão início a sua jornada rumo à Pittsburgh.</p>
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ChapterLists lstFunFacts={chapterFunFacts} />
                        </div>

                        <div>
                            <Subtitle subtitle="Possíveis erros" />
                            <ChapterLists lstMistakes={chapterMistakes} />
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['O bosque', 'Esconderijo', 'O cemitério', 'Fuga da escola']}
                                location="Lincoln, Massachusetts"
                                date="2033"
                                lstCharacters={['Joel', 'Ellie', 'Bill']}
                                lstEnemies={['Corredores', 'estaladores', 'baiacu']}
                                lstMentions={['Vaga-lumes', 'infectados', 'Pittsburgh', 'Lincoln', 'esconderijo', 'carro', 'Frank']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={11}
                                qtdPingentes={3}
                                qtdManuais={1}
                                qtdGibis={0}
                                qtdDialogos={5}
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

export default Chapter4;