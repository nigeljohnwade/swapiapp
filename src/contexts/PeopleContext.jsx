import React from 'react';

export const PeopleContext = React.createContext({});

export function withPeople(Component) {
    return function connectedComponent(props) {
        return (
            <PeopleContext.Consumer>
                {(people) => <Component {...props} people={people} />}
            </PeopleContext.Consumer>
        )
    }
}