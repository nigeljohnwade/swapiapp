import React from 'react';

const UnorderedList = (props) => {
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    )
}

export default React.memo(UnorderedList);