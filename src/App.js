import React, {useState} from 'react';
import './App.css';
import API from "./util/API";
import Search from "./components/Search";
import Header from "./components/Header";
import Character from "./components/Character";

function App() {
  const [lookup, setLookUp] = useState([]);
  const [character, setCharacter] = useState({});
  const [films, setFilms] = useState([]);
  const [starShips, setStarShips] = useState([]);  

  // update state search with any entry to search box
 const handleInputChange = (event) => {
    const entered = event.target.value;
    setLookUp(entered)
  };

  // handle submission of form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchName(lookup);
  };

  // search for character by name
 const searchName = (name) => {
    API.people(name)
        .then(res =>{
                setCharacter(res.data.results[0])
                searchFilm(res.data.results[0].films)
                searchShips(res.data.results[0].starships)
                
              })
        .catch(err => console.log(err));
};

// search for film titles and setState
const searchFilm = (filmsArray) => {

  let filmNames = [];

  filmsArray.map (film => (
    API.film(film)
    .then(res =>{
      filmNames.push(res.data.title)
      setFilms(filmNames)
    })
  .catch(err => console.log(err))
  ))
  
};


// search for star ship names and setState
const searchShips = (shipsArray) => {

  let shipNames = [];

  shipsArray.map (ship => (
    API.starShip(ship)
    .then(res =>{
      shipNames.push(res.data.name)
      setStarShips(shipNames)
    })
  .catch(err => console.log(err))
  ))
  
};

  return (
    <div className="App">
      <Header />
      <Search 
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}      
      />
      <Character
        name={character.name}
        height={character.height}
        weight={character.mass}
        hairColor={character.hair_color}
        dob={character.birth_year}
        species={character.species}
        films={films}
        starShips={starShips}
      />
    </div>
  );
}

export default App;
