import './styles.css';

type Props = {
    title: string;
    textColor: string;
}

function Title({ title, textColor } : Props) {
    return(
        <div className="title">
            <span className="marker"></span>
            <h2 className={textColor === 'white' ? "text--white" : "text--black"}>{title}</h2>
        </div>
    )
}

export default Title;