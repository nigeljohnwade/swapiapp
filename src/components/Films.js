import React from 'react';

import { withFilms } from '../contexts/FilmsContext';
import Section from './Section';

const Films = (props) => {
    const {
        films,
    } = props;

    return (
        <Section
            name="Films"
            count={films.count}
            items={films.results && films.results.map((item) => {
                return {
                    key: item.url,
                    listItem: item.title,
                }
            })}
        />
        )
}

export default withFilms(Films);