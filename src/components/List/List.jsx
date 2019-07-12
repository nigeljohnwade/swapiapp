import React, { memo } from 'react';

import UnorderedList from "./UnorderedList";
import OrderedList from './OrderedList';

import './List.scss';

const List = ({children, inside, ordered, roman}) => {
    const listClassArray = [];

    inside && listClassArray.push('list--inside');
    roman && listClassArray.push('list--roman');

    const classNameString = `list ${listClassArray.join('')}`
    const element = ordered
        ? <OrderedList className={classNameString}>
                {children}
            </OrderedList>
        :<UnorderedList className={classNameString}>
            {children}
        </UnorderedList>;

    return element
}

export default memo(List);