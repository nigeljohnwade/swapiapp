import React, { Fragment } from 'react';

const UnorderedList = (props) => {
    return (
        <ul>
            {
                props.items && props.items.map((item) => {
                    return (
                        <li key={item.key}>{item.listItem}</li>
                    )
                })
            }
        </ul>
    )
}

export default UnorderedList;