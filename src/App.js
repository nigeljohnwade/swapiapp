import React, {
    Component,
    Suspense,
} from 'react';

import { FilmsContext } from './contexts/FilmsContext';
import Films from './components/Films';

import {
    getFilms,
} from './api/starWars';

const Section = React.lazy(() => import('./components/Section'));


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
        getFilms().then(data => this.setState({ films: data }));
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
                <FilmsContext.Provider value={films}>
                    <Suspense fallback={<p>Loading</p>}>
                        <Films/>
                    </Suspense>
                </FilmsContext.Provider>
            </div>
        );
    }
}

export default App;
