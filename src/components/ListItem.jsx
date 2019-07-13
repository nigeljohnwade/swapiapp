import React, {
    memo,
f} from 'react';

const ListItem = ({children, ...rest}) => {
    return (
        <li {...rest}>
            {children}
        </li>
    )
}

export default memo(ListItem);