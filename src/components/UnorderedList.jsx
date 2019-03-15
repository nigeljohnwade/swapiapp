import React from 'react';

const UnorderedList = (props) => {
    console.log('render ul', props);
    return (
        <ul>
            {
                props.children
            }
        </ul>
    )
}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(UnorderedList, areEqual);