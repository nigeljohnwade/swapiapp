import React, { Fragment } from 'react';

import Heading from './Heading';
import UnorderedList from './UnorderedList';

const Section = (props) => {
    console.log('render section', props);

    return (
        <Fragment>
            <Heading
                headingText={props.section.name}
                headingSubText={props.section.count ? `Data about all ${props.section.count} star wars ${props.section.name.toLowerCase()}` : null}
            />
            {
                props.section.items &&
                <UnorderedList items={props.section.items} />
            }
        </Fragment>
    )

}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(Section, areEqual);