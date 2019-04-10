import React, {
    lazy,
    Suspense,
} from 'react';

import useFilmsState from './hooks/useFilmsState';

const Details = lazy(() => import('./components/Details'));
const Section = lazy(() => import('./components/Section'));
const Tile = lazy(() => import('./components/Tile'));


const App = () => {
    const filmsState = useFilmsState();

    return (
        <Suspense fallback={<p>Loading</p>}>
            <Tile>
                <Section
                    count={filmsState.films.count}
                    items={filmsState.films.results.map((item) => {
                        return {
                            key: item.url,
                            displayText: item.title,
                        }
                    })}
                    name="Films"
                    selectHandler={(e) => {
                        filmsState.updateFilmsState({
                            ...filmsState.films,
                            highlightedItem: filmsState.films.results.filter(item => item.url === e.target.href)[0]
                        })
                    }}
                />

                {
                    filmsState.films.highlightedItem &&
                    <Details {...filmsState.films.highlightedItem} />
                }
            </Tile>
        </Suspense>
    );
}

export default App;
