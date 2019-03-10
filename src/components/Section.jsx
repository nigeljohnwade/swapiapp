import React, {Fragment, Suspense} from 'react';

// import Heading from './Heading';
// import UnorderedList from './UnorderedList';

const UnorderedList = React.lazy(() => import('./UnorderedList'));
const Heading = React.lazy(() => import('./Heading'));

const Section = (props) => {
    const {
        name,
        count,
        items,
    } = props;
    console.log('render section', props);

    return (
        <Suspense fallback={<p>Loading</p>}>
            <Heading
                headingText={name}
                headingSubText={count ? `Data about all ${count} star wars ${name.toLowerCase()}` : null}
            />
            {
                items &&
                <Suspense fallback={<p>Loading</p>}>
                    <UnorderedList items={items}/>
                </Suspense>
            }
        </Suspense>
    )

}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(Section, areEqual);