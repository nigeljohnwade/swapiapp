import React, {memo} from 'react';

import OpeningCrawl from "../OpeningCrawl";
import Credits from "../Credits";

function PeopleDetails({
    opening_crawl,
    title,
    director,
    producer,
    release_date,
}) {
    return (
        <div className="details">
            <h4>Details</h4>
            <OpeningCrawl
                text={opening_crawl}
                title={title}
            />
            <Credits
                director={director}
                producer={producer}
            />
            <p>Released on {release_date}</p>
        </div>
    )
}

export default memo(PeopleDetails);