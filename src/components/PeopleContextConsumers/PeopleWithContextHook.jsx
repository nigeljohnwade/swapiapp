import React, {
    lazy,
    useContext
} from 'react';

import { PeopleContext } from '../../contexts/PeopleContext';

const Tile = lazy(() => import('../Tile'));
const Section = lazy(() => import('../Section'));
const Details = lazy(() => import('../FilmDetails'));

const PeopleWithContextHook = () => {
    const {people, updatePeopleState} = useContext(PeopleContext);

    return (
        <Tile>
            <Section
                count={people.count}
                items={people.results && people.results.map((item) => {
                    return {
                        key: item.url,
                        displayText: item.name,
                    }
                })}
                name="People"
                selectHandler={(e) => {
                    updatePeopleState({
                        ...people,
                        highlightedItem: people.results.filter(item => item.url === e.target.href)[0]
                    })
                }}
            />
            {
                people.highlightedItem &&
                <Details {...people.highlightedItem} />
            }
        </Tile>
    )
}

export default PeopleWithContextHook;