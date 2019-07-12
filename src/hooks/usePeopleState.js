import { useState, useEffect } from 'react';

import { getPeople, routes } from '../api/starWars';

function usePeopleState() {
    const initialPeopleState = {
        count: null,
        next: routes.people,
        results: [],
    };
    const [people, updatePeopleState] = useState(initialPeopleState);

    useEffect(() => {
        if (people.next !== null) {
            getPeople(people.next).then(data => updatePeopleState({
                count: data.count,
                next: data.next,
                results: data.results.concat(people.results)
            }));
        }
    });

    return { people: people, updatePeopleState: updatePeopleState };
}

export default usePeopleState;