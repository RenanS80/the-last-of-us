import Navbar from 'components/Navbar';
import ChapterResumeTable from 'components/ChapterResumeTable';
import ChapterCollectiblesTable from 'components/ChapterCollectiblesTable';
import Subtitle from 'components/Subtitle';
import ChapterImageSlider from 'components/ChapterImageSlider';
import Footer from 'components/Footer';
import Pagination from 'components/Pagination';

import Intro from '../../../assets/images/chapters/chapter2/intro.png';
import Image1 from '../../../assets/images/chapters/chapter2/image1.png';
import Image2 from '../../../assets/images/chapters/chapter2/image2.png';
import Image3 from '../../../assets/images/chapters/chapter2/image3.jpg';
import Image4 from '../../../assets/images/chapters/chapter2/image4.png';

import './styles.css';

function Chapter2() {

    const slides = [
        {
            id: 1,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%202/025_gal5UDEPy.png?updatedAt=1712698405252',
        },
        {
            id: 2,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%202/032_ZHoM9E3sPK.png?updatedAt=1712698406498',
        },
        {
            id: 3,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%202/046_vYvt8G_3k.png?updatedAt=1712698405441',
        },
        {
            id: 4,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%202/048_GxvAWSHKW7.png?updatedAt=1712698405402',
        },
        {
            id: 5,
            url: 'https://ik.imagekit.io/zqxyh6u3ylz/The%20Last%20of%20Us/Chapters/Chapter%202/052_p6piVGTnq.png?updatedAt=1712698405912',
        }
    ]

    return (
        <>
            <Navbar />

            <section className="individual-chapter__hero chapter2">
                <div className="container">
                    <h1>Capítulo 2 - A Zona de Quarentena</h1>
                </div>
            </section>

            <main className="individual-chapter__main">
                <div className="container">
                    <div className="chapter__main-intro">
                        <div className="chapter__main-image">
                            <img src={Intro} alt="" />
                        </div>
                        <p>A Zona de Quarentena é o segundo capítulo de The Last of Us e aborda os acontecimentos 20 anos após o surto do fungo Cordyceps que se alastrou pelos Estados Unidos.</p>
                    </div>
                    <div className="chapter__main-content">
                        <div>
                            <Subtitle subtitle="Vinte anos depois" />
                            <p>No cenário atual, grande parte da civilização foi destruída pela infecção. Os civis são moradores de zonas de quarentena fortemente policiadas, instituídos pela FEDRA. Aqueles que vivem fora das zonas 
                                são muitas vezes sobreviventes desesperados e que vivem sozinhos, em pequenos grupos ou em assentamentos independentes. Muitos destes sobreviventes são hostis.
                            </p> <br />
                            <p>Joel agora vive na zona de quarentena de Boston e ganha a vida como um contrabandista, recebendo pessoas, itens e armas através dos muros da zona, e parece ter construído uma reputação cruel e terrível para si mesmo. 
                                Ele é acordado por Tess, sua amiga e parceira de negócios, que lhe informa que foi atacada pelos homens de Robert, um traficante de armas local, que está em dívida com eles. Eles decidem enfrentá-lo no seu armazém. 
                                Enquanto caminhava para o ponto de verificação que eles precisam passar, a fim de chegar ao seu destino, Tess comenta que a distribuição da comida ainda não começou, mas as pessoas já estão na fila devido à escassez. 
                                A dupla também está presente quando quatro civis são arrastados para fora de um prédio por soldados em trajes HAZMAT (um traje completo projetado para proteger o usuário de materiais perigosos), 
                                que fazem uma varredura para ver se eles estão infectados. Os dois primeiros estão limpos, mas o teste do terceiro dá positivo. Apesar de dizer que não está infectada, a mulher recebe uma injeção letal de um soldado, 
                                matando-a imediatamente. Na quarta varredura alguns tentam escapar, mas são mortos a tiros.
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
                                    <img src={Image1} alt="Inspeção da FEDRA" />
                                    <figcaption>Inspeção da FEDRA.</figcaption>
                                </figure>
                            </div>  
                            <p>Em seguida, Joel e Tess chegam ao ponto de verificação. Quando eles estão prestes a passar, um ataque terrorista realizado por um grupo rebelde conhecido como Vaga-lumes destrói um veículo militar. Isso faz com que o 
                                exército feche o ponto de verificação e ordene que todos na área saiam das ruas. Logo, Joel e Tess são obrigados a buscarem um caminho alternativo por uma série de túneis e construções.
                            </p> 
                        </div>

                        <div>
                            <Subtitle subtitle="Além do muro" />
                            <p>Joel e Tess passam por uma série de casas e edifícios abandonados. Em uma das casas, eles pegam mochilas, armas e mais a frente são forçados a colocar suas máscaras de gás em um ambiente escuro e estreito para evitar 
                                os esporos infecciosos liberados por um infectado morto.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image2} alt="Joel e Tess em busca de Robert" />
                                    <figcaption>Joel e Tess em busca de Robert.</figcaption>
                                </figure>
                            </div>
                            <p>No caminho, se deparam com um homem que ainda está vivo, preso sob uma pilha de escombros. Ele implora para Joel matá-lo para que ele não vire "uma daquelas coisas". Joel tem a opção de atirar nele ou não. Em seguida, 
                                a dupla se depara com os primeiros infectados, denominados corredores. Após contornar a situação, eles encontram uma entrada para as favelas, onde Robert está se escondendo.
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="A favela" />
                            <p>Ao chegar, como Joel prediz, Robert tem medo e já sabe da presença deles. Tess encontra alguns conhecidos na área e consegue descobrir que Robert está escondido em um armazém antigo, escoltado por muitos homens.
                                Logo em seguida, três capangas de Robert tentam impedi-los de avançar, mas sem sucesso: Joel e Tess acabam rapidamente com eles e chegam ao armazém. Após também eliminarem os capangas no armazém, eles encontram Robert, que os
                                recebe de forma hostil, tentando matá-los.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image3} alt="O encontro com Robert" />
                                    <figcaption>O encontro com Robert.</figcaption>
                                </figure>
                            </div>
                            <p>Após ficar sem balas, Robert tenta fugir, mas é capturado e revela a Joel e Tess que deu as armas que ele lhes deviam aos Vaga-lumes, a quem ele também estava em dívida. Ele se oferece para ir atrás deles e obter as armas de volta, 
                                mas sem piedade Tess o mata com dois tiros. Enquanto eles pensam o que fazer a seguir, Marlene, a líder dos Vaga-lumes aparece, ferida a bala por militares. Ela então propõe devolver as armas em troca de um favor, Tess não concorda, 
                                mas não tem escolha a não ser fazer o acordo, que é contrabandear algo para o edifício do Capitólio de Boston. 
                            </p>
                        </div>

                        <div>
                            <Subtitle subtitle="A carga" />
                            <p>Depois de passar pelas patrulhas militares ela os apresenta uma adolescente chamada <strong>Ellie</strong>, a "carga" que aparece de posse de uma faca ordenando para que os dois se afastem de Marlene. Ao descobrir que era ela que 
                            eles deveriam levar, Joel hesita no início, mas Tess o convence a aceitar o serviço, contanto que a "rainha" vaga-lume mostre antes as armas. Com tudo resolvido, mais tarde naquela noite, eles iniciam a jornada.
                            </p> <br />
                            <div className="chapter__main-image">
                                <figure>
                                    <img src={Image4} alt="Ellie" />
                                    <figcaption>Ellie.</figcaption>
                                </figure>
                            </div>
                        </div>

                        <div>
                            <Subtitle subtitle="Curiosidades" />
                            <ul>
                                <li>Este capítulo marca o início da história principal.</li>
                                <li>No início do capítulo, enquanto os militares estão verificando o status de sobreviventes na rua, se você caminhar em direção a um dos guardas ele vai empurrá-lo e avisá-lo para não se aproximar novamente. Se você não respeitar esta advertência, será empurrado e o guarda vai atirar na sua cabeça. Todos os oficiais vão fazer isso na área por razões semelhantes.</li>
                                <li>É impossível impedir que o civil seja executado no pátio da zona.</li>
                                <li>Mesmo que você deixe o homem que está preso aos escombros vivo, isso não muda nada no jogo. É uma escolha moral.</li>
                                <li>o sair da casa de Joel junto com a Tess, você vai se deparar com um casal conversando, que inclusive fala com Joel se você parar perto deles. Outros civis mais à frente conversam sobre como o mundo está após 20 anos do surto da epidemia, sobre todas as dificuldades que os cercam.</li>
                                <li>Nas favelas, há uma criança segurando um brinquedo de girafa. A girafa é um animal recorrente ao longo do jogo.</li>
                            </ul>
                        </div>
                        
                        <div>
                            <Subtitle subtitle="Possíveis erros" />
                            <ul>
                                <li>Ao saírem do prédio com esporos, onde há o primeiro contato com os infectados, é possível passar por eles em stealth e mesmo assim Tess diz “acho que matamos todos eles”.</li>
                            </ul>
                        </div>

                        <div>
                            <Subtitle subtitle="Resumo" />
                            <ChapterResumeTable
                                lstSections={['Vinte anos depois', 'Além do muro', 'A favela', 'A carga']}
                                location="Boston, Massachusetts"
                                date="2033"
                                lstCharacters={['Joel', 'Tess', 'Marlene', 'Robert', 'Ellie']}
                                lstEnemies={['Corredores', 'bandidos']}
                                lstMentions={['Vaga-lumes', 'pandemia', 'FEDRA', 'bandidos', 'infectados', 'zona de quarentena']}
                            />
                        </div>

                        <div>
                            <Subtitle subtitle="Coletáveis" />
                            <ChapterCollectiblesTable
                                qtdArtefatos={8}
                                qtdPingentes={3}
                                qtdManuais={0}
                                qtdGibis={0}
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

export default Chapter2;