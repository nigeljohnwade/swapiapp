import React from 'react';

import { withPeople } from '../contexts/PeopleContext';
import Section from './Section';

const People = (props) => {
    const {
        filter,
        people,
    } = props;

    return (
        <Section
            name="People"
            count={people.count}
            items={people.results && people.results.map((item) => {
                return {
                    key: item.url,
                    listItem: item.name,
                }
            })}
        />
    )
}

export default withPeople(People);