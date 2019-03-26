import React, { memo } from 'react';

function Details(props) {
    console.log(props);
    return (
        <div className="details">
            <p>Detail</p>
        </div>
    )
}

export default memo(Details);