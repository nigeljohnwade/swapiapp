import React, { lazy, Suspense } from 'react';

const List = lazy(() => import('./List'));
const ListItem = lazy(() => import('./ListItem'));
const LinkItem = lazy(() => import('./LinkItem'));
const Heading = lazy(() => import('./Heading'));

const Section = (props) => {
    const {
        name,
        count,
        items,
    } = props;

    return (
        <Suspense fallback={<p>Loading</p>}>
            <Heading
                headingText={name}
                headingSubText={count ? `Data about all ${count} star wars ${name.toLowerCase()}` : null}
            />
            {
                items &&
                <Suspense fallback={<p>Loading</p>}>
                    <List>
                        {
                            items.map(item => {
                                return (
                                    <ListItem key={item.key}>
                                        <LinkItem
                                            linkItemUrl={item.key}
                                            linkItemText={item.displayText}
                                        />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Suspense>
            }
        </Suspense>
    )

}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(Section, areEqual);