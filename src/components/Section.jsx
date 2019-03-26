import React, { lazy, Suspense, memo } from 'react';

const List = lazy(() => import('./List'));
const ListItem = lazy(() => import('./ListItem'));
const LinkItem = lazy(() => import('./LinkItem'));
const Heading = lazy(() => import('./Heading'));

const Section = ({ name, count, items, selectHandler }) => {

    return (
        <Suspense fallback={<p>Loading</p>}>
            <Heading
                headingText={name}
                headingSubText={count ? `Data about all ${count} star wars ${name.toLowerCase()}` : null}
            />
            {
                items &&
                <Suspense fallback={<p>Loading</p>}>
                    <List ordered roman>
                        {
                            items.map(item => {
                                return (
                                    <ListItem key={item.key}>
                                        <LinkItem
                                            linkItemUrl={item.key}
                                            linkItemText={item.displayText}
                                            clickHandler={selectHandler}
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

export default memo(Section);