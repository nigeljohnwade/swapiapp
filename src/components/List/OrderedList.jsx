import React, { memo } from 'react';

const OrderedList = ({className, children, ...rest}) => {
    return (
        <ol className={className} {...rest}>
            {children}
        </ol>
    )
}

export default memo(OrderedList);