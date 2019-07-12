import React, { lazy } from 'react';

import { FilmsContext } from '../../contexts/FilmsContext';

const Tile = lazy(() => import('../Tile'));
const Section = lazy(() => import('../Section'));
const Details = lazy(() => import('../Details'));

const FilmsWithConsumer = () => {
    return (
        <Tile>
            <FilmsContext.Consumer>
                {({films, updateFilmsState}) => (
                    <>
                        <Section
                            count={films.count}
                            items={films.results.map((item) => {
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
                    </>
                )}
            </FilmsContext.Consumer>
        </Tile>
    )
}

export default FilmsWithConsumer;