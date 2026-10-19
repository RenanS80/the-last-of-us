import Header from 'components/Header';
import CharacterTableInfo from 'components/CharacterTableInfo';
import CharacterSummary from 'components/CharacterSummary';
import RelatedCharacters from 'components/RelatedCharacters';
import ChapterHeading from 'components/ChapterHeading';
import CharactersGallery from 'components/CharactersGallery';
import Footer from 'components/Footer';

import { sarah } from 'data/relatedCharacters/sarah';

import QuotationMark from '../../../assets/images/characters/quotation-mark.svg';
import ImgInfoBio from '../../../assets/images/characters/sarah/sarah-info-bio.jpg';
import Img1 from '../../../assets/images/characters/sarah/img1.png';
import Img2 from '../../../assets/images/characters/sarah/img2.png';
import Img3 from '../../../assets/images/characters/sarah/img3.png';
import Img4 from '../../../assets/images/characters/sarah/img4.png';
import Img5 from '../../../assets/images/characters/sarah/img5.png';


function Sarah() {
    const lstSummaryItems = [
        {
            main: 'Biografia',
            nested: [
                {name: 'Contexto e início da vida', id: 'biography'},
                {name: 'Eventos de The Last of Us', id: 'the-last-of-us-events'},
                {name: 'Legado', id: 'legacy'}
            ],
            id: 'biography'
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
            "Ano de Nascimento": "2001"
        },
        {
            "Idade": "12 anos"
        },
        {
            "Status": "Morto"
        },
        {
            "Gênero": "Feminino"
        },
        {
            "Profissão": "Estudante (6º ano)"
        },
        {
            "Familiares": "Joel (pai), Tommy (tio)"
        },
        {
            "Residência": "Texas"
        },
        {
            "Cor do cabelo": "Loiro"
        },
        {
            "Cor dos olhos": "Azul"
        }
    ];

    const lstTableInfoBehindScenes = [
        { "Dublador (US)": "Hana Hayes" },
        { "Dublador (BR)": "Vic Brow" },
        { "Captura de movimentos": "Hana Hayes" }
    ];

    const lstImagesGallery = [Img1, Img2, Img3, Img4, Img5];

    return(
        <>
            <Header />

            <div className="container container--character">
                <main className="character__biography">
                    <div>
                        <h1>Sarah Miller</h1>
                        <hr className="divider" />
                    </div>
                    <div className="character__citation">
                        <img src={QuotationMark} alt="Aspas" />
                        <blockquote>Você tá sempre reclamando do relógio quebrado... Então eu pensei, sabe como é. Gostou?</blockquote>
                        <img src={QuotationMark} alt="Aspas" />
                    </div>
                    
                    <div className="character__intro">
                        <div className="character__resume">
                            <p>Sarah é a primeira personagem jogável em <strong>The Last of Us</strong>. Ela é filha de Joel e sobrinha de Tommy Miller e teve seu destino interrompido durante o dia D do Cordyceps.</p>

                            <CharacterSummary lstItems={lstSummaryItems} />

                        </div>
                        <CharacterTableInfo infoBio={lstTableInfoBio} infoBehindScenes={lstTableInfoBehindScenes} photo={ImgInfoBio} name="Sarah" />
                    </div>

                    <div id={lstSummaryItems[0]?.nested?.[0].id} data-link="anchor">
                        <ChapterHeading mainHeading="Biografia" secondaryHeading="Contexto e início da vida" />

                        <p>Sarah Miller nasceu no final de 2000, filha de Joel Miller e de uma mãe cuja identidade é desconhecida. Antes do surto, ela levava uma vida normal em Austin, no Texas, ao lado de seu pai. 
                            Sarah jogava em um time juvenil de futebol chamado <i>Defenders</i>, no qual usava a camisa de número 14.
                        </p> <br />
                        <p>Além do futebol, Sarah gostava de fazer trilhas com o pai e de andar de skate, como sugere o skate encostado na parede de seu quarto, visto no início do jogo. Ela também era fã da banda 
                            de rock <i>The Bash</i>, cujo pôster estava pendurado na parede de seu quarto.
                        </p> <br />
                        <p>Sarah gostava ainda dos filmes <i>Dawn of the Wolf</i>, uma paródia da saga Crepúsculo. Um pôster do filme também pode ser visto em seu quarto. Há indícios de que ela tenha convencido Joel a 
                            levá-la ao cinema para assisti-lo.
                        </p> <br />
                        <p>Outra atividade de que Sarah gostava era visitar museus com o pai. Joel chega a comentar que ela o arrastava para &#8220;todos os malditos museus do Texas&#8221;, demonstrando o quanto ela apreciava esses passeios. 
                            Joel e a mãe de Sarah foram casados por algum tempo, mas ela o deixou pouco depois do nascimento da filha. A partir de então, Sarah foi criada pelo pai.
                        </p>
                    </div>

                    <div id={lstSummaryItems[0]?.nested?.[1].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Eventos de The Last of Us" />

                        <p>Sarah é vista pela primeira vez acordando no sofá e encontrando seu pai, Joel, conversando ao telefone com seu tio Tommy. Em seguida, Joel se senta no sofá, e Sarah lhe entrega um presente de aniversário: um relógio 
                            de pulso novo. Brincando, ela diz que o comprou com o dinheiro que ganhou vendendo &#8220;drogas pesadas&#8221;. Depois, Sarah assiste à televisão por algum tempo ao lado do pai. Quando finalmente adormece novamente, 
                            Joel a carrega até seu quarto e a coloca na cama.
                        </p> <br />
                        <p>Mais tarde, Sarah é acordada no meio da noite por um telefonema urgente de seu tio Tommy, que pede que ela chame seu pai. No entanto, a ligação cai antes que ele consiga explicar o que está acontecendo, levando Sarah 
                            a procurar por Joel. Durante a busca, ela passa pelo cartão de aniversário que havia feito para o pai. Nele, compara Joel a um dinossauro, mas também afirma que ele é o melhor pai do mundo.
                        </p> <br />
                        <p>Ao chegar ao quarto de Joel, Sarah se depara com uma reportagem na televisão sobre um vazamento de gás. A transmissão é interrompida abruptamente por uma explosão ao longe, assustando-a. Em seguida, ela desce as escadas e 
                            vê vários carros de polícia passando em alta velocidade em frente à casa, indicando que algo grave está acontecendo.
                        </p> <br />
                        <p>Sarah encontra o celular do pai e percebe que ele tem oito chamadas perdidas, além de uma mensagem de Tommy dizendo: &#8220;Onde diabos você está? ME LIGA!&#8221;, seguida de outra: &#8220;Estou a caminho&#8221;. Ela entra no escritório de Joel 
                            no momento em que ele surge correndo pela porta de correr que dá acesso ao quintal. Coberto de sangue e visivelmente nervoso, Joel pega seu revólver na escrivaninha e explica que o vizinho deles, Jimmy Cooper, está &#8220;doente&#8221;.
                        </p> <br />
                        <p>Nesse instante, Jimmy aparece correndo em direção à porta de correr, quebra o vidro e invade o cômodo, assustando Sarah, que recua instintivamente. Joel imediatamente se coloca entre a filha e o homem, tentando protegê-la. Jimmy avança contra os dois, 
                            obrigando Joel a atirar nele. Sarah fica incrédula diante do que acabou de presenciar, mas Joel rapidamente tenta acalmá-la.
                        </p> <br />
                        <p>De repente, Tommy chega à entrada da garagem, e os três entram no carro para fugir da cidade em busca de segurança. No entanto, algumas rotas estão bloqueadas, enquanto outras estão congestionadas pelo caos que toma conta da região. Sem alternativas, 
                            Tommy decide seguir em direção à cidade, evitando por pouco um infectado que tenta invadir o veículo.
                        </p> <br />
                        <p>Em meio à confusão, outro carro colide com o veículo em que estão, fazendo-o capotar e ferindo a perna de Sarah, o que dificulta sua locomoção. Com o carro destruído, Joel a pega no colo enquanto Tommy os protege, e os três procuram um lugar seguro 
                            para se abrigar. Eles acabam entrando em um bar, com vários infectados em seu encalço. Tommy orienta Joel e Sarah a seguirem em direção à rodovia, afirmando que ficará para conter os infectados e que os alcançará em seguida. Joel foge carregando Sarah, 
                            enquanto os dois são perseguidos de perto por outros infectados, tentando escapar do caos que se espalha pela cidade.
                        </p> <br />
                        <p>Ao se aproximarem da rodovia, Joel e Sarah são cercados por infectados, mas um soldado aparece e os salva, abatendo as criaturas. Em seguida, o militar entra em contato com seus superiores pelo rádio para receber instruções sobre o que fazer com Joel e Sarah. 
                            Apesar da presença da garota, ele recebe ordens para eliminá-los. Joel tenta argumentar com o soldado, mas, relutante, o homem abre fogo contra os dois. Joel se joga para protegê-la e tenta evitar que os disparos a atinjam, mas ambos caem no chão, 
                            e Sarah grita de dor. O soldado se aproxima de Joel e se prepara para matá-lo, mas é atingido por um disparo de Tommy antes que consiga fazê-lo.
                        </p> <br />
                        <p>O alívio de Joel, porém, dura pouco. Sarah começa a chorar, e ele percebe que a filha foi baleada no abdômen. Desesperado, implora para que ela aguente firme enquanto tenta estancar o sangramento, sem sucesso. Sarah se agarra ao pai e morre em seus braços, 
                            deixando Joel devastado.
                        </p> <br />
                        <p>Sarah morreu nas primeiras horas de 27 de setembro de 2013, durante o surto inicial da infecção causada pelo Cordyceps.</p>
                    </div>

                    <div id={lstSummaryItems[0]?.nested?.[2].id} data-link="anchor">
                        <ChapterHeading secondaryHeading="Legado" />

                        <p>A perda de Sarah teve um impacto profundo e duradouro em Joel, que não conseguiu superar a morte da filha, mesmo vinte anos depois. Ele evitava falar sobre ela sempre que possível e continuou usando o relógio que ela lhe dera de presente, apesar de o objeto 
                            ter sido danificado na noite de sua morte.
                        </p> <br />
                        <p>Ao longo de sua jornada com Ellie, Joel começou a perceber diversas semelhanças entre a garota e sua falecida filha, chegando a acreditar que as duas teriam sido boas amigas. Ele também passou a se referir carinhosamente a Ellie como &#8220;minha garotinha&#8221;, 
                            o mesmo apelido que costumava usar com Sarah, sugerindo que o vínculo desenvolvido entre os dois se tornou semelhante à relação que ele tinha com a filha. 
                        </p>
                    </div>

                    <div id={lstSummaryItems[1].id} data-link="anchor">
                        <ChapterHeading mainHeading="Personalidade e traços" />

                        <p>Sarah compartilha o senso de humor de seu pai, e demonstra facilidade em trocar provocações bem-humoradas com durante o prólogo, sem perder o ritmo da conversa. Ela também demonstra grande carinho por ele, tendo economizado dinheiro suficiente para lhe comprar um presente 
                            de aniversário valioso: um relógio de pulso novo.
                        </p> <br />
                        <p>Assim como Ellie, Sarah demonstra maturidade para sua idade. Poucos minutos depois de Joel atirar no vizinho infectado, ela consegue manter a calma e tranquilizar Tommy, afirmando que está bem, apesar da situação traumática que acabou de presenciar. Ela também aparenta ter 
                            inteligência acima da média para sua idade, como sugerem os prêmios acadêmicos expostos acima do computador em seu quarto. 
                        </p> <br />
                        <p>Sarah também é atenciosa e altruísta. Durante a fuga, demonstra preocupação com a segurança de Tommy e comenta que eles deveriam ter parado para ajudar a família que encontraram na estrada, mesmo diante do perigo crescente.</p>
                    </div>

                    <div id={lstSummaryItems[2].id} data-link="anchor">
                        <ChapterHeading mainHeading="Galeria" />
                        <CharactersGallery lstImages={lstImagesGallery} />                        
                    </div>
                </main>

                <RelatedCharacters character={sarah} />        
            </div>

            <Footer />
        </>
    )
}

export default Sarah;