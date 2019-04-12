import React, { lazy } from 'react';

const Tile = lazy(()=>import('./Tile'));
const Section = lazy(()=> import('./Section'));
const Details = lazy(()=> import('./Details'));

const FilmsTile = ({ films }) => {
    return (
        <Tile>
            <Section
                count={films.films.count}
                items={films.films.results.map((item) => {
                    return {
                        key: item.url,
                        displayText: item.title,
                    }
                })}
                name="Films"
                selectHandler={(e) => {
                    films.updateFilmsState({
                        ...films.films,
                        highlightedItem: films.films.results.filter(item => item.url === e.target.href)[0]
                    })
                }}
            />

            {
                films.films.highlightedItem &&
                <Details {...films.films.highlightedItem} />
            }
        </Tile>
    )
}

export default FilmsTile;