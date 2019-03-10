import React from 'react';

export const PlanetsContext = React.createContext({});

export function withPlanets(Component) {
    return function connectedComponent(props) {
        return (
            <PlanetsContext.Consumer>
                {(planets) => <Component {...props} planets={planets} />}
            </PlanetsContext.Consumer>
        )
    }
}