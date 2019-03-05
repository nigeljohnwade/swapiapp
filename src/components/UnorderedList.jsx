import React from 'react';

import ListItem from './ListItem';

const UnorderedList = (props) => {
    console.log('render ul', props);
    return (
        <ul>
            {
                props.items && props.items.map((item) => {
                    return (
                        <ListItem key={item.key} listItem={item.listItem} />
                    )
                })
            }
        </ul>
    )
}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(UnorderedList, areEqual);