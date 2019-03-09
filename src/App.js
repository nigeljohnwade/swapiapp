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
            people: {
                next: null
            },
            films: {
                next: null
            }
        };
    }

    componentDidMount() {
        getFilms().then(data => this.setState({films: data}));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.films && prevState.films && (this.state.films.next !== prevState.films.next) && this.state.films.next !== null) {
            getFilms(this.state.films.next).then(data => this.setState({
                films: {
                    count: data.count,
                    next: data.next,
                    results: data.results.concat(this.state.films.results)
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
