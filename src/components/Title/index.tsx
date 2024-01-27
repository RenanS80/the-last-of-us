import './styles.css';

type Props = {
    title: string;
}

function Title({ title } : Props) {
    return(
        <div className="title">
            <span className="marker"></span>
            <h2>{title}</h2>
        </div>
    )
}

export default Title;