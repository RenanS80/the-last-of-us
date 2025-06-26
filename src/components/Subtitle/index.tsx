import './styles.css';

type Props = {
    subtitle: string;
}

function Subtitle({ subtitle } : Props) {
    return(
        <div className="subtitle">
            <h4>{subtitle}</h4>
        </div>
    );
}

export default Subtitle;