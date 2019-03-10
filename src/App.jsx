import React, {
    Component,
    Suspense,
} from 'react';

import {FilmsContext} from './contexts/FilmsContext';
import { getFilms } from './api/starWars';
const Tile = React.lazy(() => import('./components/Tile'));
const Films = React.lazy(() => import('./components/Films'));


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: {
                next: null
            }
        };
    }

    componentDidMount() {
        getFilms().then(data => this.setState({films: data}));
    }

    componentDidUpdate(prevProps, prevState) {
        const {films} = this.state;

        if (films && prevState.films && (films.next !== prevState.films.next) && films.next !== null) {
            getFilms(films.next).then(data => this.setState({
                films: {
                    count: data.count,
                    next: data.next,
                    results: data.results.concat(films.results)
                }
            }));
        }
    }

    render() {
        const {
            films,
        } = this.state;

        return (
            <div className="App">
                <Suspense fallback={<p>Loading</p>}>
                    <FilmsContext.Provider value={films}>
                        <Tile>
                            <Films/>
                        </Tile>
                    </FilmsContext.Provider>
                </Suspense>
            </div>
        );
    }
}

export default App;
