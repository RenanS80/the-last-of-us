import Header from 'components/Header';
import CharacterTableInfo from 'components/CharacterTableInfo';
import CharacterSummary from 'components/CharacterSummary';
import RelatedCharacters from 'components/RelatedCharacters';
import ChapterHeading from 'components/ChapterHeading';
import CharactersGallery from 'components/CharactersGallery';
import Footer from 'components/Footer';

import { riley } from 'data/relatedCharacters/riley';

import QuotationMark from '../../../assets/images/characters/quotation-mark.svg';
import ImgInfoBio from '../../../assets/images/characters/riley/riley-info-bio.jpg';
import Img1 from '../../../assets/images/characters/riley/img1.jpg';
import Img2 from '../../../assets/images/characters/riley/img2.jpg';
import Img3 from '../../../assets/images/characters/riley/img3.jpg';
import Img4 from '../../../assets/images/characters/riley/img4.jpg';
import Img5 from '../../../assets/images/characters/riley/img5.png';


function Riley() {

    const lstSummaryItems = [
        {
            main: 'Biografia',
            nested: [
                {name: 'Contexto e início da vida', id: 'biography'}
            ],
            id: 'biography'
        },
        {
            main: 'Eventos de American Dreams',
            nested: [
                {name: 'Conhecendo Ellie', id: 'meeting-ellie'},
                {name: 'Saindo da zona de quarentena', id: 'leaving-quarantine'},
                {name: 'Encontro com os Vaga-lumes', id: 'meeting-fireflies'},
            ],
            id: 'meeting-ellie'
        },
        {
            main: 'Eventos de Left Behind',
            nested: [
                {name: 'Tornando-se uma Vaga-lume', id: 'becoming-firefly'},
                {name: 'O reencontro com Ellie', id: 'reunion-with-ellie'},
                {name: 'Diversão e jogos', id: 'fun-and-play'},
                {name: 'A fuga', id: 'escape'}
            ],
            id: 'becoming-firefly'
        },
        {
            main: 'Personalidade e traços',
            id: 'personality'
        },
        {
            main: 'Galeria',
            id: 'gallery'
        }
    ];

    const lstTableInfoBio = [
        {
            "Data de Nascimento": "2017"
        },
        {
            "Idade": "16 anos"
        },
        {
            "Status": "Morto"
        },
        {
            "Gênero": "Feminino"
        },
        {
            "Afiliações": "FEDRA (anteriormente), Vaga-lumes"
        },
        {
            "Residência": "Boston, Massachusetts"
        },
        {
            "Cor do cabelo": "Preto"
        },
        {
            "Cor dos olhos": "Castanho claro"
        }
    ];

    const lstTableInfoBehindScenes = [
        {
            "Captura de movimentos": "Rei Yaani"
        },
        {
            "Dublador (US)": "Rei Yaani"
        },
        {
            "Dublador (BR)": "Marisa Rotenberg"
        }
    ];

    const lstImagesGallery = [Img1, Img2, Img3, Img4, Img5];

    return(
        <>
            <Header />

            <div className="container container--character">
                <main className="character__biography">
                    <div>
                        <h1>Riley Abel</h1>
                        <hr className="divider" />
                    </div>
                    <div className="character__citation">
                        <img src={QuotationMark} alt="Aspas" />
                        <blockquote>Só vamos esperar. A gente pode poeticamente acabar elouquecendo juntas.</blockquote>
                        <img src={QuotationMark} alt="Aspas" />
                    </div>
                    
                    <div className="character__intro">
                        <div className="character__resume">
                            <p>Riley Abel é a deuteragonista de <strong>The Last of Us: American Dreams</strong> e <strong>The Last of Us: Left Behind</strong> e amiga de infância de Ellie.</p> <br/>
                            <p>Riley era uma sobrevivente de dezesseis anos que morava em Boston. Ela não gostava dos militares e frequentemente defendia os Vaga-lumes, apoiando suas ações supostamente radicais. Durante seu tempo em Boston, 
                                Riley fez amizade com Ellie, e as duas rapidamente se tornaram melhores amigas.
                            </p>
                            
                            <CharacterSummary lstItems={lstSummaryItems} />
                        </div>

                        <CharacterTableInfo infoBio={lstTableInfoBio} infoBehindScenes={lstTableInfoBehindScenes} photo={ImgInfoBio} name="Riley" />
                    </div>

                    <div id={lstSummaryItems[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Biografia" secondaryHeading="Contexto e início da vida" />

                        <p>Riley nasceu por volta de 2016. Quando ainda era pequena, seu pai foi infectado pelo Cordyceps e matou sua mãe, dilacerando-a. Riley foi forçada a matá-lo para salvar a própria vida.</p> <br />
                        <p>Algum tempo depois, ela foi enviada para uma escola militar junto com outras crianças que viviam na zona de quarentena de Boston, onde receberia proteção. Embora tenha se adaptado à rotina da instituição e feito amigos, 
                            Riley se opunha ao regime autoritário e à ausência de um governo democrático, passando a apoiar os Vaga-lumes.
                        </p> <br />
                        <p>Perto de completar quinze anos, Riley teve que escolher entre se alistar no exército ou ser liberada para viver por conta própria entre a população em geral. Ela optou pelo alistamento e, durante três anos, dividiu um 
                            quarto com outra garota chamada Liz. Riley, no entanto, estava determinada a encontrar uma saída para aquela situação, pois não queria continuar submetida ao regime militar.
                        </p> <br />
                        <p>De acordo com Ellie, em um ponto de sua vida, ela dirigiu um carro, e usou um rifle BB para atirar em ratos.
                        </p>
                    </div>

                    <div id={lstSummaryItems[1]?.nested?.[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Eventos de American Dreams" secondaryHeading="Conhecendo Ellie" />

                        <p>No início da estadia de Ellie na zona de quarentena, Riley protegeu a recém-chegada de um grupo de valentões que tentava espancá-la. Agarrando o agressor pelo pulso, ela o jogou no chão e ameaçou &#8220;pisar nos testículos dele&#8221;. 
                            A ameaça foi suficiente para fazê-lo fugir com o restante do grupo.
                        </p> <br />
                        <p>Divertida com a situação, Riley perguntou o que eles queriam com Ellie, que respondeu, sugerindo que provavelmente tentavam roubar alguma coisa dela. Ao observar com curiosidade o Walkman da Sony, Riley aconselhou Ellie a ficar atenta 
                            e fazer amigos rapidamente. Ellie rejeitou imediatamente o conselho, incomodada com a ideia de precisar de ajuda.
                        </p> <br />
                        <p>Ela pergunta a Ellie o que eles queriam dela, e Ellie dá a entender que pretendiam roubar seus pertences. Ela dispensa a menina quando esta tenta dar conselhos sobre como se virar na zona de 
                            quarentena, perguntando se parecia ou não precisar de ajuda. A garota observa que Ellie tem problemas de confiança e a chama de &#8220;garota nova&#8221;. Segundos depois, aconselha Ellie a fugir antes 
                            de sair rapidamente. Ellie fica confusa com o que ela quis dizer e acaba sendo pega por uma das figuras de autoridade encarregadas da escola.
                        </p> <br />
                        <p>Riley percebeu que Ellie tinha &#8220;sérios problemas de confiança&#8221; e, logo em seguida, avistou uma figura de autoridade da zona de quarentena. Antes de ir embora, mandou Ellie correr e esbarrou nela enquanto fugia. 
                            Durante a fuga, Riley furtou discretamente o Walkman de Ellie.
                        </p> <br />
                        <p>No refeitório, Riley e seus amigos discutiam as ações dos Vaga-Lumes, que haviam levado à destruição de um jipe e à morte de uma pessoa que estava sendo examinada para verificar se estava infectada. Riley acreditava que os Vaga-Lumes 
                            haviam sido encurralados ou obrigados a tomar medidas tão drásticas. Um de seus amigos a alertou para ter cuidado com o que dizia em público sobre os Vaga-Lumes. Riley, por sua vez, sugeriu que ele não acreditasse em tudo o que lhe diziam, 
                            pois a situação certamente era mais complexa do que aparentava.
                        </p> <br />
                        <p>Ellie confrontou Riley no refeitório e exigiu que ela devolvesse seu Walkman. Riley negou saber do que Ellie estava falando. Ellie continuou insistindo até que ela finalmente lhe devolveu o aparelho, criticando seu gosto musical.
                        </p> <br />
                        <p>Mais tarde naquela noite, Riley se esgueirou pela escola com a intenção de sair da zona de quarentena. Ellie conseguiu se aproximar sem ser notada e surpreendeu Riley quando ela estava prestes a deixar o prédio. Envergonhada, Riley ordenou 
                            que Ellie voltasse para o quarto, mas ela se recusou e exigiu que lhe mostrasse como sair da zona de quarentena.
                        </p> <br />
                        <p>Riley hesitou antes de finalmente ceder e permitir que Ellie a acompanhasse. Ela a cumprimentou pelo nome e avisou que não queria se arrepender da decisão. As duas conseguiram atravessar o pátio sem serem detectadas pelos guardas que 
                            faziam a ronda e pularam a cerca.
                        </p> <br />
                        <p>Ellie perguntou como Riley sabia seu nome. Riley respondeu de maneira vaga, com um sorriso, antes de finalmente se apresentar.
                        </p>
                    </div>

                    <div id={lstSummaryItems[1]?.nested?.[1].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Saindo da zona de quarentena" />
                        
                        <p>Do lado de fora da escola, Riley guiou Ellie pelos telhados da cidade, evitando os soldados que patrulhavam as ruas abaixo. Ao parar na beirada de um prédio, perguntou a Ellie se ela já havia pensado no futuro. Ellie não deu muita importância à pergunta, 
                            acreditando que fosse apenas retórica. Riley, então, insistiu no assunto e perguntou novamente o que Ellie queria fazer da vida.</p> <br />
                        <p>Ellie argumentou que não fazia sentido pensar no futuro diante das circunstâncias em que viviam. Riley, porém, afirmou que essa era exatamente a maneira como as autoridades da zona de quarentena queriam que as pessoas pensassem. Ela explicou que não pretendia 
                            passar o resto da vida recebendo ordens como soldado. Faltavam apenas três meses para seu aniversário de dezesseis anos, e Riley estava determinada a descobrir por conta própria o que queria fazer da vida. Ellie, no entanto, continuava confusa e insistia em 
                            perguntar o que mais suas vidas poderiam ser. </p> <br />
                        <p>Riley ignorou a pergunta de Ellie e, em vez disso, perguntou se ela já havia andado a cavalo. Quando Ellie respondeu que não, Riley a levou até um shopping abandonado. As duas caminharam pelo local até que Ellie avistou um fliperama do outro lado da rua.</p> <br />
                        <p>Riley a acompanhou e observou Ellie fingir que jogava &#8220;Triple Phoenix&#8221;. Riley considerou o jogo infantil e o substituiu por seu favorito, &#8220;The Turning&#8221;, um jogo de luta brutal. No entanto, ficou desanimada quando Ellie comentou sobre a sorte das 
                            crianças que haviam frequentado o local antes delas. Acreditando que estavam perdendo tempo no fliperama, Riley decidiu ir embora.
                        </p> <br />
                        <p>As duas chegaram a um acampamento onde morava Winston Asher, amigo de Riley. O homem ficou incomodado por Riley ter levado mais uma de suas amigas para visitá-lo, mas ela o tranquilizou, garantindo que Ellie era de confiança. Quando Winston pediu algo em troca, Riley 
                            tirou do bolso do casaco uma garrafa de uísque que havia roubado da escola. Em troca da bebida, pediu que ele ensinasse Ellie a andar a cavalo.
                        </p> <br />
                        <p>Riley levou Ellie até os estábulos e lhe deu algumas orientações sobre como se comportar perto dos cavalos. Enquanto preparava o animal para o passeio, Ellie perguntou se Riley estava fazendo aquilo de propósito para ser expulsa da escola. Riley explicou que não queria 
                            ficar presa à população em geral, onde seria tratada pior e receberia menos comida. Seu objetivo era se libertar de todo aquele sistema. Quando Winston finalmente levou Ellie para passear a cavalo, Riley aproveitou a ausência dos dois para procurar o walkie-talkie 
                            dele na barraca. Ela conseguiu encontrá-lo enquanto eles estavam fora. Quando os dois retornaram, Riley fingiu não saber de nada, sentando-se no chão para ler uma revista.
                        </p> <br />
                        <p>Enquanto Winston se preparava para levar o cavalo de volta ao estábulo, aconselhou Riley a ir para casa e evitar problemas. Ela riu do conselho, dizendo que só se meteria em encrenca se fosse pega. A conversa foi interrompida por uma explosão do lado de fora do shopping. 
                            Winston montou no cavalo e ordenou que Riley voltasse para a escola antes de partir para encontrar sua unidade. Riley ignorou a ordem e passou a ouvir as comunicações pelo walkie-talkie de Winston. Ellie percebeu que havia sido usada para distrair o homem e ficou furiosa 
                            com Riley. No entanto, um relato sobre um avistamento dos Vaga-Lumes interrompeu sua explosão de raiva.
                        </p> <br />
                        <p>Animada ao descobrir que o ataque havia acontecido antes do esperado, Riley decidiu deixar a zona de quarentena para sempre. Seu plano era encontrar os Vaga-Lumes e conhecer o grupo pessoalmente. Quando Ellie se opôs à ideia, Riley decidiu deixá-la para trás.</p>
                    </div>

                    <div id={lstSummaryItems[1]?.nested?.[2].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Encontro com os Vaga-lumes" />

                        <p>Usando o walkie-talkie de Winston, Riley acompanhou o desenrolar do confronto entre os militares e os Vaga-Lumes pelas ruas abandonadas. Ela disse a Ellie que não adiantava tentar convencê-la de que ir diretamente para a batalha era uma má ideia. Seguindo pelos telhados, 
                            Riley e Ellie acompanharam a fumaça e os sons dos disparos até encontrarem McMillan e Jordan. Ao perceber que os Vaga-Lumes estavam encurralados, Riley tirou duas bombas de fumaça do bolso da jaqueta e ofereceu uma a Ellie. Hesitante, Ellie alertou Riley de que o que 
                            estavam prestes a fazer poderia ferir alguém.
                        </p> <br />
                        <p>Riley garantiu que nenhum dos soldados seria ferido e explicou que sua intenção era dar aos Vaga-Lumes uma oportunidade de escapar. Ela disse que aquela era a chance de ambas mudarem o próprio destino e enfrentarem os militares. Em seguida, perguntou se Ellie estava disposta 
                            a continuar sendo controlada por eles ou se tinha coragem suficiente para lutar por algo mais. Frustrada, Ellie destravou a bomba de fumaça e a lançou na rua. A explosão da granada e a fuga dos Vaga-Lumes deixaram Riley eufórica, levando-a a comemorar em voz alta do alto do telhado.
                        </p> <br />
                        <p>O grito de Riley alertou os militares sobre a presença das duas, obrigando-as a fugir enquanto eram alvejadas. Ao descerem dos telhados, Riley e Ellie se refugiaram em um beco, escondendo-se atrás de uma caçamba de lixo. Quando Ellie zombou da garantia de Riley de que estavam seguras, 
                            ela rapidamente a lembrou de que ainda estavam vivas.
                        </p> <br />
                        <p>Enquanto descansavam, Ellie perguntou onde Riley havia conseguido as bombas de fumaça. Riley revelou que as havia roubado de Winston e comentou que aquele roubo provavelmente significava o fim de sua &#8220;incrível amizade&#8221; com ele. Nesse momento, Ellie notou alguém parado na entrada de um prédio, 
                            cujas paredes estavam sinalizadas com fitas amarelas de quarentena. Riley percebeu que a garota que se aproximava estava infectada e mandou Ellie correr. No entanto, a infectada atacou Riley e a imobilizou. Riley pegou uma pedra próxima e golpeou o rosto da criatura, mas foi mordida no braço 
                            durante o confronto. Ellie atacou a infectada por trás com um pedaço de pau, mas ela reagiu e derrubou Ellie. Esta conseguiu se defender tempo suficiente para que Riley a atingisse no pescoço com a ponta quebrada do pedaço de pau.
                        </p> <br />
                        <p>Em pânico, Riley percebeu que havia sido mordida e tentou impedir Ellie de examinar seu braço. Ellie segurou seu braço e puxou a manga, revelando que não havia marcas de mordida nem perfurações. Riley tentou disfarçar o medo com bravatas, mas acabou admitindo que havia ficado assustada quando 
                            Ellie a abraçou. O momento de alívio foi interrompido pelo aparecimento de mais dois infectados, que começaram a persegui-las. Riley e Ellie correram até ficarem encurraladas em um beco sem saída. Pouco antes de serem alcançadas, um Vaga-Lume apareceu e matou os infectados a tiros.
                        </p> <br />
                        <p>Aliviada, Riley agradeceu aos Vaga-Lumes e começou a se apresentar, mas foi interrompida quando um deles a atingiu com um bastão de choque. Ela caiu inconsciente no chão e foi levada por ordem de Marlene, que reconheceu Ellie.</p>
                    </div>

                    <div id={lstSummaryItems[2]?.nested?.[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Eventos de Left Behind" secondaryHeading="Tornando-se uma Vaga-lume" />
   
                        <p>Apesar da rejeição que sofreu após conhecer Marlene, Riley continuava determinada a se tornar uma Vaga-Lume. Depois de se afastar de Ellie, encontrou Trevor, o Vaga-Lume que havia sido mordido por Ellie durante o confronto com os contrabandistas. Acreditando que não havia sido notada, 
                            Riley o seguiu até que ele entrou em um beco. No local, Riley foi surpreendida por vários outros Vaga-Lumes e levada diretamente ao esconderijo do grupo. Lá, ficou frente a frente com Marlene, que simplesmente perguntou: &#8220;O que te atrasou tanto?&#8221;. Marlene revelou que o encontro anterior havia sido 
                            um teste para avaliar o comprometimento de Riley com a causa dos Vaga-Lumes.</p> <br />
                        <p>Como parte de sua cerimônia de iniciação, Riley recebeu a ordem de matar uma pessoa infectada. Ela cumpriu a tarefa e recebeu seu pingente, que a identificava como <strong>Vaga-Lume nº 000129.4</strong>. Em seguida, Riley perguntou se Ellie também poderia se juntar ao grupo. Marlene, porém, recusou o pedido e, pouco depois, proibiu Riley de voltar a encontrar Ellie.</p>
                    </div>

                    <div id={lstSummaryItems[2]?.nested?.[1].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="O reencontro com Ellie" />

                        <p>Riley permaneceu sozinha por seis semanas, sem fazer contato com Ellie. Três semanas antes dos acontecimentos que levariam ao encontro com Joel, Riley decidiu voltar para visitar a amiga. Ao entrar no quarto, fingiu ser uma infectada e surpreendeu Ellie, que estava dormindo. Ellie a derrubou da cama e quase a esfaqueou, mas hesitou. Riley zombou de sua reação e perguntou 
                            se ela queria saber o que havia feito. Em vez de responder, Ellie disse que pensava que Riley estivesse morta. Compreendendo a frustração de Ellie com seu desaparecimento, Riley revelou que havia se tornado uma Vaga-Lume e se ofereceu para explicar tudo.
                        </p> <br />
                        <p>Ao saírem da escola, as duas encontraram uma patrulha e se abrigaram em um prédio abandonado. Enquanto guiava Ellie pelo local, Riley explicou como havia se tornado uma Vaga-Lume, contando que seguiu um dos homens que haviam encontrado anteriormente, quando procuravam por Marlene. Enquanto subiam pelo prédio, Riley perguntou sobre a vida social de Ellie e se ela costumava 
                            sair com os outros alunos da escola, principalmente com Tino e os demais amigos de Riley, já que sabia que Ellie conversava com eles. Ellie respondeu que não socializava com muitas pessoas e que nunca havia se esforçado para se aproximar dos amigos de Riley.
                        </p> <br />
                        <p>Enquanto se preparavam para deixar o prédio em ruínas, Riley reagiu com irritação a uma transmissão de rádio que afirmava que a Zona de Quarentena havia permanecido livre da infecção por trinta dias. Ela contou a Ellie que os infectados continuavam aparecendo na zona com mais frequência do que os militares admitiam e que as autoridades estavam mentindo para a população. 
                            Riley quase revelou que uma das condições para se tornar uma Vaga-Lume era matar um infectado, mas mudou de assunto antes de concluir a explicação.
                        </p> <br />
                        <p>Em seguida, Riley pediu a Ellie que se escondesse ao avistar outra patrulha se aproximando. As duas observaram os caminhões passarem à distância. Ellie sugeriu que também poderia se tornar uma Vaga-Lume. Riley explicou que Marlene queria manter Ellie segura dentro da escola, pois temia que Riley a colocasse em apuros. Por fim, elas chegaram ao shopping para onde Riley 
                            havia levado Ellie quando se conheceram. Riley tentou fazê-la se lembrar daquele dia, mas Ellie exigiu saber por que havia sido levada até ali. Riley apenas revelou que tinha uma surpresa para a amiga e se recusou a dar uma resposta concreta.  
                        </p> <br />
                        <p>Ao descerem uma escada rolante, chegaram ao acampamento de Winston. Riley lamentou a perda do amigo e perguntou como ele havia morrido. Quando Ellie revelou que Winston havia sofrido um ataque cardíaco, Riley se perguntou quantos sobreviventes ainda teriam a oportunidade de morrer por causas naturais depois do surto. Enquanto procurava na barraca de Winston, 
                            Riley encontrou uma garrafa de bebida alcoólica e ofereceu um gole a Ellie. Depois de beber em memória do amigo, deixou a garrafa no local.
                        </p> <br />
                        <p>Ao chegarem ao outro lado do shopping, Riley e Ellie tentaram erguer um carro para alcançar a passagem do outro lado. No entanto, a viga de sustentação cedeu, bloqueando o caminho. Riley sugeriu que procurassem outra maneira de chegar ao destino. Ellie avistou uma janela aberta acima de uma porta e se ofereceu para ajudar Riley a passar por ela e destrancar a porta. Riley 
                            seguiu o plano e escalou até a janela. Depois de destrancar a porta, surpreendeu Ellie com uma máscara de palhaço. Ao perceber a coleção de decorações de Halloween no interior da loja, Riley encontrou uma máscara de lobisomem e pediu que Ellie a colocasse. Ellie entrou na brincadeira e fingiu, sem muita convicção, ser um lobisomem. Enquanto exploravam o restante da loja, 
                            Riley encontrou uma máscara de Frankenstein e se escondeu dentro de um caixão, tentando assustar Ellie mais uma vez. As duas continuaram brincando por algum tempo antes de deixarem o local.
                        </p> <br />
                        <p>As duas seguiram em frente, em direção aos fundos do shopping. Ellie perguntou novamente por que estavam ali, e Riley revelou que os militares haviam mentido sobre o funcionamento do sistema de energia da cidade. Segundo ela, toda a cidade ainda tinha eletricidade; os militares apenas haviam desligado os disjuntores.
                        </p> <br />
                        <p>Depois de abrir uma caixa de junção, Riley pediu a Ellie que restaurasse a energia de todo o shopping. Animadas com a possibilidade de ver o local novamente iluminado, as duas correram pelo corredor em direção à saída. No entanto, Ellie hesitou e disse a Riley que estava ciente de suas tentativas de reconquistar sua confiança. Riley se desculpou pelas coisas que havia dito 
                            antes de Ellie partir, explicando que não queria dizer nada daquilo. Por fim, as duas atravessaram as portas duplas e se maravilharam com a visão do carrossel iluminado.
                        </p>
                    </div>
                        
                    <div id={lstSummaryItems[2]?.nested?.[2].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Diversão e jogos" />

                        <p>Quando Ellie perguntou se os militares perceberiam as luzes do shopping, Riley garantiu que as luzes externas não funcionavam. Ellie subiu em um dos cavalinhos enquanto Riley ligava o carrossel. Riley observou a amiga dar uma volta por alguns instantes antes de atender ao pedido dela para se juntar ao passeio. No entanto, assim que subiu no carrossel, a energia acabou.
                            Sentada ao lado de Ellie, Riley revelou que havia encontrado outro livro de trocadilhos. Ellie brincou que Riley poderia voltar a ser sua pessoa favorita, ao que a amiga respondeu: &#8220;Eu conheço a minha garota&#8221;.
                        </p> <br />
                        <p>Depois de saírem do carrossel, Ellie e Riley trocaram piadas enquanto passeavam pelo shopping. Ao encontrarem uma cabine de fotos, decidiram tirar várias fotos juntas. Em seguida, a máquina solicitou que compartilhassem as imagens no Facebook. Embora não entendessem muito bem o que isso significava, as duas digitaram números aleatórios nos campos de senha e nome de usuário. 
                            Como a tentativa de conexão com a rede social falhou, tentaram imprimir as fotos. No entanto, várias mensagens de &#8220;tentar novamente&#8221; apareceram na tela, e nenhuma tentativa foi bem-sucedida. Frustrada, Riley bateu na tela da cabine até que a máquina desligou.
                        </p> <br />
                        <p>As duas decidiram continuar explorando o shopping quando outro anúncio pelos alto-falantes as alertou sobre o início do turno das 6h. Riley e Ellie zombaram da mulher responsável pelo anúncio, elas subiram a escada rolante até o Raja's Arcade, uma loja de jogos, e descobriram que o jogo favorito de Riley, &#8220;The Turning&#8221;, estava quebrado. Em vez de desistirem da brincadeira, 
                            Riley ajudou Ellie a imaginar como seria jogar, pedindo que ela fechasse os olhos enquanto descrevia o cenário.
                        </p> <br />
                        <p>Mais tarde, Riley ouviu música vindo de uma porta próxima e foi abri-la, insistindo para que continuassem a exploração. Ellie, a contragosto, disse à amiga que não havia chance de deixá-la estragar tudo na escola novamente e sugeriu que retomassem o passeio em outra ocasião. Riley revelou que isso não seria possível, pois os Vaga-lumes a haviam designado para se juntar a outro grupo em 
                            uma cidade diferente. Como Ellie não reagiu da maneira que Riley esperava, ela saiu para investigar de onde vinha a música.
                        </p> <br />
                        <p>Do outro lado do shopping, Riley encontrou uma loja de departamentos. Ellie foi atrás dela, e as duas conversaram sobre o que Riley havia dito antes de sair. Riley admitiu que a culpa não havia sido o verdadeiro motivo de ter voltado para ver Ellie, apesar do que dissera anteriormente. Em seguida, jogou a mochila no chão e revelou que havia recuperado as pistolas de água, contando que quase 
                            fora atingida por um tiro durante a tentativa de roubá-las. Ellie reconheceu os esforços da amiga ao aceitar participar de uma partida de pega-pega com água. Depois da primeira rodada, as duas prolongaram a brincadeira. Por fim, Ellie aceitou que Riley precisava partir.
                        </p> <br />
                        <p>Riley garantiu a Ellie que ficaria bem e que elas se veriam novamente. Depois de se reconciliarem, Riley perguntou se Ellie ainda estava com seu Walkman. Ellie confirmou, e Riley decidiu conectá-lo a um dos rádios da loja. Riley subiu na superfície danificada de um balcão, e as duas começaram a dançar ao som da música.  Em determinado momento, Ellie parou de dançar. Riley tentou convencê-la 
                            a continuar, mas Ellie resistiu e, de repente, pediu que a amiga não fosse embora. Riley olhou para o pingente dos Vaga-lumes em seu pescoço, rompeu a corrente e deixou o objeto cair no chão. Então, Ellie beijou Riley, mas se desculpou quase imediatamente. Riley respondeu que ela não tinha nada pelo que se desculpar.
                        </p>                       
                    </div>

                    <div id={lstSummaryItems[2]?.nested?.[3].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="A fuga" />

                        <p>Enquanto tentavam decidir o que fazer, as duas foram surpreendidas pelo aparecimento repentino de vários corredores. Riley disparou sua arma, e ambas correram em busca de abrigo. Depois de bloquear a porta pela qual haviam escapado, Riley guiou Ellie pelos fundos do shopping até um local seguro. Ao bloquearem outra porta, Riley ajudou Ellie a erguer o portão e decidiu segurá-lo enquanto 
                            a amiga procurava algo para mantê-lo aberto. Assim que encontrou um objeto adequado, Ellie o posicionou, permitindo que Riley passasse por baixo do portão enquanto um corredor a atacava. Riley conseguiu matá-lo com dois tiros na cabeça.
                        </p> <br />
                        <p>Em seguida, as duas correram pela área das docas, que estava infestada de infectados. Elas se abaixaram atrás de uma barreira danificada, mas Riley se adiantou e foi imediatamente surpreendida por um corredor que surgiu pela lateral. Ellie pulou nas costas do infectado e o esfaqueou até matá-lo. Impressionada com a reação da amiga, Riley a guiou para uma área mais interna do shopping, em 
                            direção a um andaime que poderia servir como rota de fuga. No entanto, o caminho estava bloqueado por outros infectados. As duas então escolheram uma rota alternativa e saíram da sala por uma janela aberta.
                        </p> <br />
                        <p>Enquanto atravessavam o andaime, elas estavam prestes a escapar quando a prateleira que Ellie havia usado para alcançar uma posição segura tombou, fazendo-a cair da borda. Riley saltou para ajudá-la e impediu que os infectados a alcançassem. No entanto, um corredor que avançava em sua direção a derrubou. Ellie reagiu rapidamente, esfaqueando-o e cortando sua garganta. Depois que todos os 
                            corredores foram mortos, Ellie acreditou que o pior havia passado. Porém, Riley percebeu uma mordida no braço da amiga. Ao descobrir o ferimento, Ellie também viu que Riley tinha uma mordida na palma da mão esquerda.
                        </p> <br />
                        <p>Por fim, Riley sucumbiu à infecção do cordyceps e morreu. Ellie, no entanto, sobreviveu, descobrindo que era de alguma forma imune à infecção. Mais tarde, ela conseguiu chegar até Marlene. Ellie também pegou o pingente de Riley para guardá-lo como lembrança da amiga. A morte de Riley foi uma das muitas perdas que contribuíram para a culpa de sobrevivente de Ellie e para seu senso 
                            de responsabilidade em relação à criação de uma cura, devido à sua imunidade.
                        </p>
                    </div>
                  
                    <div id={lstSummaryItems[3].id} data-link="anchor">
                        <ChapterHeading mainHeading="Personalidade e traços" />

                        <p>Como a maioria das crianças nascidas após o surto, Riley precisou aprender a ser autossuficiente após a morte de sua família. Embora recebesse cuidados na escola militar da Zona de Quarentena, ela era frequentemente deixada por conta própria e costumava quebrar as regras, mesmo ciente das consequências que enfrentaria caso tentasse deixar a zona.
                        </p> <br />
                        <p>Riley tinha o hábito de defender indivíduos mais fracos ou vulneráveis, sem esperar qualquer recompensa por isso. No entanto, assim como muitos naquele mundo, também pegava ou roubava pertences de outras pessoas sem se importar com as circunstâncias delas e negava seus atos quando era descoberta.
                        </p> <br />
                        <p>Ela parecia compreender a natureza moralmente ambígua de seu ambiente e costumava defender os Vaga-Lumes quando acreditava que estavam sendo acusados sem que todos os aspectos da situação fossem considerados. Sua crença nos ideais do grupo a levou a desafiar a autoridade militar e a lutar para fazer parte de sua causa.
                        </p> <br />
                        <p>Quando conheceu Ellie, Riley foi inicialmente hostil, mas depois usou seu conhecimento do ambiente para ajudar a amiga a se orientar em seu novo lar. As duas desenvolveram uma amizade íntima após se aventurarem para fora da Zona de Quarentena, onde as circunstâncias as obrigaram a depender uma da outra para sobreviver. A amizade e o afeto que surgiu posteriormente entre elas evidenciam o impacto 
                            que tiveram uma sobre a outra, tanto como amigas quanto como possíveis amantes.
                        </p> <br />
                        <p>As conversas entre Ellie e Riley no shopping sugerem que a ausência de Riley na escola e o distanciamento entre as duas não eram motivados apenas pelo desejo de Riley de se juntar aos Vaga-Lumes, mas também pelos sentimentos cada vez mais fortes que ela nutria pela amiga. Apesar de sua dedicação à causa do grupo, o reconhecimento dos sentimentos que existiam entre as duas foi suficiente para que 
                            Riley estivesse disposta a abandoná-lo por Ellie. Mesmo diante da possibilidade de morrer em decorrência da infecção, Riley escolheu continuar lutando em vez de desistir, pois não queria abrir mão do tempo que ainda lhe restava ao lado de Ellie.
                        </p> <br />
                        <p>Antes de ser infectada, Riley apreciava música e videogames. Embora chamasse de "merda" as músicas antigas do Walkman de Ellie, ela demonstrava uma opinião diferente quando a amiga escolhia músicas de seu próprio gosto. Riley gostava de &#8220;The Turning&#8221;, um jogo de luta, e era fã de sua personagem jogável, Angel Knives, uma garota que socava o abdômen do oponente antes de chutar sua cabeça.
                        </p>
                    </div>

                    <div id={lstSummaryItems[4].id} data-link="anchor">
                        <ChapterHeading mainHeading="Galeria" />
                        <CharactersGallery lstImages={lstImagesGallery} />                        
                    </div>
                </main>

                <RelatedCharacters character={riley} />        
            </div>

            <Footer />
        </>
    )
}

export default Riley;