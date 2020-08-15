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

  // Clear search results
  const clearIt = (event) => {
    setLookUp('')
    setCharacter('')
    setFilms('')
    setStarShips('')
  };

  // handle submission of form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchName(lookup);
  };

  // search for character by name
 const searchName = (name) => {
    API.people(name)
        .then(res => {
                setCharacter(res.data.results[0])
                searchFilm(res.data.results[0].films)
                searchShips(res.data.results[0].starships)
                
              })
        .catch(err => console.log(err));
};

// search for film titles, use async-await to get each film before setState
const searchFilm = async (filmsArray) => {

  let filmNames = [];

  for (const film of filmsArray) {
   await API.film(film)
    .then(res => 
      filmNames.push(res.data.title))
    .catch(err => console.log(err))
  }
  setFilms(filmNames);
};


// search for star ship names and setState
const searchShips = async (shipsArray) => {

  let shipNames = [];

  for (const ship of shipsArray) {
    await API.starShip(ship)
      .then(res =>
        shipNames.push(res.data.name))
      .catch(err => console.log(err))
  }
  setStarShips(shipNames);
};

const renderCharacter = () => {
  if(character){
    return <Character
    name={character.name}
    height={character.height}
    weight={character.mass}
    hairColor={character.hair_color}
    dob={character.birth_year}
    species={character.species}
    films={films}
    starShips={starShips}
  />
  } else{
    return;
  }
}

  return (
    <div className="App">
      <Header />
      <Search 
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}
      clearIt={clearIt}
      />
      {renderCharacter()}
      
    </div>
  );
}

export default App;
