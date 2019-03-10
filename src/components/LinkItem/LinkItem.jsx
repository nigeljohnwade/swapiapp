import React from'react';

import './LinkItem.scss';

const LinkItem = (props) =>{
    const {
        item
    } = props;

    return(
        <a
            className="link-item"
            href={item.key}
        >
            {item.listItem}
        </a>
    )
}

export default React.memo(LinkItem)