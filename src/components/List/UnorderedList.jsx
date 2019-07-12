import React, { memo } from 'react';

const UnorderedList = ({className, children, ...rest}) => {
    return (
        <ul className={className} {...rest}>
            {children}
        </ul>
    )
}

export default memo(UnorderedList);