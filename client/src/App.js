import React, {useState} from 'react';
import './App.css';
import API from "./util/API";
import Search from "./components/Search";
import Header from "./components/Header";
import Character from "./components/Character";
import Toggle from "./components/Toggle";
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/GlobalStyles';
import {lightTheme, darkTheme} from './components/Theme';
import {useDarkMode} from "./components/useDarkMode";

function App() {
  const [lookup, setLookUp] = useState([]);
  const [character, setCharacter] = useState({});
  const [films, setFilms] = useState([]);
  const [starShips, setStarShips] = useState([]);
  const [species, setSpecies] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

const themeMode = theme === 'light' ? lightTheme : darkTheme;
   

  // update state search with any entry to search box
 const handleInputChange = (event) => {
    const entered = event.target.value;
    setLookUp(entered)
  };

  // Clear search results
  const clearIt = (event) => {
    setFilms('')
    setStarShips('')
    setSpecies('')
  };

  // handle submission of form
  const handleFormSubmit = (event) => {
    clearIt();
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
                searchSpecies(res.data.results[0].species)
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

// search for species name and setState
const searchSpecies = async (speciesURL) => {

  if (speciesURL === undefined || speciesURL.length == 0){
    return "not defined";
} else{
  await API.species(speciesURL)
      .then(res =>
          setSpecies(res.data.name))
      .catch(err => console.log(err))}
};

const renderCharacter = () => {
  if(character){
    return <Character
    name={character.name}
    height={character.height}
    weight={character.mass}
    hairColor={character.hair_color}
    dob={character.birth_year}
    species={species}
    films={films}
    starShips={starShips}
    
  />
  } else{
    return;
  }
}

if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
    <div className="App">
      <Header />
      <Toggle 
       theme={theme}
       toggleTheme={themeToggler}
      />
      
      <Search 
      handleInputChange={handleInputChange}
      handleFormSubmit={handleFormSubmit}
      clearIt={clearIt}
      />
      {renderCharacter()}
      
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
