import React, { lazy } from 'react';

import { withFilms } from '../../contexts/FilmsContext';

const Tile = lazy(() => import('../Tile'));
const Section = lazy(() => import('../Section'));
const Details = lazy(() => import('../Details'));

const FilmsWithHOC = (props) => {
    const {films, updateFilmsState} = props.films;

    return (
        <Tile>
            <Section
                count={films.count}
                items={films.results && films.results.map((item) => {
                    return {
                        key: item.url,
                        displayText: item.title,
                    }
                })}
                name="Films"
                selectHandler={(e) => {
                    updateFilmsState({
                        ...films,
                        highlightedItem: films.results.filter(item => item.url === e.target.href)[0]
                    })
                }}
            />
            {
                films.highlightedItem &&
                <Details {...films.highlightedItem} />
            }
        </Tile>
    )
}

export default withFilms(FilmsWithHOC);