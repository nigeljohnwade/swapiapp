import React from 'react';

const ListItem = (props) => {
    const {
        listItem,
    } = props;

    console.log('render li', props);
    return (
        <li>{listItem}</li>
    )
}

export default React.memo(ListItem);