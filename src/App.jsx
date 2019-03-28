import React, {
    useEffect,
    useState,
    Suspense,
} from 'react';

import useFilmsState from './hooks/useFilmsState';
import Details from './components/Details';

const Section = React.lazy(() => import('./components/Section'));
const Tile = React.lazy(() => import('./components/Tile'));


const App = () => {
    const films = useFilmsState();

    return (
        <Suspense fallback={<p>Loading</p>}>
            <Tile>
                <Section
                    count={films.films.count}
                    items={films.films.results.map((item) => {
                        return {
                            key: item.url,
                            displayText: item.title,
                        }
                    })}
                    name="Films"
                    selectHandler={(e) => {
                        console.log(e.target.href);
                        films.updateFilmsState({
                            ...films.films,
                            highlightedItem: films.films.results.filter(item => item.url === e.target.href)[0]
                        })
                    }}
                />

                {
                    films.films.highlightedItem &&
                    <Details {...films.films.highlightedItem} />
                }
            </Tile>
        </Suspense>
    );
}

export default App;
