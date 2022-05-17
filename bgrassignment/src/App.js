
import React from 'react'
import './App.css';
import Movies from './Components/Movies'
import Character from './Components/Character'
import LastMovieDetails from './Components/LastMovieDetails'

function App() {

  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
    },
    {
      id: 3,
      title: 'Some Dummy Movie',
    },
    {
      id: 4,
      title: 'Some Dummy Movie 2',
    }
  ];
  return (
    <React.Fragment>
      <section>
        <h1>Star Wars</h1>
        <Character />
      </section>
      <section>
        <LastMovieDetails />
      </section>
    </React.Fragment>
  );
}

export default App;


