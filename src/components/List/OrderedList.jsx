import React from 'react';

const OrderedList = (props) => {
    return (
        <ol className={props.className}>
            {props.children}
        </ol>
    )
}

export default React.memo(OrderedList);