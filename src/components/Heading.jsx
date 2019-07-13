import React, { memo } from 'react';

const Heading = ({src, headingText, headingSubText, ...rest}) => {

    return (
        <>
            {
                src &&
                <img src={src} alt="*" />
            }
            <h2 {...rest}>{headingText}</h2>
            {
                headingSubText &&
                <p className="sub-heading">{headingSubText}</p>
            }
        </>
    )
}

export default memo(Heading);