import React, { memo } from 'react';

import './LinkItem.scss';

const LinkItem = ({ clickHandler, linkItemText, linkItemUrl }) => {

    return (
        <a
            className="link-item"
            href={linkItemUrl}
            onClick={(e) => {
                e.preventDefault();
                clickHandler(e);
            }}
        >
            {linkItemText}
        </a>
    )
}

export default memo(LinkItem)