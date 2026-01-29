import Header from 'components/Header';
import CharacterTableInfo from 'components/CharacterTableInfo';
import CharacterSummary from 'components/CharacterSummary';
import RelatedCharacters from 'components/RelatedCharacters';
import ChapterHeading from 'components/ChapterHeading';
import CharactersGallery from 'components/CharactersGallery';
import Footer from 'components/Footer';

import { ellie } from 'data/relatedCharacters/ellie';

import QuotationMark from '../../../assets/images/characters/quotation-mark.svg';
import ImgInfoBio from '../../../assets/images/characters/ellie/ellie-info-bio.jpg';
import Img1 from '../../../assets/images/characters/ellie/img1.jpg';
import Img2 from '../../../assets/images/characters/ellie/img2.jpg';
import Img3 from '../../../assets/images/characters/ellie/img3.png';
import Img4 from '../../../assets/images/characters/ellie/img4.png';
import Img5 from '../../../assets/images/characters/ellie/img5.jpg';


function Ellie() {

    const lstSummaryItems = [
        {
            main: 'Biografia',
            nested: [
                {name: 'Antecedentes e início da vida', id: 'biography'}
            ],
            id: 'biography'
        },
        {
            main: 'Eventos de American Dreams',
            nested: [
                {name: 'Conhecendo Riley', id: 'meeting-riley'},
                {name: 'Encontrando Marlene', id: 'finding-marlene'}
            ],
            id: 'meeting-riley'
        },
        {
            main: 'Eventos de Left Behind',
            nested: [
                {name: 'Explorando o shopping', id: 'exploring-mall'},
                {name: 'Sendo infectada', id: 'being-infected'}
            ],
            id: 'exploring-mall'
        },
        {
            main: 'Eventos de The Last of Us',
            nested: [
                {name: 'Escapando de Boston', id: 'escaping-boston'},
                {name: 'À procura de um carro', id: 'looking-car'},
                {name: 'Pittsburgh', id: 'pittsburgh'},
                {name: 'Chegando em Jackson', id: 'arriving-jackson'},
                {name: 'Protegendo Joel', id: 'protecting-joel'},
                {name: 'Embate com David', id: 'clash-david'},
                {name: 'Encontrando os Vaga-lumes', id: 'finding-fireflies'},
                {name: 'Voltando para Jackson', id: 'back-jackson'}
            ],
            id: 'escaping-boston'
        }, 
        {
            main: 'Habilidades',
            id: 'skills'
        },
        {
            main: 'Behind the scenes',
            id: 'behind-the-scenes'
        },
        {
            main: 'Galeria',
            id: 'gallery'
        }
    ];

    const lstTableInfoBio = [
        {
            "Data de Nascimento": "Primavera de 2019"
        },
        {
            "Idade": "14 anos"
        },
        {
            "Status": "Vivo"
        },
        {
            "Gênero": "Feminino"
        },
        {
            "Familiares": "Anna (mãe)"
        },
        {
            "Residência": "Boston (anteriormente), Jackson"
        },
        {
            "Cor do cabelo": "Rútilo"
        },
        {
            "Cor dos olhos": "Verde"
        }
    ];

    const lstTableInfoBehindScenes = [
        {
            "Dublador (US)": "Ashley Johnson"
        },
        {
            "Dublador (BR)": "Luiza Caspary"
        },
        {
            "Captura de movimentos": "Ashley Johnson"
        }
    ]

    const lstImagesGallery = [Img1, Img2, Img3, Img4, Img5];

    return(
        <>
            <Header />

            <div className="container container--character">
                <main className="character__biography">
                    <div>
                        <h1>Ellie Williams</h1>
                        <hr className="divider" />
                    </div>
                    <div className="character__citation">
                        <img src={QuotationMark} alt="Aspas" />
                        <blockquote>Depois de tudo que passamos... De tudo que eu fiz, não pode ser em vão.</blockquote>
                        <img src={QuotationMark} alt="Aspas" />
                    </div>
                    
                    <div className="character__intro">
                        <div className="character__resume">
                            <p>Ellie Williams é uma das protagonistas de <strong>The Last of Us</strong> e personagem principal em <strong>The Last of Us: Left Behind</strong> e <strong>The Last of Us: American Dreams</strong></p> <br/>
                            <p>Ellie cresceu como órfã na zona de quarentena de Boston e frequentou a escola preparatória militar da FEDRA, na qual fez amizade com Riley Abel. Quando Ellie tinha quatorze anos, 
                                ela e Riley foram infectadas e ela descobriu que era imune. 
                            </p> <br/>
                            <p>Marlene, uma velha amiga de sua mãe e líder dos Vaga-lumes, acreditava que Ellie era a chave para desenvolver uma vacina, que acabaria com o caos no mundo ao qual estavam acostumadas. 
                                Marlene encarregou Joel e Tess, ambos contrabandistas, de escoltar Ellie em segurança para longe da zona de quarentena e entregá-la a outros Vaga-lumes. Entretanto, "simples entrega" acaba se tornando uma aventura sombria que mudaria a vida 
                                deles de forma definitiva.
                            </p>

                            <CharacterSummary lstItems={lstSummaryItems} />
                        </div>

                        <CharacterTableInfo infoBio={lstTableInfoBio} infoBehindScenes={lstTableInfoBehindScenes} photo={ImgInfoBio} name="Ellie" />
                    </div>

                    <div id={lstSummaryItems[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Biografia" secondaryHeading="Antecedentes e início da vida" />

                        <p>Ellie nasceu na primavera de 2019, quando infecção do Cordyceps havia se espalhado pelos Estados Unidos. Sua mãe era uma enfermeira chamada Anna e a identidade de seu pai é desconhecida.</p> <br />
                        <p>No dia em que Ellie nasceu, Anna foi infectada. Antes de sua morte, Anna confiou em sua amiga mais próxima, Marlene, para cuidar de Ellie. No entanto, Ellie só conheceu Marlene aos 13 anos de idade.
                        </p> <br />
                        <p>Quando criança, Ellie cresceu órfã em uma opressiva zona de quarentena militar em Boston, com pouco conhecimento do mundo antes da infecção.
                        </p> <br />
                        <p>De acordo com Ellie, em um ponto de sua vida, ela dirigiu um carro, e usou um rifle BB para atirar em ratos.
                        </p>
                    </div>

                    <div id={lstSummaryItems[1]?.nested?.[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Eventos de American Dreams" secondaryHeading="Conhecendo Riley" />

                        <p>Pouco depois de completar 13 anos, Ellie chega à zona de quarentena de Boston em um ônibus e avista os militares examinando um homem em busca de infecção. Ele está infectado e é colocado 
                            de joelhos pelos militares, que apontam armas para sua cabeça. Essa visão a assusta.
                        </p> <br />
                        <p>Após chegar em segurança na parte de interna da zona, ela e os outros sobreviventes saem do ônibus. Ela é abordada por um soldado que a conhece e a avosa para que ela não faça nenhuma besteira 
                            e que não pode mais cuidar dela. Enfurecida, Ellie afirma que pode cuidar de si mesma sem a ajuda dele. No entanto, pouco depois, ela se envolve em uma briga com um grupo de meninos que tenta 
                            roubar seus pertences. Ellie os provoca, mas é salva por uma adolescente que os intimida o suficiente para fazê-los recuar.
                        </p> <br />
                        <p>Ela pergunta a Ellie o que eles queriam dela, e Ellie dá a entender que pretendiam roubar seus pertences. Ela dispensa a menina quando esta tenta dar conselhos sobre como se virar na zona de 
                            quarentena, perguntando se parecia ou não precisar de ajuda. A garota observa que Ellie tem problemas de confiança e a chama de &#8220;garota nova&#8221;. Segundos depois, aconselha Ellie a fugir antes 
                            de sair rapidamente. Ellie fica confusa com o que ela quis dizer e acaba sendo pega por uma das figuras de autoridade encarregadas da escola.
                        </p> <br />
                        <p>No escritório, Ellie é irreverente diante da demonstração de autoridade, apesar da leitura em voz alta de sua ficha disciplinar por incidentes anteriores. Ele a designa para o serviço de limpeza. 
                            Enquanto esfrega um jipe ensanguentado, ela procura seu Walkman e percebe que ele sumiu do bolso da jaqueta. Ellie logo deduz que a garota de antes o roubou e tem um ataque de raiva, perplexa por como ela 
                            conseguiu pegá-lo sem que Ellie percebesse.
                        </p> <br />
                        <p>Um momento depois, ela nota um dedo amputado próximo ao volante do jipe e imagina a briga que deve ter ocorrido ali. Joga a água no pneu e vai tirar satisfação com a garota sobre o Walkman. No refeitório, 
                            Ellie exige que o aparelho seja devolvido, mas a garota finge ignorância. Ellie, no entanto, continua pressionando o assunto até que a garota desiste com um comentário indireto sobre seu mau gosto musical.
                        </p> <br />
                        <p>Mais tarde, naquela noite, enquanto está acordada na cama, Ellie ouve passos do lado de fora de seu quarto. Ela se veste e espia pela porta, a tempo de ver a garota desaparecendo por uma saída. Ellie a 
                            segue discretamente e se aproxima furtivamente dela. Surpresa ao encontrar Ellie atrás de si, a garota exige que ela volte para o quarto.
                        </p> <br />
                        <p>Ellie se recusa — quer que a garota lhe mostre uma saída da escola e diz para parar de chamá-la de “garota nova”. A garota hesita por um momento antes de atender ao pedido. Ela pergunta se Ellie consegue 
                            acompanhar, e Ellie comenta que acompanhar “não é um problema”. Finalmente, a garota chama Ellie pelo nome e pede que ela não se arrependa de tê-la seguido. As duas conseguem escapar do prédio e atravessar 
                            o pátio sem serem notadas. Ao escalar a cerca, Ellie pergunta como a garota sabia seu nome. Ela responde que tem “seus modos” e se apresenta como Riley. Riley então pergunta se Ellie está pronta para o 
                            que vem a seguir, e ela confirma.
                        </p> <br />
                        <p>Ellie se esforça para acompanhar Riley enquanto ela a conduz pelos telhados. Quando Riley para, Ellie, sem fôlego, pergunta se aquele é todo o desafio que ela tem a oferecer. Ignorando a provocação, 
                            Riley pergunta se Ellie pensa em seu futuro. Ellie assume que ela está sendo jocosa e pergunta se fala do futuro visto na ficção científica. Riley repete a pergunta e quer saber o que Ellie pretende fazer da vida. 
                            Ellie não vê muito futuro para si mesma, e Riley diz que essa mentalidade é exatamente o que as figuras de autoridade da zona de quarentena querem que as pessoas tenham.
                        </p> <br />
                        <p>Confusa, Ellie devolve a pergunta. Riley explica que fará dezesseis anos em três meses e pretende usar esse tempo para descobrir o que quer da vida. Ellie insiste em saber o que mais o mundo pode reservar para elas, 
                            mas Riley ignora. Ela pergunta se Ellie já andou a cavalo, e Ellie responde que não. Riley a conduz pela janela de um shopping abandonado. Ellie faz uma pausa para zombar de sua própria postura antes de se juntar a Riley.
                        </p> <br />
                        <p>Momentos depois, Ellie avista um fliperama a poucos metros. Pede que Riley espere e entra, onde encontra um jogo antigo chamado Triple Phoenix. Ela começa a descrever com entusiasmo o programa de televisão em que o 
                            jogo foi inspirado.
                        </p> <br />
                        <p>Riley descarta o entusiasmo de Ellie, dizendo que o jogo é para crianças. Em seguida, descreve The Turning, um violento jogo de luta com uma personagem feminina chamada Angel Knives. Ellie comenta que as crianças que nasceram 
                            antes da infecção tiveram sorte, sem perceber a expressão sombria de Riley. Riley decide que está perdendo tempo e sai do fliperama.
                        </p> <br />
                        <p>Enquanto Ellie a segue, para por um instante e imagina como o fliperama era antes da infecção, antes de seguir em frente. Logo depois, Riley a leva até um acampamento, onde Ellie conhece seu amigo Winston, morador do shopping.
                            Winston repreende Riley por trazer outra pessoa ali, sabendo que isso pode lhe causar problemas. Riley garante que Ellie é legal e os apresenta formalmente. Em troca de trazer uísque para ele, pede que ensine Ellie a 
                            andar a cavalo.
                        </p> <br />
                        <p>Ellie segue Riley até os estábulos. A garota explica como se comportar perto dos cavalos e pede que Ellie garanta que Winston a leve para passear em Princess. Enquanto Riley prepara o cavalo, Ellie pergunta se ela está tentando 
                            ser expulsa da zona de quarentena por causar problemas.
                        </p> <br />
                        <p>Riley responde que não quer ser colocada na população em geral, onde as pessoas recebem empregos terríveis e poucas rações para sobreviver. Assim que o cavalo está pronto, Winston ajuda Ellie a subir na sela e avisa Riley para 
                            se comportar enquanto elas saem. Ellie pergunta a Winston sobre sua vida antes da infecção e ouve o homem mais velho relembrar a infância vagando pelo shopping e faltando à escola, encantado com as memórias.
                        </p> <br />
                        <p>Elas voltam ao acampamento de Winston e encontram Riley lendo uma revista. Descendo do cavalo, Ellie agradece por tê-la levado ao shopping. Momentos depois, uma explosão do lado de fora interrompe tudo, e Winston parte para encontrar 
                            sua unidade. Ele ordena que Riley e Ellie voltem para a escola antes de ir embora. Abalada com o que acabou de acontecer, Ellie concorda, mas é ignorada por Riley. Ao se virar, Ellie vê a amiga mexendo em um walkie-talkie. 
                            Percebe que foi usada para distrair Winston e começa a gritar com Riley, quando as duas ouvem que pode haver vaga-lumes na área. Riley se anima com a possibilidade de conhecê-los, mas Ellie acredita que ela enlouqueceu. Em vez de 
                            discutir, Riley vai embora sozinha. Chocada, Ellie permanece parada por um momento antes de decidir segui-la.
                        </p> <br />
                    </div>

                    <div id={lstSummaryItems[1]?.nested?.[1].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Encontrando Marlene" />

                        <p>Seguindo Riley, a dupla chega a um local com vista para uma batalha entre os militares e os Vaga-lumes. Ao perceber que eles estão perdendo, Riley decide dar aos rebeldes uma chance de escapar. Ellie fica chocada ao descobrir que 
                            Riley conseguiu roubar algumas bombas de fumaça enquanto Winston estava distraído. As duas lançam as bombas contra os militares, permitindo que os Vaga-lumes recuem com segurança. As meninas comemoram, mas logo são avistadas pelos 
                            militares, que abrem fogo contra elas.</p> <br />
                        <p>Ellie e Riley fogem rapidamente para um beco fora do shopping. Ellie está irritada, apesar das garantias de Riley de que elas estarão seguras. No entanto, um corredor aparece e ataca Ellie primeiro. </p> <br />
                        <p>Riley reage acertando-o com uma pedra antes que ele possa fazer qualquer coisa, mas o corredor, ao perceber sua presença, passa a atacá-la e a imobiliza no chão. Ele parece mordê-la antes que Ellie o mate com um tijolo. Ellie 
                            inspeciona a área e descobre que apenas a jaqueta de Riley foi rasgada. Riley mostra um breve momento de bravata desafiadora, mas logo admite que estava com medo e vontade de se virar para chorar nos braços de Ellie.
                        </p> <br />
                        <p>Os Vaga-lumes que recuaram da luta logo avistam as garotas. Riley tenta explicar que foram elas que jogaram as bombas de fumaça, mas é nocauteada por um dos membros. Ellie fica furiosa, mas logo é vendada e capturada, enquanto 
                            um deles se mostra chocado com o envolvimento de Ellie.
                        </p> <br />
                        <p>Ellie acorda com os Vaga-lumes discutindo se devem ou não desobedecer às ordens. Ela consegue sacudir o saco da cabeça e vê três homens discutindo. Em seguida, desliza para fora da corda que prende suas mãos atrás das costas e 
                            pega um caco de vidro, pouco antes de Marlene entrar.
                        </p> <br />
                        <p>Um dos Vaga-lumes pergunta a ela como está outro de seus membros, chamado Kerry. Marlene informa que o médico acredita que ela tem chances de sobreviver. Marlene remove as amarras das pernas de Ellie com uma faca, e Ellie exige 
                            que Riley seja desamarrada. Os Vaga-lumes obedecem, e Marlene entrega a Ellie um envelope com instruções para abri-lo quando ela voltar para a escola. Ellie vê Riley e Marlene discutirem antes de três homens armados aparecerem 
                            e exigirem que elas paguem o pedágio por estarem no túnel do contrabandista. Os homens se tornam hostis e atacam de repente, com Ellie puxando Riley, congelada, para longe do tiroteio.
                        </p> <br />
                        <p>Ellie percebe uma saída, mas Riley se recusa a sair e corre para pegar uma arma perto de um dos homens. Antes que Ellie possa agarrá-lo, ele a puxa de volta pelo capuz. No entanto, antes que ele possa machucá-la, Ellie o acerta 
                            com um tijolo. Ele volta sua atenção para Ellie e, enquanto o faz, Riley pega a arma e atira nele, derrubando-o no chão.
                        </p> <br />
                        <p>Marlene diz a Ellie que sua mãe se chamava Anna e que contaria mais sobre ela quando chegasse a hora certa. Marlene aponta para uma escada e diz a Ellie e Riley que ela leva para trás da escola. Antes de partirem, Marlene dá a 
                            Ellie um canivete e diz que era de sua mãe e as duas garotas vão embora.
                        </p> <br />
                        <p>Pouco tempo depois, Ellie lê a carta de Marlene, pega o canivete de sua falecida mãe a abraça-o contra o peito.
                        </p>
                    </div>

                    <div id={lstSummaryItems[2]?.nested?.[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Eventos de Left Behind" secondaryHeading="Explorando o shopping" />

                        <p>Tempos depois de voltarem à escola, Ellie e Riley acabam discutindo e se separando. Riley desaparece da escola, e Ellie presume que sua amiga foi morta. Enquanto isso, Ellie é convocada para o exército e mantém contato superficial 
                            com os amigos de Riley. No verão de 2033, Ellie é surpreendida pelo retorno de Riley, que a acorda no meio da noite. Aliviada, mas chateada, Ellie pergunta onde a amiga esteve, já que não a via há seis semanas, e Riley revela que 
                            se tornou Vaga-Lume. Compreendendo a tristeza da amiga, Riley promete contar o que aconteceu enquanto esteve fora, caso Ellie saia da escola com ela. Relutantemente, Ellie se veste e a segue.
                        </p> <br />
                        <p>Do lado de fora da escola, elas escapam de uma patrulha que se aproxima, escondendo-se em um prédio abandonado. Enquanto exploram o local, Ellie pergunta como Riley encontrou os Vaga-Lumes. Riley conta que seguiu Trevor, um 
                            Vaga-Lume conhecido. Quando pergunta se Ellie fez amizade com alguém na escola ou manteve contato com seus amigos, Ellie desconversa. Ao entrarem em uma sala, Ellie vê um símbolo dos Vaga-Lumes e pergunta, em tom de brincadeira, 
                            se Riley &#8220;encontrou a luz&#8221;. Riley diz que, com os Vaga-Lumes, ela não é uma soldado como Ellie. Ao ouvir uma transmissão pelo alto-falante sobre a situação da zona de quarentena, Riley menciona que os militares 
                            estão mentindo sobre o número de infectados que continuam aparecendo na zona. Ela quase revela que teve de matar alguém que havia sido infectado, mas desvia do assunto.
                        </p> <br />
                        <p>Atravessando os telhados, elas escapam de outra patrulha e descem pela janela para o shopping Liberty Gardens, seu ponto de encontro habitual. Ao ver um cartaz de uma pistola d'água, Ellie diz que tentou pegar as pistolas d'água 
                            delas no escritório do &#8220;Cabo babaca&#8221;, mas foi pega na tentativa de fuga. Riley diz para ela desistir de recuperá-las, mas Ellie continua determinada a roubá-las de volta. Ao chegar ao acampamento de Winston, Ellie 
                            diz que ouviu dizer que ele havia morrido de um ataque cardíaco, algo raro entre os sobreviventes. Explorando a tenda, Ellie descobre uma fotografia dele na juventude e comenta sobre sua aparência. Riley encontra uma garrafa de 
                            bebida alcoólica e oferece um gole a Ellie. Depois que Riley bebe em memória de Winston, elas saem da tenda e avistam a sela que pertencia à sua égua, Princesa.
                        </p> <br />
                        <p>Em seguida, elas tentam encontrar o caminho para o outro lado do shopping. Riley usa uma viga de metal para levantar os escombros do teto que desabou. Ao puxar a viga, criando uma pequena passagem, o peso faz com que os entulhos 
                            desabem, impossibilitando a travessia. Enquanto procuram outra saída, Ellie vê uma janela aberta sobre a porta de uma loja de artigos de Halloween e ajuda Riley a entrar. Ellie entra na loja instantes depois de Riley abrir a 
                            porta e se assusta com a máscara que a amiga encontrou lá dentro. Riley dá a Ellie uma máscara de lobisomem, que ela coloca a contragosto. As duas exploram a loja, trocando máscaras e se maravilhando com as curiosidades, 
                            incluindo uma caveira que adivinha a sorte.
                        </p> <br />
                        <p>Ao sair da loja, Riley sugere que joguem um jogo. Se uma delas quebrar todos os vidros de dois carros abandonados no meio do shopping, poderá fazer uma pergunta à outra. Ellie vence Riley e pergunta por que ela saiu da escola. Riley 
                            admite vagamente estar &#8220;num momento estranho&#8221; e que não contou a ninguém que tinha ido embora. Ao irem para os fundos do shopping, Riley explica que os militares mentiram sobre a energia na cidade e que ainda 
                            havia eletricidade no local. Ao entrar em uma sala, Riley abre uma caixa de junção e faz um gesto para Ellie acionar o interruptor. Duvidando que funcione, Ellie religa a energia do shopping, e as duas seguem em direção à saída. 
                            Lá, Ellie hesita e admite estar ciente das tentativas de Riley de reconquistá-la. Riley se desculpa pelas coisas que disse antes de ir embora, ao que Ellie desconversa, chamando a amiga de &#8220;boba&#8221;. Elas saem pelos 
                            fundos do shopping e seguem em direção ao carrossel iluminado.
                        </p> <br />
                        <p>Ellie sobe no carrossel e dá uma voltinha rápida antes de convidar Riley para acompanhá-la. Riley mal consegue aproveitar o passeio antes de o carrossel parar de funcionar. Percebendo a decepção da amiga, Ellie diz que gostou do passeio. 
                            Um instante depois, Riley revela que comprou outro livro de piadas para Ellie. As duas saem do carrossel enquanto Ellie escolhe piadas para contar, até encontrarem uma cabine de fotos. Ao entrarem, mexem nas configurações da máquina 
                            e ficam confusas com a mensagem que as direciona para o Facebook. Elas tentam imprimir as fotos, mas uma mensagem de erro as impede.
                        </p> <br />
                        <p>Elas vão até o último andar e entram no fliperama Raja. Ellie fica decepcionada ao descobrir que a máquina de &#8220;Turning&#8221; está quebrada, mas Riley a ajuda a visualizar como jogar, descrevendo as ações e os comandos para a 
                            personagem Angel Knives lutar contra sua oponente, Blackfang. A ajuda de Riley leva Ellie à vitória, mas ela decide que é hora de voltar para a escola, apesar da insistência de Riley para que continuem pelo shopping. Ellie diz a Riley 
                            que não tem mais advertências por ter ido escondida ao shopping, e Riley admite que será transferida para outro esconderijo dos Vaga-Lumes.
                        </p> <br />
                        <p>Ellie finge não se importar, mas, quando Riley insiste no assunto, Ellie exige saber por que a levou ao shopping. Quando a resposta de Riley, de que só queria vê-la, não é satisfatória, ela fica sem palavras. Frustrada, Ellie manda Riley 
                            ir embora, e Riley decide investigar a música, apesar dos protestos de Ellie. Ellie vai atrás dela e encontra Riley dentro de uma loja de departamentos, admirando a vista. Furiosa, Ellie pergunta se Riley se sente culpada pela briga que 
                            tiveram antes de ela desaparecer. Riley nega qualquer sentimento de culpa como motivação para atravessar território hostil para vê-la novamente, mas admite que estava tentando fazer as coisas darem certo entre elas. Riley revela que 
                            recuperou suas pistolas de água, tirando-as da mochila, dizendo que quase foi atingida por um tiro ao tentar pegá-las. As meninas brincam com as pistolas de água. Depois, Ellie lembra Riley de que ela precisa voltar para a escola, 
                            e a amiga se oferece para acompanhá-la até em casa. Enquanto se preparam para partir, Ellie encoraja Riley a ir embora e diz que elas se verão novamente um dia.
                        </p> <br />
                        <p>Um instante depois, Riley pergunta se Ellie ainda tem seu Walkman. Quando Ellie responde que sim, Riley pega o aparelho e o conecta a um dos sistemas de som da loja. As duas sobem em cima de um balcão e começam a dançar ao som de 
                            &#8220;I got you babe&#8221; da cantora Etta James. Após alguns instantes, porém, Ellie para, subitamente triste, e pede sinceramente a Riley que não a deixe. Riley tira seu pingente e o deixa cair no chão como resposta. Ellie então 
                            beija Riley. Ela se desculpa quase imediatamente em seguida, mas Riley diz que não há nada pelo que se desculpar.
                        </p> <br />
                        <p>Enquanto as garotas tentam decidir o que fazer em relação umas às outras e aos Vaga-Lumes, são pegas de surpresa pela chegada repentina de corredores atraídos pela música. Elas escapam e barricam a porta, mas os infectados invadem o 
                            shopping. Riley guia Ellie para os andares superiores, escapando por pouco deles.
                        </p>
                    </div>

                    <div id={lstSummaryItems[2]?.nested?.[1].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Sendo infectada" />
   
                        <p>Riley as guia para fora de uma janela, em direção a um andaime. Quando Ellie alcança Riley, a prateleira que usava para subir tomba, e ela cai no chão. Ellie se defende dos infectados até que Riley chega para ajudá-la; no entanto, a 
                            amiga é emboscada por outro infectado. Recuperando-se, Ellie pula nas costas do agressor e corta sua garganta. Ela presume que o pior já passou, mas Riley chama sua atenção para o ferimento em seu braço. Ellie percebe que foi mordida, 
                            e Riley também revela uma mordida em sua mão.</p> <br />
                        <p>Ellie fica furiosa e destrói vários vasos com um cano. Riley tenta consolá-la, dizendo-lhe que as duas opções que têm para lidar com a situação são recorrer ao suicídio ou esperar a infecção passar juntas e lutar para sobreviver com o 
                            tempo que lhes resta. Riley prefere a segunda opção. Quando Ellie pergunta se há uma terceira opção, Riley simplesmente responde: &#8220;Desculpe&#8221;. 
                        </p> <br />
                        <p>Embora as duas se resignem ao fim e escolham esperar juntas até morrer, Riley é a única que sucumbe à infecção fúngica. Apesar de Ellie não é infectada e descobre ser imune. Mais tarde, é acolhida por Marlene, que planeja levá-la a 
                            Salt Lake City, em um hospital dos Vaga-lumes, para que eles estudem como o fungo não infectou Ellie e tentem fazer engenharia reversa para desenvolverem uma cura para a humanidade.
                        </p>
                    </div>

                    <div id={lstSummaryItems[3]?.nested?.[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Eventos de The Last of Us" secondaryHeading="Escapando de Boston" />

                        <p>Três semanas depois, por volta da época em que Marlene e Ellie planejavam deixar Boston rumo a Salt Lake City, Marlene se fere durante a busca pelo contrabandista Robert, um homem que havia contratado inicialmente para escoltar Ellie para 
                            fora da cidade. Desesperada para tirá-la de Boston, Marlene contrata dois contrabandistas conhecidos, temidos e experientes - Joel Miller e Tess Servopoulos - para escoltarem Ellie antes que os militares aniquilem os Vaga-Lumes. 
                            Ela organiza para que uma pequena equipe do grupo encontre os três no Capitólio.
                        </p> <br />
                        <p>Enquanto Tess acompanha Marlene para verificar as armas que ela prometeu às duas, Ellie é levada por Joel a um apartamento perto da muralha externa. No caminho, Joel pergunta onde estão os pais dela e por que Marlene está tão obcecada por 
                            ela. Ellie evita responder por que está sendo contrabandeada, mas informa a Joel que seus pais morreram e que ela tem 14 anos. Ao anoitecer, ela chega, e o trio decide partir para fora da zona.
                        </p> <br />
                        <p>O trio logo deixa a zona, e Ellie fica incrédula por estar fora dos muros que cercam a zona de quarentena. Sua alegria é interrompida quando ela e os outros são capturados por uma patrulha militar. Os soldados os revistam em busca de 
                            vestígios de infecção, fazendo com que Ellie entre em pânico e esfaqueie um dos homens. Ele a derruba, preparando-se para atirar, mas Joel o imobiliza e o mata, salvando a vida de Ellie. Com os soldados sob controle, Joel e Tess descobrem 
                            que Ellie está infectada, mas são forçados a levá-la consigo quando outra patrulha se aproxima.
                        </p> <br />
                        <p>Evitando os soldados que os procuram, o trio consegue escapar e faz uma breve pausa. Lá, Ellie revela que os Vaga-Lumes têm um laboratório de pesquisa no Oeste, fazendo Joel rir ao imaginar tal coisa. Ellie fica irritada com ele, mas Joel 
                            a ignora enquanto pergunta a Tess o que devem fazer a seguir. No entanto, Tess acredita no que Ellie afirma e deseja entregá-la conforme solicitado. 
                        </p> <br />
                        <p>Após uma noite enfrentando infectados, os três estão quase em seu destino. Depois de atravessar uma prancha para alcançar outro prédio, Ellie fica surpresa com a vista, e sua admiração infantil faz com que Joel se lembre de Sarah. Eles 
                            chegam ao ponto de encontro no Capitólio, mas encontram apenas corpos de Vaga-Lumes, com os militares se aproximando. Tess entra em desespero em busca de pistas para onde outros Vaga-lumes possam ter ido e Joel a confronta falando para 
                            desistirem da entrega. Tess então revela que foi infectada durante sua última batalha e insiste que Ellie e Joel continuem sozinho enquanto ela ganha tempo matando os militares que se aproximam do local. Ellie e Joel correm, ainda incrédulos 
                            com a revelação de Tess e ouvem ela sendo baleada pelos militares. Ellie se sente culpada por isso, mas Joel ignora seus comentários sobre o assunto.
                        </p>
                        
                    </div>
                        
                    <div id={lstSummaryItems[3]?.nested?.[1].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="À procura de um carro" />

                        <p>Os dois chegam mais tarde a uma cidade onde Joel acredita que podem encontrar Bill, um mecânico que lhe deve um favor e pode lhes fornecer um carro. Ellie revela, durante a viagem até Lincoln, que nunca tinha visto um bosque até aquele 
                            dia, nem visto vagalumes de verdade. Ao avançarem na cidade, Joel fica preso em uma das armadilhas de Bill e Ellie tenta libertá-lo, evitando os infectados que se aproximam e fornecendo munição para Joel para que ele a proteja.
                        </p> <br />
                        <p>Assim que Joel se liberta, Bill aparece e salva os dois dos infectados que se aproximavam e os leva até um esconderijo. Ao chegarem, Bill se irrita com a presença deles porque desativaram muitas de suas armadilhas e alertaram muitos infectados 
                            sobre sua presença, Bill os subjuga, temendo que tenham sido mordidos. Enquanto ele examina Joel, Ellie consegue se libertar das algemas e o ataca com um cano, mas Joel se levanta rapidamente e impede que ela cause mais danos. Após uma breve 
                            discussão, Joel pede um carro a Bill. Cético e relutante, ele concorda em providenciá-lo, mas avisa que, uma vez pronto, não lhe deverá mais favores. Joel concorda com os termos, usando as chaves para libertar Ellie das algemas.
                        </p> <br />
                        <p>Eles se dirigem a uma igreja que Bill converteu em arsenal. Enquanto Bill e Joel conversam carregando espingardas, Ellie examina uma pilha de gibis e revistas em uma prateleira. Ela pega secretamente dois deles: uma revista pornográfica e uma 
                            edição de Savage Starlight. Ao guardá-los, é flagrada por Bill, que começa a gritar com ela. Ellie tenta se defender, mentindo que estava &#8220;apenas arrumando a pilha idiota dele&#8221;.
                        </p> <br />
                        <p>Quando os dois se preparam para ir embora, Bill a ameaça, mas ela, astutamente, diz que &#8220;não precisa de nenhuma das merdas dele&#8221;. Ellie e Joel descobrem que precisam chegar à escola secundária local, pois há um caminhão militar 
                            lá há algum tempo, mas com uma bateria ainda funcionando. Eles saem da igreja, e Ellie nota uma pilha de cadáveres queimados. Joel tenta dissuadi-la de continuar olhando, mas ela afirma que já viu coisas piores. Enquanto atravessam um 
                            quarteirão cheio de infectados, Ellie se mostra útil ao conseguir passar por pequenas frestas em portas e por cima de grades. Quando finalmente chegam à escola, descobrem que a bateria do caminhão sumiu. Sem outras opções, eles lutam para sair 
                            pelos fundos da escola, matando corredores, estaladores e um baiacu.
                        </p> <br />
                        <p>Os três chegam a uma casa. Enquanto Joel e Bill discutem, eles encontram o cadáver de Frank, velho parceiro de Bill enforcado na sala. Enquanto isso, Ellie explora a casa e encontra uma caminhonete aparentemente funcional na garagem. Ela é 
                            rudemente expulsa por Bill, que verifica o veículo e descobre que a bateria está descarregada, mas possui as células ativas. Bill recarrega a bateria e o trio sai da casa: Joel e Bill empurrando a caminhonete para ligar no tranco e Ellie 
                            dirigindo. Quando chegam à rua, Bill e Joel matam vários infectados e conseguem chegar ao topo de uma colina, onde Ellie finalmente consegue liga a caminhonete. Em seguida, os dois pulam na carroceria da caminhonete e sinalizam para Ellie 
                            continuar dirigindo, pois mais infectados estão a caminho. Eles retornam em segurança para a igreja de Bill.
                        </p> <br />
                        <p>Bill manda Ellie parar o caminhão e vai embora, enquanto Joel sai para se despedir. Ambos comentam brevemente que Ellie se saiu bem contra os infectados, mas Bill ainda acredita que Joel morrerá em breve. Antes de partir, ele dá a Joel uma 
                            mangueira de sifão para que possa obter gasolina de carros abandonados. A dupla segue viagem em direção a Pittsburgh.
                        </p>
                    </div>

                    <div id={lstSummaryItems[3]?.nested?.[2].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Pittsburgh" />

                        <p>Durante o início da viagem, Ellie passa o tempo no banco de trás lendo o artigo do Savage Starlight que roubou de Bill. Apesar de dizer que não está cansada, acaba adormecendo durante o trajeto. Quando acorda, descobre que Joel dirigiu até a 
                            entrada bloqueada de Pittsburgh. Joel faz um desvio pela cidade, mas é emboscado por um grupo de caçadores, fazendo com que ele bata com o carro em uma loja de conveniência e enfrente os inimigos.  
                        </p> <br />
                        <p>Enquanto atravessam a cidade, Joel avista um caminhão com uma metralhadora montada, usado pelos sobreviventes hostis para matar &#8220;turistas&#8221;, termo empregado pelos caçadores para se referirem a sobreviventes desconhecidos. Os dois 
                            criam um laço enquanto Joel responde às perguntas de Ellie sobre a vida antes do Cordyceps destruir o mundo. Uma pergunta em particular, sobre um pôster de Dawn of the Wolf, leva Joel a revelar que assistiu ao filme pouco antes do surto. 
                            Curiosa sobre o motivo, Ellie insiste, mas ele desconversa, alegando não se lembrar, evitando contar que já teve uma filha. Em seguida, a dupla chega a um hotel abandonado e se deparam com mais inimigos. Para escaparem, sobem para os andares
                            mais altos e conseguem atravessar por um elevador abandonado.
                        </p> <br />
                        <p>Entretanto, acabam se separando, pois ao subirem no poço do elevador, ele cede, fazendo Joel despencar até o fundo. Ellie, em segurança na borda, tenta descer até ele, mas Joel a impede, pois a descida era muito perigosa. Preocupada e impaciente, 
                            Ellie caminha pelo hotel, descendo novamente para tentar encontrá-lo. Ela o encontra em meio a uma luta com um caçador, que estava o afogando; Ellie atira e mata o agressor. No entanto, Joel a repreende por desobedecê-lo, fazendo com que Ellie 
                            grite com ele, frustrada por ele não lhe agradecer ao menos. Joel ignora friamente a reclamação. Enquanto caminham, Ellie tenta explicar por que ignorou sua ordem, mas fica ainda mais frustrada com a resposta de Joel.
                        </p> <br />
                        <p>Logo que chegam a um andaime abandonado, Joel pega um rifle de caça que está ao lado e diz a Ellie para ficar atrás de uma cobertura. Eles veem um grupo de caçadores, alheios à presença deles. Ellie quer ajudar, mas acredita que Joel não permitirá. 
                            Para sua surpresa, ele permite, entregando-a o rifle. Apesar de admitir que só havia atirado com um rifle em ratos, Joel confia a ela a tarefa de protegê-lo. Ele também a agradece por tê-lo salvado, demonstrando afeição por ela. Ellie retribui o 
                            carinho, satisfeita por perceber que Joel começa a criar laços com ela. Depois de matarem os caçadores, Joel finalmente considera que ela conquistou o direito de portar uma pistola, embora deixe claro que é apenas para emergências. Ellie garante que 
                            será cuidadosa.
                        </p> <br />
                        <p>Logo depois, a dupla se depara com um Humvee - veículo militar com metralhadora - enquanto atravessa as ruas, conseguindo escapar, apesar de seu pesado poder de fogo. Os dois decidem entrar em um prédio pela sacada para saírem das ruas. Enquanto 
                            fazem isso, Joel é agarrado por trás por um homem que ele presume ser outro caçador. Ellie observa enquanto Joel o domina, informando-o rapidamente de que um garoto está com uma arma apontada para ele. Joel então cessa o ataque. Eles se apresentam
                            como Henry e Sam, dois irmãos que fazem parte de um grupo de sobreviventes atacados pelos caçadores e buscam chegar à ponte de Pittsburgh para saírem da cidade.
                        </p> <br />
                        <p>À noite, Ellie acorda Joel, e os dois se juntam a Henry e Sam a caminho da ponte. Após eliminarem caçadores pelo caminho, eles chegam ao local, e precisam subir em um contêiner alto para atravessarem, mas, enquanto Ellie é puxada por Henry para cima, 
                            o Humvee retorna. Ela tenta fazer com que Henry puxe Joel, mas o homem entra em pânico e foge com Sam. Embora pudesse ir com os irmãos, Ellie pula de volta para ajudar Joel. Depois de escaparem das balas do Humvee, eles param ao perceber que a parte 
                            superior da ponte desabou. Com o Humvee batendo contra os veículos que bloqueiam seu caminho e Joel sem conseguir encontrar uma rota de fuga segura, Ellie decide agir por conta própria. Sabendo que não sabe nadar, ela pula imprudentemente da ponte, 
                            fazendo com que Joel faça o mesmo. Mal conseguindo flutuar na água, Ellie pede ajuda a Joel, que consegue agarrá-la, mas acaba desmaiando ao bater a cabeça contra uma pedra.
                        </p> <br />
                        <p>Milagrosamente, Ellie sobrevive, e Henry retorna a tempo de salvá-los. Ele os carrega até a margem, a certa distância da ponte, reunindo-os com Sam. Joel acorda irritado ao ver Henry e Ellie diz que ele os salvou, o que acalma os ânimos. Em seguida, 
                            o grupo segue em direção aos esgotos até uma torre de rádio, onde Henry encontraria outros sobreviventes de seu grupo. Eles escapam da área dos caçadores pelos esgotos e subúrbios. A dupla lentamente criava laços com os irmãos, mas isso logo em seguida 
                            Sam foi infectado e atacou Ellie. Para salvá-la, Henry atira contra o próprio irmão e em seguida comete suicídio, incapaz de suportar a dor de ter matado o próprio irmão caçula. Ellie e Joel ficam chocados com a cena e resolvem partir em busca 
                            de Tommy no Wyoming.
                        </p>
                    </div>

                    <div id={lstSummaryItems[3]?.nested?.[3].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Chegando em Jackson" />

                        <p>Ao chegarem em Jackson, a dupla encontra Tommy em um assentamento criado com outros sobreviventes. Joel acreditava que seu irmão, ex-membro dos Vaga-lumes, poderia mostrar-lhes a localização do grupo. Durante a estadia, Ellie descobre por Maria a verdade 
                            sobre Sarah, a filha de Joel que morreu tragicamente no início do surto. Ela também pressente que Joel planejava deixá-la com Tommy, o que a leva a fugir para uma casa de fazenda abandonada. Quando Joel a alcança, os dois têm uma discussão acalorada, 
                            na qual se torna evidente o quanto se aproximaram e passaram a se importar um com o outro durante a jornada Joel acaba mudando de ideia e decide acompanhar Ellie.
                        </p> <br />
                        <p>Com a orientação de Tommy, Joel e Ellie chegam a Universidade do Leste do Colorado, onde se acredita que os Vaga-Lumes residam. No entanto, eles não encontram nenhum Vaga-Lume; em vez disso, deparam-se com um grande grupo de infectados e saqueadores. 
                            Durante uma luta brutal, Joel é jogado do segundo andar do prédio de ciências e cai com o abdômen sobre um vergalhão presente no térreo e fica incapacitado, forçando Ellie a protegê-lo até a saída deles.
                        </p>
                    </div>

                    <div id={lstSummaryItems[3]?.nested?.[4].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Protegendo Joel" />

                        <p>Ellie consegue esconder Joel em um shopping abandonado, onde cuida de seu ferimento usando uma camisa velha e um pedaço de fita adesiva encontrado enquanto vasculhava as gavetas do local. Ela decide que isso lhes dará algum tempo e sai em busca de algo 
                            para costurar o ferimento de Joel, enquanto Callus, seu cavalo, fica de vigia.
                        </p> <br />
                        <p>Após subir uma escada rolante quebrada, Ellie encontra uma loja abandonada no shopping: a Farmácia Weston. Esperando encontrar remédios, ela se decepciona ao perceber que o local está completamente vazio, sem nenhum suprimento útil. Ao se aproximar do caixa, 
                            encontra um kit de primeiros socorros atrás de uma porta trancada. Em um bilhete encontrado no chão, Ellie descobre que o farmacêutico &#8220;enlouqueceu&#8221; e que um dos funcionários, sem saber do surto de Cordyceps, o trancou em uma loja da American Princess ao 
                            lado, juntamente com as chaves do kit de primeiros socorros.
                        </p> <br />
                        <p>Ao sair da loja, Ellie se depara com um estalador solitário e o mata rapidamente com seu canivete. Ela destranca a porta e abre o kit de primeiros socorros, mas fica decepcionada ao perceber que o kit está vazio, com os suprimentos já roubados por outros 
                            sobreviventes. Frustrada, Ellie chuta o kit, mas sua decepção logo se transforma em empolgação ao avistar um helicóptero médico acidentado, convencida de que poderá encontrar algo útil para suturar o ferimento de Joel. Sem saber como chegar até ele, ela 
                            encontra um portão, mas percebe que está trancado, e o botão para destrancá-lo não funciona.
                        </p> <br />
                        <p>Ela encontra cabos e se lembra do conselho de Joel para segui-los. Ao tentar ligar o gerador, descobre que ele está sem gasolina. Em uma garagem alagada, Ellie encontra um galão vazio e, após matar alguns perseguidores, o enche com gasolina retirada de um caminhão. 
                            Ela reabastece o gerador e consegue restaurar a eletricidade. Pouco depois, mais dois perseguidores surgem correndo com a água até os joelhos, mas um cabo de energia cai na água, eletrocutando-os. Ellie então precisa encontrar um caminho para o outro lado da garagem 
                            sem tocar na água. Após encontrar e matar mais infectados, Ellie retorna ao portão. Ela pula no helicóptero e fica aliviada ao encontrar remédios, abraçando o kit médico e afirmando que não vai deixar Joel na mão. No caminho de volta, ela é emboscada diversas vezes 
                            por canibais e infectados, tendo de distrair rapidamente alguns deles quando se aproximam do local onde escondeu Joel e Callus.
                        </p> <br />
                        <p>Depois de matar os inimigos, Ellie retorna até Joel, que ainda está vivo. Após dizer que é uma &#8220;quase especialista&#8221; em costurar feridas, ela consegue suturar seu ferimento. Em seguida, amarra Joel a um cobertor sobre um trenó, prende o trenó a Callus 
                            e começa a montá-lo. Ela finalmente consegue levá-los ao Lakeside Resort. Lá, Ellie esconde Joel em uma casa para cuidar dele, enquanto sai para caçar comida. Durante sua permanência no local, Ellie carrega consigo vários artefatos, muitos dos quais adquiriu durante 
                            sua vida em Boston. Entre eles estão a carta de sua mãe, Anna, o pingente de Riley, seu canivete, o Sony Walkman que usava no orfanato, os livros de piadas que lia em Pittsburgh e uma foto de Joel e Sarah que roubou de Tommy em Jackson.
                        </p>
                    </div>

                    <div id={lstSummaryItems[3]?.nested?.[5].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Embate com David" />

                        <p>Durante os meses de inverno, Ellie enfrenta escassez de comida. Ela sai da casa onde cuida de Joel e parte em busca de alimento em uma floresta próxima. Montada em Callus, encontra um cervo. Usando um arco, Ellie o mata, mas é confrontada por dois homens, David e James. 
                            David oferece trocar suprimentos por uma parte da carne do cervo que ela rastreou e abateu. Ellie exige antibióticos em troca, ameaçando-os com o arco caso tentem algo. James parte para buscar os antibióticos no assentamento do grupo, deixando David sozinho com Ellie. 
                        </p> <br />
                        <p>Os dois se abrigam do frio em um abrigo e logo os infectados os atacam. David ajuda Ellie a se defender e elogia sua habilidade com o rifle. Enquanto avançavam pelos prédios próximos, eles lutam com uma onda de infectados. Depois de limparem completamente os prédios, 
                            os dois retornaram ao refúgio original. David então discutiu a filosofia de que tudo acontece por uma razão, com a qual Ellie discordou veementemente. Ele decidiu provar sua teoria revelando que, na verdade, foram seus homens que atacaram Joel e Ellie na universidade. 
                            James, que retornou nesse momento, ouviu a conversa e apontou uma arma para Ellie, mas David exigiu que ela tomasse o remédio e fosse libertada, e James obedeceu relutantemente.
                        </p> <br />
                        <p>Ellie retorna à cidade próxima onde havia se refugiado. Lá, ela dá o remédio a Joel e depois vai dormir. Tendo deixado Ellie partir, David ordena que seus homens a rastreiem. Eles mencionam que receberam ordens estritas para mantê-la viva, mas essas instruções são ignoradas 
                            quando descobrem, por meio de James, que Joel havia massacrado metade dos homens do grupo na universidade. Montada em Callus, Ellie tenta escapar do grupo de David, que passa a persegui-la, resultando na morte do cavalo a tiros. Ao tentar fugir a pé, Ellie atravessa uma 
                            hospedaria, mas David a encontra no refeitório e a deixa inconsciente.
                        </p> <br />
                        <p>Quando Ellie recupera a consciência em sua cela, ela presencia James esquartejando um cadáver em uma bancada e descobre que David e seu grupo são canibais. Visivelmente enojada, Ellie se mostra hostil com David. Os dois discutem, e ela, relutantemente, come a comida que ele 
                            lhe oferece, alegando que se trata apenas de carne de veado. David implora a Ellie, dizendo que está pensando no melhor para ela, e oferece-lhe um lugar em seu grupo. Em seguida, ele toca afetuosamente a mão de Ellie &#40;subentende-se uma intenção de cunho sexual&#41;. 
                            Ao perceber suas intenções, Ellie quebra seu dedo e tenta recuperar as chaves, ao que David responde jogando-a contra as grades da cela e ameaçando sua vida.
                        </p> <br />
                        <p>No dia seguinte, David e James chegam e imobilizam Ellie sobre uma mesa, com a intenção de abatê-la para se alimentar. Pouco antes de David atacá-la, Ellie exclama que está infectada e afirma que David também está, pois a mordeu antes de jogá-la sobre a mesa. David 
                            inicialmente se mostra cético, mas Ellie insiste para que ele levante a manga direita e veja a ferida da mordida. Ao ouvir de Ellie que ela está infectada, James fica assustado e enojado; David, no entanto, afirma que isso não pode ser verdade, pois Ellie já 
                            teria se transformado.
                        </p> <br />
                        <p>James afrouxa o aperto em sua mão esquerda, e David passa a observar a mordida. Ellie aproveita a oportunidade para pegar uma faca de açougueiro com a mão esquerda e golpeia a garganta de James, matando-o. A morte de James enfurece David, que revida atirando em Ellie, 
                            errando todos os disparos. Ellie escapa da sala, levando David e os canibais a persegui-la pela cidade.
                        </p> <br />
                        <p>David finalmente encontra Ellie em um restaurante abandonado. Ele luta com ela enquanto ela tenta escapar de seus homens pela porta dos fundos, comentando que ela é fácil de rastrear. Após jogá-la no chão, David a mantém sob a mira de sua arma e pergunta como ela 
                            conseguiu escapar com vida. Ele se distrai momentaneamente quando o prédio começa a pegar fogo, causado por uma lanterna derrubada durante a luta. Enquanto o restaurante é lentamente consumido pelas chamas, David tranca a saída e provoca Ellie, dizendo que ela não 
                            tem para onde ir e que precisaria pegar suas chaves se quisesse sair.
                        </p> <br />
                        <p>David então passa a persegui-la pelo restaurante, assediando-a de forma perturbadora e expressando sua decepção por ela não ter aceitado sua oferta para se juntar ao grupo. Ellie, por sua vez, demonstra ainda mais repulsa por David e por sua evidente insanidade, escondendo-se 
                            atrás das mesas enquanto tenta tomar suas chaves ao acertá-lo com ataques furtivos.
                        </p> <br />
                        <p>Depois que Ellie esfaqueia David pelas costas com seu canivete, ele a empurra e tenta atirar nela com o revólver, errando os disparos enquanto ela se protege. Em seguida, saca um facão e continua a persegui-la, tentando matá-la a tiros ou com a lâmina. David passa a usar os 
                            pratos quebrados espalhados pelo chão para localizá-la sempre que ela pisa neles. Ellie consegue escapar e o esfaqueia mais duas vezes, fazendo com que ele entre em pânico. Ainda assim, David reage, arremessando-a contra uma mesa antes de agarrá-la pelos cabelos e jogá-la 
                            no chão. Apesar de ter sido atingido várias vezes na parte superior do tronco, David ainda consegue se levantar e ameaçar Ellie. Exaustos e gravemente feridos, os dois acabam desmaiando lado a lado.
                        </p> <br />
                        <p>Quando recuperam a consciência, David é o primeiro a despertar. Ele provoca Ellie, agora visivelmente mais fraca, enquanto ela rasteja em direção ao facão escondido sob um armário, dizendo que não há problema em desistir. Nesse momento, ele não percebe que a arma que deixou 
                            cair está ao alcance dela. David ataca novamente e a imobiliza, segurando-a pelo pescoço e quase a estrangulando até a morte. Ellie, porém, consegue alcançar o facão debaixo do armário e corta o braço dele. Aproveitando a abertura, ela passa a golpeá-lo violentamente na cabeça, 
                            repetidas vezes, em um acesso de fúria incontrolável. Joel chega de repente e a afasta do corpo sem vida de David, abraçando-a e tentando consolá-la enquanto Ellie desaba em lágrimas.
                        </p>
                    </div>

                    <div id={lstSummaryItems[3]?.nested?.[6].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Encontrando os Vaga-lumes" />

                        <p>A primavera cai quando Joel e Ellie chegam a Salt Lake City, o destino final planejado, em 27 de abril de 2034. Ellie agora tem quinze anos. Ainda abalada pelos acontecimentos do inverno, ela passa a primeira metade da viagem quieta e distante, visivelmente afetada. Após um momento 
                            de intimidade emocional entre os dois, Joel diz a Ellie que eles podem desistir e voltar para a casa de Tommy. Ellie agradece, mas recusa. Ela explica que, depois de tudo o que enfrentaram e perderam, aquilo precisa significar algo.
                        </p> <br />
                        <p>Após eliminar vários infectados em um túnel abandonado, eles chegam a uma parte inundada com uma forte correnteza e precisam passa por cima de um ônibus atravessado para avançarem. Ellie avança primeiro e percebe a instabilidade da estrutura. Quando Joel pula e tenta passar por cima 
                            do ônibus, a porta de vidro cede e ele fica preso dentro de um ônibus submerso. Ellie tenta ajudá-lo, mas não consegue e quase se afoga. Joel sair do ônibus e consegue retirá-la da água, já desacordada. Joel realiza massagem cardíaca para tentar salvá-la, no momento em que os 
                            Vaga-Lumes chegam. Após exigirem sua rendição, eles o deixam inconsciente. Eles são levados para o hospital e Ellie, reanimada, é levada imediatamente para ser examinada pela equipe médica.
                        </p> <br />
                        <p>Quando Joel acorda no hospital dos Vaga-Lumes, Marlene explica que a imunidade de Ellie pode ser explorada para criar uma vacina contra o fungo letal. No entanto, para isso, o Cordyceps mutante precisa ser extraído de seu cérebro por meio de uma cirurgia que a mataria. Joel se opõe 
                            imediatamente e exige que Marlene encontre outra pessoa. Marlene se recusa, afirmando que não há mais ninguém e que não existe outra alternativa, pois isso precisa ser feito para salvar a humanidade.
                        </p> <br />
                        <p>Marlene instrui o guarda dos Vaga-Lumes, Ethan, a escoltar Joel para fora do hospital; caso ele resistisse, Ethan teria permissão para matá-lo. Na saída, Joel domina e mata Ethan, seguindo então pelo prédio, Joel mata os soldados e chega até a sala de cirurgia, onde o procedimento em 
                            Ellie está prestes a começar. Joel a resgata, matando o Dr. Jerry Anderson no processo, quando este tenta impedi-lo.
                        </p> <br />
                        <p>Após fugir dos Vaga-Lumes restantes ao pegar um elevador até a garagem, Joel é confrontado por Marlene, que implora para que ele reconsidere. Ela descreve vários cenários terríveis que poderiam acontecer com Ellie caso ele a levasse de volta ao mundo exterior, desde ser despedaçada 
                            por um bando de estaladores até sofrer agressão sexual ou ser assassinada por bandidos. Marlene então tenta convencê-lo ao afirmar: &#8220;É o que ela gostaria, e você sabe disso&#8221;. Ainda relutante em entregá-la, Joel atira e mata Marlene. Mais tarde, Ellie acorda no 
                            carro de Joel, a caminho de Jackson, questionando o que aconteceu enquanto esteve inconsciente.
                        </p> <br />
                    </div>

                    <div id={lstSummaryItems[3]?.nested?.[7].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Voltando para Jackson" />

                        <p>Joel e Ellie finalmente chegam ao assentamento de Tommy, onde Joel comenta que agora poderiam levar uma vida um pouco mais normal. Antes disso, porém, ele mente para Ellie sobre o que, de fato, teria acontecido com os Vaga-Lumes enquanto ela esteve inconsciente. Ele afirma que havia 
                            dezenas de outras pessoas imunes sendo estudadas pelos Vaga-Lumes e que, mesmo assim, nada disso levou a uma cura. Ellie demonstra tristeza e frustração.
                        </p> <br />
                        <p>Ao chegarem ao assentamento, Ellie revela a Joel que, no dia em que foi mordida, estava com uma amiga, Riley, que também foi infectada. Ela conta que as duas prometeram esperar juntas até o fim e confessa que ainda está esperando para se transformar e se juntar à amiga. Em seguida, 
                            pede a Joel: &#8220;Jura para mim que tudo que você falou sobre os Vaga-Lumes é verdade&#8221;. Joel responde simplesmente: &#8220;Eu juro&#8221;, mentindo novamente para Ellie. Embora ela aceite a resposta, permanece ambíguo se ela realmente acredita nele.
                        </p>                       
                    </div>

                    <div id={lstSummaryItems[4].id} data-link="anchor">
                        <ChapterHeading mainHeading="Habilidades" />

                        <p>Inicialmente, Ellie é bastante inexperiente em técnicas de sobrevivência. Ela não sabe nadar, o que se torna uma desvantagem significativa, considerando a quantidade áreas alagadas presentes nos locais por onde passa. Ela carrega um canivete, que permanece como sua única arma por 
                            um longo período, até que Joel finalmente lhe confie uma arma de fogo. Sua pouca idade e falta de experiência fazem com que Joel duvide de sua competência no início, recusando-se a armá-la até que Ellie prove seu valor ao salvar sua vida ao atirar em um caçador. Somente 
                            após esse evento Joel passa a confiar nela o suficiente para ensiná-la a usar um rifle de caça.
                        </p> <br />
                        <p>Com o tempo, Ellie se torna cada vez mais proficiente em combate, demonstrando habilidade com diversas armas, incluindo pistola, rifle, arco e explosivos, além de seu característico canivete. Ela também demonstra saber montar a cavalo, evidenciando sua crescente autonomia e 
                            capacidade de sobrevivência.
                        </p> <br />
                        <p>Ellie é ocasionalmente uma personagem jogável, funcionando de maneira semelhante a Joel ao longo do jogo. Inicialmente, ela está armada com um arco, demonstrando boa precisão e eficiência com essa arma. Suas habilidades furtivas são comparáveis às de Joel, incluindo uma versão 
                            menos refinada do modo de escuta que ele utiliza. No entanto, em comparação a Joel, Ellie apresenta limitações significativas em combate corpo a corpo. Ela tem dificuldade para enfrentar homens adultos diretamente, sendo frequentemente obrigada a atordoá-los com tijolos ou 
                            garrafas para obter vantagem. Além disso, não possui força suficiente para agarrar inimigos humanos ou infectados.
                        </p> <br />
                        <p>Sua relativa inexperiência torna-a mais vulnerável quando está sozinha, sendo frequentemente surpreendida e atacada de surpresa. David chega a comentar que ela é &#8220;fácil de rastrear&#8221;, conseguindo inclusive estrangulá-la até a inconsciência, apesar de Ellie estar armada 
                            com seu canivete. Durante o confronto final entre os dois, Ellie demonstra grande dificuldade em derrotá-lo, quase sendo estrangulada até a morte, conseguindo vencê-lo apenas ao usar o próprio facão de David contra ele.
                        </p>
                    </div>

                    <div id={lstSummaryItems[5].id} data-link="anchor">
                        <ChapterHeading mainHeading="Behind the scenes" />

                        <ul className="behind-scenes-list">
                            <li>Em 2012, a Naughty Dog teve que lutar para conseguir que Ellie fosse a protagonista da capa do jogo, já que o estúdio foi pressionado a colocá-la em segundo plano. Ashley Johnson, atriz que realizou a captura de movimentos e dublagem de Ellie, comentou: &#8220;Sinto que eles não 
                                colocam mulheres nas capas porque têm medo de que o jogo não venda. É tudo o que os jogadores realmente, mas tenho a impressão, em geral, de que eles acham que os jogos não vendem tão bem com uma mulher na capa, em comparação com algum cara durão na frente&#8221;;
                            </li>
                            <li>Assim como Joel, Ellie não tinha sobrenome conhecido quando o primeiro jogo foi lançado, embora "Williams" tenha sido usado em documentos antigos e tenha aparecido no manual japonês do PlayStation 3, que listava seu nome completo como Ellie Williams &#40;エリー・ウィリアムズ&#41;. 
                                Em 2021, o diretor criativo Neil Druckmann mencionou que seu sobrenome era uma homenagem aos desenvolvedores de jogos Ken e Roberta Williams;</li>
                            <li>A chave para o papel de Ellie reside no curso cíclico que o jogo segue, notadamente nas ações de Joel para salvá-la no final, apesar de inicialmente não querer ter nada a ver com ela no ato de abertura. O final é, portanto, o começo invertido, com temas-chave refletidos na semelhança 
                                de Ellie com a filha de Joel, Sarah. No prólogo, Joel e Sarah começam em casa e, em seguida, usam o carro para escapar dos infectados, que acaba batendo, forçando Joel a carregar Sarah, que é baleada por um soldado da FEDRA. Sarah então morre nos braços de Joel. Perto do final do jogo, 
                                uma Ellie inconsciente (lembrando Sarah morrendo) é carregada por Joel para fora do hospital, longe dos humanos, e para dentro de um carro. A dupla então dirige &#8220;para casa &#8221;, representada pelo assentamento de Tommy;
                            </li>
                            <li>Ellie tem um easter egg como um robô no jogo Astro Bot de Playstation 5, intitulada &#8220;Sobrevivente Imune&#8220;. Sua descrição diz: &#8220;Aspira a ser astronauta&#8221;.</li>
                        </ul>

                    </div>

                    <div id={lstSummaryItems[6].id} data-link="anchor">
                        <ChapterHeading mainHeading="Galeria" />
                        <CharactersGallery lstImages={lstImagesGallery} />                        
                    </div>
                </main>

                <RelatedCharacters character={ellie} />        
            </div>

            <Footer />
        </>
    )
}

export default Ellie;