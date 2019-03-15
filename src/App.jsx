import React, {
    Component,
    Suspense,
} from 'react';

import { FilmsContext } from './contexts/FilmsContext';
import { PeopleContext } from './contexts/PeopleContext';
import { getFilms, getPeople } from './api/starWars';
const Tile = React.lazy(() => import('./components/Tile'));
const Films = React.lazy(() => import('./components/Films'));
const People = React.lazy(() => import('./components/People'));


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: {
                count: null,
                next: null,
                results: [],
            },
            people: {
                count: null,
                next: null,
                results: [],
            },
            filter: {
                value: 'https://swapi.co/api/films/1/'
            }
        };
    }

    componentDidMount() {
        getFilms().then(data => this.setState({ films: data }));
        getPeople().then(data => this.setState({ people: data }));
    }

    componentDidUpdate(prevProps, prevState) {
        const { films, people } = this.state;

        if (films && prevState.films && (films.next !== prevState.films.next) && films.next !== null) {
            getFilms(films.next).then(data => this.setState({
                films: {
                    count: data.count,
                    next: data.next,
                    results: data.results.concat(films.results)
                }
            }));
        }

        if (people && prevState.people && (people.next !== prevState.people.next) && people.next !== null) {
            getPeople(people.next).then(data => this.setState({
                people: {
                    count: data.count,
                    next: data.next,
                    results: data.results.concat(people.results)
                }
            }));
        }
    }

    render() {
        const {
            films,
            filter,
            people,
        } = this.state;

        return (
            <div className="App">
                <Suspense fallback={<p>Loading</p>}>
                    <FilmsContext.Provider value={films} >
                        <Tile>
                            <Films />
                        </Tile>
                    </FilmsContext.Provider>
                </Suspense>
                {/* <Suspense fallback={<p>Loading</p>}>
                    <PeopleContext.Provider value={people}>
                        <Tile>
                            <People filter={filter}/>
                        </Tile>
                    </PeopleContext.Provider>
                </Suspense> */}
            </div>
        );
    }
}

export default App;
