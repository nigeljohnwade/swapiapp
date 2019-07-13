import React, {
    memo,
} from 'react';

const ListItem = ({children, ...rest}) => {
    return (
        <li {...rest}>
            {children}
        </li>
    )
}

export default memo(ListItem);