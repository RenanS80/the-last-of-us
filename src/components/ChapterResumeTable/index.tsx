import './styles.css';

type Props = {
    lstSections: Array<string>;
    location: string;
    date: string;
    lstCharacters: Array<string>;
    lstEnemies: Array<string>;
    lstMentions: Array<string>;
}

function ChapterResumeTable({ lstSections, location, date, lstCharacters, lstEnemies, lstMentions } : Props) {
    return(
        <table className="content-table">
            <tr>
                <th>Seções</th>
                <td>{lstSections.join(', ')}</td>
            </tr>
            <tr>
                <th>Localização</th>
                <td>{location}</td>
            </tr>
            <tr>
                <th>Data</th>
                <td>{date}</td>
            </tr>
            <tr>
                <th>Personagens</th>
                <td>{lstCharacters.join(', ')}</td>
            </tr>
            <tr>
                <th>Inimigos</th>
                <td>{lstEnemies.join(', ')}</td>
            </tr>
            <tr>
                <th>Menções</th>
                <td>{lstMentions.join(', ')}</td>
            </tr>
        </table>
    );
}

export default ChapterResumeTable;