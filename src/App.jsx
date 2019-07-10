import React, {
    lazy,
    Suspense,
} from 'react';

import useFilmsState from './hooks/useFilmsState';
import { FilmsContext } from './contexts/FilmsContext';
const FilmsTile = lazy(() => import('./components/FilmsTile'));


const App = () => {
    const filmsState = useFilmsState();

    return (
        <Suspense fallback={<p>Loading</p>}>
            <FilmsContext.Provider value={filmsState}>
                <FilmsTile />
            </FilmsContext.Provider>
        </Suspense>
    );




}

export default App;
