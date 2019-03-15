import React, { memo } from 'react';

const ListItem = (props) => {
    return (
        <li>
            {props.children}
        </li>
    )
}

export default memo(ListItem);