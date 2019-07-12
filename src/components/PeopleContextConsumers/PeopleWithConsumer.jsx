import React, { lazy } from 'react';

import { PeopleContext } from '../../contexts/PeopleContext';

const Tile = lazy(() => import('../Tile'));
const Section = lazy(() => import('../Section'));
const Details = lazy(() => import('../Details'));

const PeopleWithConsumer = () => {
    return (
        <Tile>
            <PeopleContext.Consumer>
                {({people, updatePeopleState}) => (
                    <>
                        <Section
                            count={people.count}
                            items={people.results.map((item) => {
                                return {
                                    key: item.url,
                                    displayText: item.title,
                                }
                            })}
                            name="Films"
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
                    </>
                )}
            </PeopleContext.Consumer>
        </Tile>
    )
}

export default PeopleWithConsumer;