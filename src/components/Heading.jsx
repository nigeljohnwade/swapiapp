import React, {
    Fragment,
    memo
} from 'react';

const Heading = ({src, headingText, headingSubText, ...rest}) => {

    return (
        <Fragment>
            {
                src &&
                <img src={src} alt="*" />
            }
            <h2 {...rest}>{headingText}</h2>
            {
                headingSubText &&
                <p className="sub-heading">{headingSubText}</p>
            }
        </Fragment>
    )
}

export default memo(Heading);