import React, {
    lazy,
    Suspense,
} from 'react';

import useFilmsState from './hooks/useFilmsState';
import usePeopleState from './hooks/usePeopleState';
import { FilmsContext } from './contexts/FilmsContext';
import { PeopleContext } from './contexts/PeopleContext';
const FilmsWithConsumer = lazy(() => import('./components/FilmsContextConsumers/FilmsWithConsumer'));
const Films = lazy(() => import('./components/FilmsContextConsumers/FilmsWithHOC'));
const FilmsWithContextHook = lazy(() => import('./components/FilmsContextConsumers/FilmsWithContextHook'));
const PeopleWithConsumer = lazy(() => import('./components/PeopleContextConsumers/PeopleWithConsumer'));
const People = lazy(() => import('./components/PeopleContextConsumers/PeopleWithHOC'));
const PeopleWithContextHook = lazy(() => import('./components/PeopleContextConsumers/PeopleWithContextHook'));


const App = () => {
    const filmsState = useFilmsState();
    const peopleState = usePeopleState();

    return (
        <Suspense fallback={<p>Loading</p>}>
            <FilmsContext.Provider value={filmsState}>
                <FilmsWithConsumer />
                <Films />
                <FilmsWithContextHook />
            </FilmsContext.Provider>
            <PeopleContext.Provider value={peopleState}>
                <PeopleWithConsumer />
                <People />
                <PeopleWithContextHook />
            </PeopleContext.Provider>
        </Suspense>
    );
}

export default App;
