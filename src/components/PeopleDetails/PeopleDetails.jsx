import React, {memo} from 'react';

function PeopleDetails({
    height,
}) {
    return (
        <div className="details">
            <h4>Details</h4>
            <p>{height}</p>
        </div>
    )
}

export default memo(PeopleDetails);