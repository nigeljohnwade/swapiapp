import React, { Fragment, memo } from 'react';

const Heading = ({
    src,
    headingText,
    headingSubText,
}) => {

    console.log('render heading', headingText);

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

export default memo(Heading);