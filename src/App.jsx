import React, {
    lazy,
    Suspense,
} from 'react';

import useFilmsState from './hooks/useFilmsState';
import { FilmsContext } from './contexts/FilmsContext';
const FilmsWithConsumer = lazy(() => import('./components/FilmsContextConsumers/FilmsWithConsumer'));
const Films = lazy(() => import('./components/FilmsContextConsumers/FilmsWithHOC'));
const FilmsWithContextHook = lazy(() => import('./components/FilmsContextConsumers/FilmsWithContextHook'));


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
