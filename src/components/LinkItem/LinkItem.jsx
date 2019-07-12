import React, { memo } from 'react';

import './LinkItem.scss';

const LinkItem = ({ clickHandler, linkItemText, linkItemUrl, ...rest }) => {

    return (
        <a
            className="link-item"
            href={linkItemUrl}
            onClick={(e) => {
                e.preventDefault();
                clickHandler(e);
            }}
            {...rest}
        >
            {linkItemText}
        </a>
    )
}

export default memo(LinkItem)