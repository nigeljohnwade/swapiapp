import React from 'react';

import './LinkItem.scss';

const LinkItem = ({ linkItemText, linkItemUrl }) => {

    return (
        <a
            className="link-item"
            href={linkItemUrl}
        >
            {linkItemText}
        </a>
    )
}

export default React.memo(LinkItem)