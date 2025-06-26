type Props = {
    mainHeading?: String;
    secondaryHeading?: String;
}

function ChapterHeading({ mainHeading, secondaryHeading } : Props) {
    return(
        <>
            {mainHeading !== undefined &&
                <h2>{mainHeading}</h2>
            }

            {secondaryHeading !== undefined &&
                <h3 className={mainHeading === undefined ? 'mar-top25' : ''}>{secondaryHeading}</h3>
            }
        </>
    );
}

export default ChapterHeading;