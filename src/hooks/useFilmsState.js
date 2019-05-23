import { useState, useEffect } from 'react';

import { getFilms } from '../api/starWars';

function useFilmsState() {
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
                    return a.episodeNumber - b.episodeNumber;
                })
            }));
        }
    });

    return { films: films, updateFilmsState: updateFilmsState };
}

export default useFilmsState;