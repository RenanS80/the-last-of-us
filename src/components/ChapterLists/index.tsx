type Props = {
    lstFunFacts?: Array<String>;
    lstMistakes?: Array<String>;
}

function ChapterLists({ lstFunFacts, lstMistakes } : Props) {
    return(
        <>
            {lstFunFacts?.map((item, index) => (
                <ul key={index}>
                    <li>{item}</li>
                </ul>
            ))}

            {lstMistakes?.map((item, index) => (
                <ul key={index}>
                    <li>{item}</li>
                </ul>
            ))}
        </>
    );
}

export default ChapterLists;