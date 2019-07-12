import React, {
    lazy,
    Suspense,
} from 'react';

import useFilmsState from './hooks/useFilmsState';
import { FilmsContext } from './contexts/FilmsContext';
const FilmsWithConsumer = lazy(() => import('./components/FilmsWithConsumer'));
const Films = lazy(() => import('./components/FilmsWithHOC'));
const FilmsWithContextHook = lazy(() => import('./components/FilmsWithContextHook'));


const App = () => {
    const filmsState = useFilmsState();

    return (
        <Suspense fallback={<p>Loading</p>}>
            <FilmsContext.Provider value={filmsState}>
                <FilmsWithConsumer />
                <Films />
                <FilmsWithContextHook />
            </FilmsContext.Provider>
        </Suspense>
    );
}

export default App;
