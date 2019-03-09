import React, {useState} from 'react';

import './Tile.scss';

export const Tile = (props) => {
    const [expanded, toggleExpansion] = useState(false);

    return (
        <div className={`tile ${expanded && 'tile--expanded'}`}>
            <button
                className="tile__expander"
                onClick={()=> toggleExpansion(!expanded)}
            >
                Full screen
            </button>
            {props.children}
        </div>
    )
}
