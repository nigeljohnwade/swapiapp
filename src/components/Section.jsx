import React, { Fragment, Suspense } from 'react';

// import Heading from './Heading';
// import UnorderedList from './UnorderedList';

const UnorderedList = React.lazy(() => import('./UnorderedList'));
const Heading = React.lazy(() => import('./Heading'));

const Section = (props) => {
    console.log('render section', props);

    return (
        <Fragment>
            <Suspense fallback={<p>Loading</p>}>
                <Heading
                    headingText={props.section.name}
                    headingSubText={props.section.count ? `Data about all ${props.section.count} star wars ${props.section.name.toLowerCase()}` : null}
                />
                {
                    props.section.items &&
                    <Suspense fallback={<p>Loading</p>}>
                        <UnorderedList items={props.section.items} />
                    </Suspense>
                }
            </Suspense>
        </Fragment>
    )

}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(Section, areEqual);