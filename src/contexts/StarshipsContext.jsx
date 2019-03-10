import React from 'react';

export const StarshipsContext = React.createContext({});

export function withStarships(Component) {
    return function connectedComponent(props) {
        return (
            <StarshipsContext.Consumer>
                {(starships) => <Component {...props} starships={starships} />}
            </StarshipsContext.Consumer>
        )
    }
}