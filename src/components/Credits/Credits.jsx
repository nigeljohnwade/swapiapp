import React from 'react';

function Credits({
    director,
    producer,
}) {
    return (
        <>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
        </>
    )
}

export default Credits;