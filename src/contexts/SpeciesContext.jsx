import React from 'react';

export const SpeciesContext = React.createContext({});

export function withSpecies(Component) {
    return function connectedComponent(props) {
        return (
            <SpeciesContext.Consumer>
                {(species) => <Component {...props} species={species} />}
            </SpeciesContext.Consumer>
        )
    }
}