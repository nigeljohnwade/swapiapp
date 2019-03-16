import React from 'react';

const OrderedList = (props) => {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export default React.memo(OrderedList);