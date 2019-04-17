import React, {
    lazy,
    Suspense,
} from 'react';

import useFilmsState from './hooks/useFilmsState';

const FilmsTile = lazy(() => import('./components/FilmsTile'));


const App = () => {
    const filmsState = useFilmsState();

    return (
        <Suspense fallback={<p>Loading</p>}>
            <FilmsTile films={filmsState} />
        </Suspense>
    );




}

export default App;
