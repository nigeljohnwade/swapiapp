import React from 'react';

export const VehiclesContext = React.createContext({});

export function withVehicles(Component) {
    return function connectedComponent(props) {
        return (
            <VehiclesContext.Consumer>
                {(vehicles) => <Component {...props} vehicles={vehicles} />}
            </VehiclesContext.Consumer>
        )
    }
}