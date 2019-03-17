import React, {
    memo,
    useState,
} from 'react';

import './Tile.scss';

const Tile = (props) => {
    const [expanded, toggleExpansion] = useState(false);

    return (
        <div className={`tile ${expanded && 'tile--expanded'}`}>
            <button
                className="tile__expander"
                onClick={()=> toggleExpansion(!expanded)}
            >
                {expanded ? 'Tile' : 'Full screen'}
            </button>
            {props.children}
        </div>
    )
}

export default memo(Tile);