import React, { Fragment } from 'react';

import { FilmsContext } from './FilmsContext';
import Heading from './components/Heading';
import UnorderedList from './components/UnorderedList';

const Films = () => {
    return (
        <FilmsContext.Consumer>
            {(films) => {
                return (
                    <Fragment>
                        <Heading
                            headingText="Films"
                            headingSubText={films.count ? `Data about all ${films.count} star wars films` : null}
                        />
                        {
                            films.results &&
                            <UnorderedList items={films.results.map((item) => {
                                return {
                                    key: item.url,
                                    listItem: item.title,
                                }
                            })} />
                        }
                    </Fragment>
                )
            }}
        </FilmsContext.Consumer>
    )

}

export default Films;