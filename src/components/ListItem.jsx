import React from 'react';

const ListItem = (props) => {
    console.log('render li', props);
    return (
        <li>{props.listItem}</li>
    )
}

export default React.memo(ListItem);