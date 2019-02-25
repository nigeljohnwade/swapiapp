import React, { Fragment } from 'react';

import { FilmsContext } from './FilmsContext';
import Heading from './components/Heading';
import UnorderedList from './components/UnorderedList';

class Films extends React.Component {
    render() {
        const films = this.context;
        return (
            <Fragment>
                <Heading
                    headingText="Films"
                    headingSubText={`Data about all ${films.count} star wars films`}
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
    }
}

Films.contextType = FilmsContext;
export default Films;