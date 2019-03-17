import React, {memo} from 'react';

import './OpeningCrawl.scss';

const OpeningCrawl = ({text, title}) => {

    return (
        <div className="opening-crawl">
            <div className="opening-crawl__perspective-wrapper">
                <div className="opening-crawl__transform-wrapper">
                    <h3 className="opening-crawl__title">{title}</h3>
                    <pre className="opening-crawl__body">{text}</pre>
                </div>
            </div>
        </div>
    )
}

export default memo(OpeningCrawl);