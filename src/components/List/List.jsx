import React from 'react';

import UnorderedList from "./UnorderedList";
import OrderedList from './OrderedList';

const List = (props) => {
    const element = props.ordered
        ? <OrderedList>
                {props.children}
            </OrderedList>
        :<UnorderedList>
            {props.children}
        </UnorderedList>;

    return element
}

export default React.memo(List);