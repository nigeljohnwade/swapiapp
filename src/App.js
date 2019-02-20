import React, { Component } from 'react';

import './App.css';
import {
    getPeople,
    getPlanets,
    getStarships,
    getVehicles,
    getFilms,
    getSpecies,
} from './api/starWars';

const FilmContext = React.createContext({});
const PeopleContext = React.createContext({});
const PlanetsContext = React.createContext({});
const StarshipsContext = React.createContext({});
const SpeciesContext = React.createContext({});
const VehiclesContext = React.createContext({});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: {
                next: null
            }
        };
    }
    componentDidMount() {
        getPeople().then(data => this.setState({ people: data }));
        getPlanets().then(data => this.setState({ planets: data }));
        getStarships().then(data => this.setState({ planets: data }));
        getVehicles().then(data => this.setState({ vehicles: data }));
        getFilms().then(data => this.setState({ films: data }));
        getSpecies().then(data => this.setState({ species: data }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.people && prevState.people && (this.state.people.next !== prevState.people.next) && this.state.people.next !== null) {
            getPeople(this.state.people.next).then(data => this.setState({
                people: {
                    count: data.count,
                    next: data.next,
                    results: data.results.concat(this.state.people.results)
                }
            }));
        }
    }

    render() {
        const {
            people,
            planets,
            starships,
            vehicles,
            films,
            species,
        } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <FilmContext.Provider value={films}>
                        {films &&
                            <p>Data about all {films.count} star wars films</p>
                        }
                        {films && films.results.map((film) => {
                            return <p>{film.title}</p>
                        })}
                    </FilmContext.Provider>
                    <PeopleContext.Provider value={people}>
                        {people &&
                            <p>Data about all {people.count} star wars people</p>
                        }
                        {people && people.results && people.results.map((person) => {
                            return <p>{person.name}</p>
                        })}
                    </PeopleContext.Provider>
                    <PlanetsContext.Provider value={planets}>
                        {planets &&
                            <p>Data about all {planets.count} star wars planets</p>
                        }
                    </PlanetsContext.Provider>
                    <StarshipsContext.Provider value={starships}>
                        {starships &&
                            <p>Data about all {starships.count} star wars starships</p>
                        }
                    </StarshipsContext.Provider>
                    <VehiclesContext.Provider value={vehicles}>
                        {vehicles &&
                            <p>Data about all {vehicles.count} star wars vehicles</p>
                        }
                    </VehiclesContext.Provider>
                    <SpeciesContext.Provider value={species}>
                        {species &&
                            <p>Data about all {species.count} star wars species</p>
                        }
                    </SpeciesContext.Provider>
                </header>
            </div>
        );
    }
}

export default App;
