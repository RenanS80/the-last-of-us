import Artefato from '../../assets/images/chapters/artefatos.jpg';
import PingenteVagaLume from '../../assets/images/chapters/pingente-vaga-lume.jpg';
import Manual from '../../assets/images/chapters/manual.jpg';
import Gibi from '../../assets/images/chapters/gibi.jpg';
import Dialogo from '../../assets/images/chapters/dialogo.jpg';

import './styles.css';

type Props = {
    qtdArtefatos: number;
    qtdPingentes: number;
    qtdManuais: number;
    qtdGibis: number;
    qtdDialogos: number;
}

function ChapterCollectiblesTable({ qtdArtefatos, qtdPingentes, qtdManuais, qtdGibis, qtdDialogos } : Props) {
    return(
        <table className="content-table table-collectibles">
            <tr>
                <th>
                    <div>
                        <img src={Artefato} alt="Artefatos" />
                    </div>
                    Artefatos
                </th>
                <td>{qtdArtefatos}</td>
            </tr>
            <tr>
                <th>
                    <div>
                        <img src={PingenteVagaLume} alt="Pingentes Vaga-lume" />
                    </div>
                    Pingentes Vaga-lume
                </th>
                <td>{qtdPingentes}</td>
            </tr>
            <tr>
                <th>
                    <div>
                        <img src={Manual} alt="Manuais de Treinamento" />
                    </div>
                    Manuais de Treinamento
                </th>
                <td>{qtdManuais}</td>
            </tr>
            <tr>
                <th>
                    <div>
                        <img src={Gibi} alt="Gibis" />
                    </div>
                    Gibis
                </th>
                <td>{qtdGibis}</td>
            </tr>
            <tr>
                <th>
                    <div>
                        <img src={Dialogo} alt="Dialogos" />
                    </div>
                    Diálogos
                </th>
                <td>{qtdDialogos}</td>
            </tr>
        </table>
    );
}

export default ChapterCollectiblesTable;