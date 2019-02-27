import React, { Fragment } from 'react';

import { withFilms } from './FilmsContext';
import Heading from './components/Heading';
import UnorderedList from './components/UnorderedList';

const Films = (props) => {
    const { section } = props;
    return (
        <Fragment>
            <Heading
                headingText={section.name}
                headingSubText={section.count ? `Data about all ${section.count} star wars films` : null}
            />
            {
                section.items &&
                <UnorderedList items={section.items} />
            }
        </Fragment>
    )

}

export default withFilms(Films);