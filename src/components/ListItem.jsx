import React from 'react';

import LinkItem from './LinkItem/LinkItem';

const ListItem = (props) => {
    const {
        listItem,
    } = props;

    console.log('render li', props);
    return (
        <li>
            <LinkItem item={listItem}/>
        </li>
    )
}

export default React.memo(ListItem);