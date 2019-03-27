import React, {
    useEffect,
    useState,
    Suspense,
} from 'react';

import { getFilms } from './api/starWars';
import Details from './components/Details';

const Section = React.lazy(() => import('./components/Section'));
const Tile = React.lazy(() => import('./components/Tile'));


const App = () => {
    const initialFilmsState = {
        count: null,
        next: 'https://swapi.co/api/films/',
        results: [],
    };
    const [films, updateFilmsState] = useState(initialFilmsState);

    useEffect(() => {
        if (films.next !== null) {
            getFilms(films.next).then(data => updateFilmsState({
                count: data.count,
                next: data.next,
                results: data.results.concat(films.results).sort((a, b) => {
                    return a.episode_id - b.episode_id;
                })
            }));
        }
    });

    return (
        <Suspense fallback={<p>Loading</p>}>
            <Tile>
                <Section
                    count={films.count}
                    items={films.results.map((item) => {
                        return {
                            key: item.url,
                            displayText: item.title,
                        }
                    })}
                    name="Films"
                    selectHandler={(e) => {
                        console.log(e.target.href);
                        updateFilmsState({
                            ...films,
                            highlightedItem: films.results.filter(item => item.url === e.target.href)[0]
                        })
                    }}
                />

                {
                    films.highlightedItem &&
                    <Details {...films.highlightedItem} />
                }
            </Tile>
        </Suspense>
    );
}

export default App;
