import Navbar from 'components/Navbar';
import CharacterTableInfo from 'components/CharacterTableInfo';
import CharacterSummary from 'components/CharacterSummary';
import RelatedCharacters from 'components/RelatedCharacters';
import ChapterHeading from 'components/ChapterHeading';
import CharactersGallery from 'components/CharactersGallery';
import Footer from 'components/Footer';

import { joel } from 'data/relatedCharacters/joel';

import QuotationMark from '../../../assets/images/characters/quotation-mark.svg';
import ImgInfoBio from '../../../assets/images/characters/joel/joel-info-bio.jpg';
import Img1 from '../../../assets/images/characters/joel/img1.png';
import Img2 from '../../../assets/images/characters/joel/img2.png';
import Img3 from '../../../assets/images/characters/joel/img3.png';
import Img4 from '../../../assets/images/characters/joel/img4.png';
import Img5 from '../../../assets/images/characters/joel/img5.png';

import './styles.css';

function Joel() {

    const summaryItems = [
        {
            main: 'Biografia',
            nested: ['Antecedentes e início da vida']
        },
        {
            main: 'Eventos de The Last of Us',
            nested: [
                'Perdendo Sarah', 'Sobrevivendo', 'Confrontando Robert', 'Contrabandeando Ellie', 
                'Encontrando Bill', 'Enfrentando caçadores em Pittsburgh', 'Conhecendo Henry e Sam',
                'Encontrando Tommy', 'A universidade', 'O inverno', 'Chegando em St. Mary', 'Salvando Ellie'
            ]
        }, 
        {
            main: 'Habilidades'
        },
        {
            main: 'Hobbies'
        },
        {
            main: 'Galeria'
        }
    ]

    const lstTableInfoBio = [
        {
            "Data de Nascimento": "26 de Setembro de 1981"
        },
        {
            "Idade": "52 anos"
        },
        {
            "Status": "Vivo"
        },
        {
            "Gênero": "Masculino"
        },
        {
            "Profissão": "Carpinteiro (antes do surto), Contrabandista"
        },
        {
            "Familiares": "Sarah (filha), Tess (parceira)"
        },
        {
            "Residência": "Texas (antes do surto), Jackson"
        },
        {
            "Cor do cabelo": "Preto"
        },
        {
            "Cor dos olhos": "Castanho"
        }
    ];

    const lstTableInfoBehindScenes = [
        {
            "Dublador (US)": "Troy Baker"
        },
        {
            "Dublador (BR)": "Luiz Carlos Persy"
        },
        {
            "Captura de movimentos": "Troy Baker"
        }
    ]

    const lstImagesGallery = [Img1, Img2, Img3, Img4, Img5];

    return(
        <>
            <Navbar />

            <div className="container container--character">
                <main className="character__biography">
                    <div>
                        <h1>Joel Miller</h1>
                        <hr className="divider" />
                    </div>
                    <div className="character__citation">
                        <img src={QuotationMark} alt="Aspas" />
                        <blockquote>Faça os tiros valerem a pena</blockquote>
                        <img src={QuotationMark} alt="Aspas" />
                    </div>
                    
                    <div className="character__intro">
                        <div className="character__resume">
                            <p>Joel Miller é um dos protagonistas de <strong>The Last of Us</strong> e personagem coadjuvante em <strong>The Last of Us: Left Behind</strong>.</p> <br/>
                            <p>Ele é um sobrevivente na América pós-apocalíptica que havia sido devastada pela infecção cerebral por Cordyceps em 2013. Depois de perder sua única filha Sarah 
                                nos estágios iniciais do surto, Joel tornou-se um contrabandista implacável, encarregado de contrabandear e proteger Ellie, uma jovem que era a chave para a sobrevivência 
                                da humanidade. Joel eventualmente formou um forte vínculo com ela.
                            </p>

                            <CharacterSummary lstItems={summaryItems} />

                        </div>
                        <CharacterTableInfo infoBio={lstTableInfoBio} infoBehindScenes={lstTableInfoBehindScenes} photo={ImgInfoBio} name="Joel" />
                    </div>

                    <div>
                        <ChapterHeading mainHeading="Biografia" secondaryHeading="Antecedentes e início da vida" />

                        <p>Joel nasceu em 26 de Setembro de 1981, em Arlington, Texas, e cresceu ao lado de seu irmão mais novo, Tommy.</p> <br />
                        <p>Quando criança, Joel desenvolveu uma paixão pela música, aprendendo a tocar violão e uma vez até aspirou a ser cantor. Joel teve uma filha chamada Sarah, e foi casado por um curto 
                            período de tempo. Sobrecarregado no início da vida com as responsabilidades da paternidade em uma idade jovem, ele nunca teve a oportunidade de frequentar a faculdade.
                        </p> <br />
                        <p>Pouco depois de Sarah nascer, a esposa de Joel o deixou. Como resultado, ele criou sua única filha como pai solteiro durante a maior parte de sua vida. Os dois viviam juntos em 
                            uma casa de dois andares em Austin, Texas.
                        </p> <br />
                        <p>Já adulto, Joel trabalhou como carpinteiro, ao lado de Tommy. Apesar de suas longas horas de trabalho duro, ele ainda conseguia passar um tempo com Sarah, como visto nas fotos exibidas 
                            em sua casa mostrando os dois em um cruzeiro, em um carnaval com Tommy e em uma das partidas de futebol de Sarah. Além disso, os dois costumavam fazer várias caminhadas juntos. Sarah 
                            também o fez levá-la a todos os museus do Texas.
                        </p> <br />
                        <p>Em seu aniversário de 32 anos - poucas horas antes do surto - Sarah deu lhe deu um novo relógio de presente para substituir o que ele havia quebrado meses antes. Isso se tornou uma 
                            lembrança querida que ele consegue manter nos anos turbulentos que virão.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading mainHeading="Eventos de The Last of Us" secondaryHeading="Perdendo Sarah" />

                        <p>Em 26 de setembro de 2013, Joel chegou tarde do trabalho e colocou Sarah na cama depois de assistirem televisão juntos. Na madrugada de 27 de setembro, Joel foi atacado por seu vizinho, 
                            Jimmy Cooper e forçado a matá-lo a tiros com seu revólver em legítima defesa. Depois de acalmar Sarah, Tommy chegou para fugirem em sua caminhonete.
                        </p> <br />
                        <p>À medida que dirigem em direção a rodovia, eles percebem o caos que a cidade se tornou, com pessoas fugindo desesperadas e atacando umas as outras. Ao chegar na ponte que dá acesso a outra
                            cidade, o trio encontrou a estrada bloqueada e precisou seguir por outro caminho. Ao encontrar um carro bloqueando na rua, Tommy o contorna para continuarem a fuga, mas um outro carro os 
                            acerta em cheio, fazendo com que a caminhonete em que estavam capotasse. Assim que acordou, Joel percebe que Sarah está com a perna machucada e impossibilitada de andar. Ele precisa 
                            carregar a sua filha no colo em meio ao caos instalado pelas ruas do Texas. Depois de serem perseguidos por infectados, Tommy ficou para trás para contê-los e para ajudar Joel e Sarah fugirem.
                        </p> <br />
                        <p>A dupla chegou à rodovia, mas encontrou um soldado que os abordou de forma agressiva e desconfiada. Ao falar pelo rádio com o comandante, para saber o que fazer naquela situação, o soldado 
                            recebeu ordens para matar os dois, que estavam “fora do perímetro”, então ele abriu fogo. Caindo no chão, o soldado moveu-se para executar Joel, mas Tommy chegou, dando-lhe um tiro na cabeça. 
                            No entanto, Sarah foi mortalmente atingida. Apesar dos esforços de Joel em salvar a filha, ela morreu em seus braços.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Sobrevivendo" />

                        <p>Pouco depois da morte de Sarah, Joel se viu em uma clínica de triagem após chegar à rodovia. Ele testemunhou como as famílias foram dilaceradas e quanto caos irrompeu no mundo.</p> <br />
                        <p>Com o passar dos anos, Joel e Tommy precisaram adotar um em um estilo de vida sombrio, para sobreviverem à loucura que o mundo se tornou. Joel torturou, enganou e matou inúmeras pessoas inocentes, 
                            tornando-se um caçador. 
                        </p> <br />
                        <p>Após chegar em Boston, Tommy finalmente se cansou da filosofia de Joel sobre como sobreviver, abandonando-o para se juntar a um crescente grupo de milícia conhecido como Vagalumes, após ser persuadido 
                            pela líder, Marlene. Os dois discutiram furiosamente sobre isso, Tommy terminando com "Eu nunca mais quero ver sua maldita cara!".
                        </p> <br />
                        <p>Joel passou um período sozinho até conhecer uma mulher chamada Tess. A dupla se aproximou, unindo-se para atuar como contrabandistas na zona de quarentena. Neste ramo, eles conheceram várias pessoas, 
                            como Robert, Bill e Donovan.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Confrontando Robert" />

                        <p>Vários anos se passam, e agora a infecção do Cordyceps já se alastrou por todo o mundo, dizimando grande parte da população mundial e desestabilizando completamente a sociedade. O governo criou zonas de quarentena 
                            onde impõem seus regimes rígidos e autoritários, causando grande descontentamento da população. Joel, agora com quase 50 anos, mora na zona de quarentena de Boston com Tess, realizando missões de contrabando
                            para fora da zona.</p> <br />
                        <p>Em um dia, Joel acorda com Tess batendo na porta, que havia saído para uma entrega. Ela diz que foi atacada por dois homens que haviam sido mandados por Robert, um outro contrabandista que devia um carregamento de 
                            arma aos dois, porém não havia entregue e mandou matarem Tess para se livrar da dívida. Joel concorda em ir atrás de Robert para acertar as contas. 
                        </p> <br />
                        <p>Eles saem da área monitorada por túneis subterrâneos para chegar à favela, onde fica o mercado negro da zona. Lá eles conseguem informações de Robert, que está no cais da cidade, porém no caminho são atacados por 
                            vários de seus capangas. Quando a dupla passa por eles e confronta Robert, já são recebidos a tiros pelo mesmo, que começa a fugir. 
                        </p> <br />
                        <p>Joel e Tess encurralam Robert e o forçam a falar onde estão as armas, e ele diz que vendeu aos Vagalumes, pois tinha dívidas com o grupo. Ele diz que eles podem invadir a base dos Vagalumes e roubar as armas, e que 
                            seria fácil, pois eles estão enfraquecidos. Tess zomba da ideia e mata Robert com dois tiros na cabeça.
                        </p><br />
                        <p>Nesse momento aparece Marlene, a líder dos Vagalumes, que estava ferida e fugindo dos militares. Ela diz a dupla que devolveria o dobro de armas, contanto que fizessem uma entrega para ela. A dupla aceita e eles seguem 
                            a Marlene até seu esconderijo, e descobrem que a entrega era uma garota chamada Ellie. 
                        </p> <br />
                        <p>Marlene explica para eles entregarem a menina no congresso da cidade, que fica fora da zona de quarentena e lá teriam outros Vagalumes que a receberiam, Joel recusa de primeira instância, mas Marlene o convence. Ellie 
                            pergunta como ela conhece o Joel e ela diz que era amiga de Tommy, seu irmão, e que o mesmo garantiu que poderia confiar em Joel caso tivesse problemas.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Contrabandeando Ellie" />

                        <p>Joel e Tess levam Ellie para um esconderijo, para seguirem seu destino durante a noite para minimizar a chance de serem capturados pelos soldados da FEDRA. Ao anoitecer, eles partem para os túneis e saem da área da zona, 
                            porém pouco depois são enquadrados por militares que patrulhavam a área.
                        </p> <br />
                        <p>Uma soldado comunica a outra patrulha no rádio para virem buscar 3 criminosos, enquanto outro soldado examina algum sinal de infecção no trio. Quando ele vai examinar Ellie, ela fura a perna do soldado com uma faca e Joel o 
                            domina, enquanto Tess mata o outro soldado e em seguida pega o teste de infecção e mostra a Joel, percebendo que Ellie estava infectada. 
                        </p> <br />
                        <p>Eles pensam que Marlene deve ter armado para eles e mandam Ellie se explicar. Ela arregaça a manga do braço e mostra uma marca de mordida, dizendo que foi há três semanas. Tess diz para Ellie parar de mentir, pois uma 
                            transformação acontece no máximo em 2 dias. Ellie jura que foi há três semanas, porém ainda assim Joel não acredita, e percebe que a patrulha que havia sido solicitada estava chegando, e eles precisavam correr.
                        </p> <br />
                        <p>No caminho para o congresso, eles precisam passar por um museu abandonado, com vários infectados em seu interior. Após entrar em conflito com os infectados, o trio consegue sair museu e logo depois conseguem chegar ao seu 
                            destino, mas se deparam com todos os vagalumes mortos. Tess fica desesperada procurando uma forma de continuar, mas Joel a confronta, perguntando o porquê de estar agindo assim. Tess diz que aquela era sua última parada, 
                            e revela que havia sido mordida. 
                        </p><br />
                        <p>Tess pergunta a Ellie onde era o laboratório dos vagalumes, porém ela diz que Marlene nunca revelou, só disse que era em algum lugar no oeste do país. Ela diz a Joel para levar a menina para o Tommy, pois ele provavelmente 
                            sabia onde os vagalumes estariam. Joel recusa imediatamente, porém Tess o convence a tratar esse pedido como uma dívida.
                        </p> <br />
                        <p>Logo em seguida, eles são surpreendidos por uma patrulha e Tess decide se sacrificar para dar mais tempo de Joel e Ellie fugirem. A dupla consegue sair em direção ao metrô próximo do congresso. Após encontrarem um pouco mais de 
                            tranquilidade, Joel diz a Ellie que ele tem um amigo em uma cidade próxima que pode conseguir um carro para eles chegarem ao Tommy, e partem para lá.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Encontrando Bill" />

                        <p>Ao chegarem à cidade, eles encontram Bill e seguem para um arsenal que o mesmo matinha no porão de uma igreja. No caminho, Bill pergunta a Joel o que estava fazendo ali, e ele responde que era apenas uma entrega. Quando Joel diz que 
                            iria entregar a garota, Bill não consegue conter as risadas. Ele também pergunta onde está Tess, mas Joel evita falar o que houve e diz que ela está apenas ocupada.
                        </p> <br />
                        <p>Bill diz que frequentemente caravanas militares passam pela cidade à procura de suprimentos. Certa vez uma caravana foi atacada por infectados e os militares abandonaram um caminhão perto de uma escola, porém era uma parte da cidade 
                            repleta de infectados. O plano de Bill era pegar a bateria que estava no caminhão e usá-la para consertar um carro.
                        </p> <br />
                        <p>Eles passam por vários infectados no caminho até chegar no caminhão, mas Bill, ao abrir o capô, vê que não havia nada. Eles então abortam o plano e tentam sair da escola que também estava infestada.</p> <br />
                        <p>Eles conseguem encontrar abrigo em uma casa. Enquanto Bill e Joel discutem, eles se deparam com um homem que se enforcou. Bill o reconhece e diz que era Frank, seu parceiro. Bill o tira da corda e percebe que ele havia mordidas. 
                            Enquanto isso, Ellie encontra um carro na garagem que parecia funcionar. Bill abre o capô e vê que a bateria do caminhão estava ali, e descobre que Frank havia roubado pra sair da cidade. 
                        </p><br />
                        <p>Eles então tentam dar partida no carro enquanto Ellie dirige, porém o barulho acaba atraindo infectados. O carro dá partida e eles fogem. Depois de um tempo Bill desce do carro e entrega uma mangueira para Joel, uma forma de conseguir 
                            gasolina. Joel consola Bill por seu amigo, e Bill o pergunta se agora eles estão quites. Ele então se despede de Bill e segue para encontrar Tommy.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Enfrentando caçadores em Pittsburgh" />

                        <p>Enquanto na estrada, eles se aproximam de Pittsburgh, que estava dominada por caçadores que emboscavam e matavam quem passava pela cidade. Enquanto atravessavam, um homem que aparentava estar machucado aparece no meio da estrada pedindo ajuda. 
                            Ellie pergunta se deveriam ajudá-lo, mas Joel sabia que se tratava de uma armadilha e acelera o carro, atropelando o homem. Eles conseguem se livrar da armadilha, porém Joel perde o controle do carro e o mesmo é destruído, fazendo Joel e Ellie 
                            ficarem a pé novamente e tendo que lidar com uma nova ameaça em uma cidade grande e perigosa.
                        </p> <br />
                        <p>Joel e Ellie conseguem derrotar os agressores e começam a seguir para a ponte que atravessa o rio de Pittsburgh para saírem da cidade. No caminho eles descobrem que o grupo de caçadores era grande e mantinham várias partes da cidade como base. 
                            Além disso, por terem derrotado os militares da zona de quarentena, tinham equipamentos militares de qualidade e em grande quantidade, incluindo um caminhão com uma torreta de alto calibre. Para causar medo em suas vítimas, os caçadores amarraram 
                            um cadáver na frente do veículo com uma placa com as escritas "Run".
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Conhecendo Henry e Sam" />

                        <p>Mais tarde, ao passar pelas perigosas ruas de Pittsburgh, a dupla dá de cara com o temido veículo e fogem para um prédio nos arredores, mas logo quando Joel entra, é surpreendido por um homem que o segura pelas costas. Ellie usa sua faca para golpeá-lo, 
                            dando uma abertura para Joel se desvencilhar e golpear o homem. Enquanto o fazia, um garoto mira sua arma para Joel, que levanta as mãos e se afasta. O homem se revela Henry e o garoto Sam. Henry diz que inicialmente achou que Joel era um caçador, 
                            porém viu que estava errado ao ver Ellie, pois os caçadores não abrigam crianças.
                        </p> <br />
                        <p>Henry diz que faz parte de um outro grupo de sobreviventes da cidade de HartFord e que foi enviado para a cidade para buscar suprimentos, porém os caçadores os emboscaram e os dispersaram. O grupo se encontraria numa torre de rádio na saída da cidade, 
                            e as duplas se unem com o objetivo de sair de Pittsburgh. 
                        </p> <br />
                        <p>Em um lugar seguro, Henry também explica seu plano de se alistar com os vagalumes, e Joel diz que também os procurava, tendo mais objetivos em comum. Ele mostra a Joel um portão que leva à ponte, e ressalta que durante a noite fica desprotegido. O plano 
                            era esperar anoitecer, passar pelo portão sem resistência, atravessar a ponte e sair da cidade.
                        </p> <br />
                        <p>A noite chega e eles colocam o plano em prática. Apesar de alguns poucos caçadores, Henry e Joel conseguem matá-los para abrir o portão. Porém, são surpreendidos novamente pelo veículo com a torreta. Ao subir em uma carreta e levantar Sam e Ellie, Henry 
                            vê que o caminhão está perto de derrubar o portão e decide deixá-los e fugir. Ellie fica indignada e desce para acompanhar Joel, que conseguem se salvar por um triz ao entrarem nos fundos de um Pub.
                        </p><br />
                        <p>Eles conseguem chegar na ponte e se deparam com ela quebrada. Ao ver o caminhão se aproximar atirando contra eles, Ellie pula no rio, forçando Joel a pular também. Joel bate a cabeça em uma pedra e perde a consciência. Ele acorda na margem horas depois e 
                            vê Henry e Sam novamente. Joel parte enfurecido pra cima de Henry, derrubando-o no chão e apontando uma arma para ele por tê-los deixado pra trás. Henry diz que fez isso para não arriscar a vida de Sam, e sabia que Joel e Ellie conseguiriam sobreviver. 
                            Joel abaixa a arma e Henry levanta, que diz logo depois que salvou eles da correnteza, e Ellie afirma logo depois que se não fosse Henry, eles teriam se afogado.
                        </p> <br />
                        <p>Os quatro partem rumo aos esgotos na tentativa de saírem da cidade. Mais adiante, encontram mais resistência de caçadores e entram em confronto também com infectados.</p> <br />
                        <p>Eles chegam na torre de rádio ao anoitecer e tem um momento calmo e descontraído, mas Henry perde as esperanças que alguém de seu grupo apareça. No outro dia, Ellie acorda e vai procurar por Sam, porém ele havia sido mordido no dia anterior e havia escondido 
                            de seu grupo. Ellie o encontra já transformado e sofre um ataque. Joel rapidamente alcança sua mochila para pegar sua arma, mas Henry atira perto de Joel e o ameaça, mas Joel ignora. Logo depois, o próprio Henry atira e mata Sam, entrando em completo estado 
                            de culpa. Joel tenta consolá-lo, mas Henry aponta a arma pra Joel alegando ser sua culpa, e comete suicídio logo depois.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Encontrando Tommy" />

                        <p>Meses se passam e agora Joel e Ellie estão no Wyoming, perto de encontrar Tommy. Eles caminham pela floresta até encontrarem uma placa escrito "Jackson County", onde Joel sabia que Tommy estaria. Eles alcançam uma usina hidrelétrica e Joel decide passar por dentro 
                            dela e tenta abrir o portão, até que uma mulher e outros guardas apontam suas armas para ele e mandam largar suas armas. Porém, um dos guardas reconhece Joel e manda os outros abaixarem suas armas. Esse guarda era Tommy, que abre o portão e dá um abraço em Joel.
                        </p> <br />
                        <p>Ele explica que aquela mulher era Maria, sua esposa, e que também comandava o lugar. Eles entram na usina e Tommy explica a Joel que eles montaram uma comunidade ali perto, e que eles estavam na usina para tentar restabelecer a energia. Tommy em um momento diz a Joel 
                            que voltou em sua casa no Texas e encontrou a foto dele com Sarah, no qual ele oferece a Joel, porém ele recusa e diz que tem algo importante para conversar com Tommy. 
                        </p> <br />
                        <p>Ele diz que a garota com quem eles estava era imune. Tommy não acredita, mas Joel diz que pode provar. Tommy então se convence e o pergunta porquê trouxe ela. Joel diz que deveria entregá-la aos Vagalumes, e fala para Tommy entregá-la por conhecê-los melhor e que poderia 
                            ficar com o pagamento &#40;as armas&#41;. Tommy diz que não vê um Vagalume a muito tempo, mas Joel supõe que ele sabe onde eles estão e diz que não está pedindo muito, apenas equipamentos para poder partir de novo. 
                        </p> <br />
                        <p>Quando Tommy explica a situação para Maria, que ficou enfurecida por Joel supostamente estar arriscando novamente a vida do irmão, Ellie acredita que Joel está tentando se livrar dela e foge à cavalo para uma fazenda próxima. Joel e Tommy vão atrás de Ellie, que se entendem 
                            e partem para a Universidade do Leste do Colorado, onde Tommy afirma que há um posto Vaga-lume ativo.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="A universidade" />

                        <p>Ao chegarem no prédio de ciências da universidade, se deparam com ele vazio e cheio de equipamentos médicos abandonados. Eles entram em uma sala, encontram vários macacos e descobrem que os Vagalumes estavam realizando testes médicos neles. Joel encontra um outro gravador de um médico, 
                            que dizia que os vagalumes foram embora da universidade e que toda aquela pesquisa feita ali foi uma perda de tempo. Ele também conta que os vagalumes se mudaram pro hospital St.Mary em Salt Lake City, Utah. Agora que já sabem o novo destino, Joel chama Ellie para saírem da universidade, 
                            porém no mesmo momento são atacados por um grupo desconhecido. 
                        </p> <br />
                        <p>Eles conseguem se defender e matam vários do grupo, porém um caçador ataca Joel de surpresa e o joga de cima de uma varanda, e Joel cai em um vergalhão enferrujado, perfurando seu abdômen. Joel fica gravemente ferido e começa a perder muito sangue, e Ellie o carrega pra fora do prédio enquanto 
                            se defende dos agressores. Eles montam no cavalo e saem da universidade, porém Joel está muito fraco e perde a consciência, deixando Ellie por conta própria. 
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="O inverno" />

                        <p>Ellie conseguiu arrastar o frágil Joel para um shopping abandonado. Ellie cobriu o ferimento com sua camisa de verão, usando fita adesiva para mantê-lo no lugar. Ellie voltou com um kit de primeiros socorros, depois de lutar contra canibais e ser infectada para voltar. Ela costurou o ferimento de Joel 
                            e amarrou-o a um trenó para puxá-lo pela neve. Eles partiram, chegando finalmente a Silver Lake. Ellie prendeu Joel em uma casa abandonada perto de um lago. Com o passar das semanas, Ellie procurou comida enquanto Joel estava cada vez mais doente. 
                        </p> <br />
                        <p>Semanas depois, Joel continuava com febre por causa da infecção. Um dia, Ellie voltou depois de caçar com um frasco de penicilina que obteve de dois sobreviventes chamados David e James. Na manhã seguinte, o grupo de David rastreou a localização de Ellie e Joel para capturá-los. Para proteger Joel, 
                            Ellie fugiu da área de Callus, mas eles a alcançaram, mataram Callus a tiros e David a capturou. Joel não foi encontrado pelo grupo.
                        </p> <br />
                        <p>Mais tarde, Joel acordou assustado, agora curado da doença, embora debilitado. Ele saiu de casa para procurar Ellie, mas encontrou retardatários do grupo de David. Ele perseguiu e matou todos, exceto dois. Ele os torturou e interrogou para obter informações sobre a localização de Ellie.</p> <br />
                        <p>Joel consegue chegar ao assentamento de David e descobriu que eles eram canibais. Ele finalmente chegou a um restaurante em chamas e encontrou Ellie atacando David brutalmente com seu próprio facão. Ele a puxou para longe do cadáver para acalmá-la e abraçá-la, a primeira vez que fez isso com ela. Ele também 
                            a chamava de “garotinha”, o mesmo termo carinhoso que usava para Sarah. Ellie agora está segura, a dupla fugiu da cidade.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Chegando em St. Mary" />

                        <p>Na primavera, Joel e Ellie chegaram a Salt Lake City, o destino final pretendido. Joel tentou preencher o silêncio para animar Ellie, distante e traumatizada, que se aqueceu ao ver uma manada de girafas. Sabendo o que Ellie havia experimentado, ele sugeriu que eles saíssem e voltassem para o assentamento de Tommy, 
                            mas ela recusou a oferta, comentando que queria continuar com isso depois de tudo que eles passaram.
                        </p> <br />
                        <p>À medida que avançam, eles precisam passar por um túnel inundado e encontrara uma horda de infectados. Após eliminá-los, precisam passar por cima de veículos e andaimes de construção, e chegaram a uma grande lacuna. Ellie estava com medo de não conseguir, mas Joel garantiu que a pegaria. Ela pulou, mas conseguiu sem 
                            a ajuda dele, algo pelo qual Joel a parabenizou.
                        </p> <br />
                        <p>Ao passar por cima do último ônibus para conseguirem sair do túnel, ele cedeu a Joel, fazendo-o cair para a frente enquanto a água o enchia. Ellie pulou no ônibus e chutou a porta para abri-la. No entanto, o ônibus afunda na água. Joel forçou sua saída para alcançar Ellie inconsciente e submersa. Ele a carregou para a superfície, 
                            mas descobriu que ela não estava respirando. Logo em seguida, dois Vaga-lumes os encontraram, e o nocautearam.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading secondaryHeading="Salvando Ellie" />

                        <p>Quando Joel acordou, ele estava com Marlene e o que restava dos Vaga-lumes de Boston no Hospital St. Mary. Ellie foi reanimada com sucesso, mas foi imediatamente levada para uma cirurgia por ordem de Marlene para criar uma vacina para a infecção. Marlene também disse a Joel que, para fazer a engenharia reversa completa do fungo para uma 
                            vacina, os médicos estavam prestes a remover o fungo do cérebro de Ellie, o que resultaria em morte certa. 
                        </p> <br />
                        <p>Ao ouvir isso, Joel começou a protestar por ela. Marlene o desconsiderou, dizendo que a escolha não foi dele e que sua decisão de sacrificar Ellie salvaria milhões vidas. Joel tentou partir para cima de Marlene, mas foi contido pelos guardas. Marlene disse os autorizou a usar força e matar Joel, caso ele tentasse alguma coisa. Ela ordena 
                            que seu guarda, Ethan, o escolte Joel para fora do hospital. Joel, determinado a não perder sua nova "filha" como perdeu Sarah, torturou Ethan para saber a localização da sala de cirurgia. Ele então abriu caminho pelas instalações, matou o cirurgião-chefe e salvou Ellie.
                        </p> <br />
                        <p>Joel pega Ellie no colo e foge dos Vaga-lumes pelo elevador do hospital. Ao chegar no estacionamento, Marlene encurrala Joel, ameaçando-o com uma pistola. Ela tentou convencê-lo de que fugir era inútil; Ellie acabaria tendo uma morte trágica, seja por destroçada por infectados ou por sobreviventes selvagens. Joel ficou cansado ao considerar 
                            a possibilidade enquanto Marlene se aproximava dele para alcançar Ellie. Apesar desta oferta, Joel atirou no abdômen de Marlene, decidindo firmemente que preferia salvar Ellie do que salvar a humanidade. 
                        </p> <br />
                        <p>Ele colocou Ellie em um carro e depois voltou para Marlene, que se rastejada ferida. Ela implorou por sua vida, mas Joel recusou friamente, temendo que ela os perseguisse se sobrevivesse. Ele então atirou na cabeça dela à queima-roupa antes de fugir com Ellie de volta para Jackson.</p> <br />
                        <p>No caminho, para poupar Ellie de sentir a culpa por ter sobrevivido, ele mentiu para ela que sua imunidade não significava nada porque os Vagalumes desistiram de encontrar uma cura, o que deprimiu Ellie. Quando os dois chegaram próximo à comunidade de Tommy, não conseguiram atravessar a estrada principal, porque o carro em que estavam quebrou. 
                            Desviando pela floresta, ele disse a Ellie que costumava caminhar com Sarah, acreditando que as duas teriam sido "boas amigas" e comentou que eles poderiam viver uma vida normal agora. No final, Ellie confrontou Joel para saber se o que ele disse a ela sobre o ocorrido no hospital dos Vaga-lumes era verdade. Joel respondeu: 
                            "Eu juro", deixando Ellie em dúvida com sua própria crença.
                        </p>
                    </div>

                    <div>
                        <ChapterHeading mainHeading="Habilidades" />

                        <p>Em seu tempo como caçador, Joel aperfeiçoou suas técnicas de tortura, emboscada e de combate. O homem pode superar quase qualquer adversário com os próprios punhos e consegue ser ainda mais letal com qualquer arma na mão. Tanto tempo sobrevivendo com o que conseguisse encontrar também afiaram a sua engenhosidade, permitindo que construa rapidamente 
                            bombas e curativos a partir de sucata.
                        </p> <br />
                        <p>Joel é um mestre da furtividade, habilidade que praticou ao extremo em seus longos anos de experiência como contrabandista. Sua audição é particularmente poderosa, conseguindo estimar a localização de seus inimigos ao ouvir atentamente cada mínimo barulho.</p>
                    </div>

                    <div>
                        <ChapterHeading mainHeading="Hobbies" />

                        <p>Por incrível que pareça, Joel tem uma série de hobbies, mas acabou abandonando a maioria quando o mundo virou ao avesso. Para começar, Joel adorava música e seu sonho de infância era ser cantor.</p> <br />
                        <p>Em Jackson, Joel voltou a tomar bastante café. Ele era viciado antes do apocalipse e gostava de visitar diferentes cafeterias. Ele também voltou a praticar carpintaria, construindo violões e ajudando a erguer casas de madeira. Ele era carpinteiro no tempo livre, antes de todo o caos, e sonhava em transformar isso em um negócio próprio.</p>
                    </div>

                    <div>
                        <ChapterHeading mainHeading="Galeria" />
                        <CharactersGallery lstImages={lstImagesGallery} />                        
                    </div>
                </main>

                <RelatedCharacters character={joel} />        
            </div>

            <Footer />
        </>
    )
}

export default Joel;