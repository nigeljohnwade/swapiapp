import React, { memo } from 'react';

const UnorderedList = (props) => {
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    )
}

export default memo(UnorderedList);