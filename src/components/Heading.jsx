import React, { Fragment } from 'react';

const Heading = (props) => {
    const {
        src,
        headingText,
        headingSubText,
    }= props;

    console.log('render heading', props);
    return (
        <Fragment>
            {
                src &&
                <img src={src} alt="*" />
            }
            <h1>{headingText}</h1>
            {
                headingSubText &&
                <p className="sub-heading">{headingSubText}</p>
            }
        </Fragment>
    )
}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(Heading, areEqual);