import React, {
    memo,
    useState,
} from 'react';

import './Tile.scss';

const Tile = ({children}) => {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <div className={`tile ${isExpanded && 'tile--expanded'}`}>
            <button
                className="tile__expander"
                onClick={()=> toggleExpansion(!isExpanded)}
            >
                {isExpanded ? 'Tile' : 'Full screen'}
            </button>
            {children}
        </div>
    )
}

export default memo(Tile);