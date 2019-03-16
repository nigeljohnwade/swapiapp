import React from 'react';

const UnorderedList = (props) => {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export default React.memo(UnorderedList);