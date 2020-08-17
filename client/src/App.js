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
  // setState for values
  const [lookup, setLookUp] = useState([]);
  const [character, setCharacter] = useState({});
  const [films, setFilms] = useState([]);
  const [starShips, setStarShips] = useState([]);
  const [species, setSpecies] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  // check the theme and set themeMode
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
   

  // update state lookup value with any entry to search box
 const handleInputChange = (event) => {
    const entered = event.target.value;
    setLookUp(entered)
  };

  // Clear search results
  const clearIt = () => {
    setCharacter('')
    setFilms('')
    setStarShips('')
    setSpecies('')
  };

  // handle submission of form
  const handleFormSubmit = (event) => {
    // remove old data
    clearIt();
    event.preventDefault();

    // launch lookup function
    searchName(lookup);
  };

   // search for character by name parameter
 const searchName = (name) => {
    API.people(name)
        .then(res => {
                // set character info
                setCharacter(res.data.results[0])

                // launch film,ship,species search functions
                searchFilm(res.data.results[0].films)
                searchShips(res.data.results[0].starships)
                searchSpecies(res.data.results[0].species)
              })
        .catch(err => {
          console.log(err)
          alert("Sorry, that names unavailable. Please try again!")
        });
};

// search films,async-await to get all films then setState
const searchFilm = async (filmsArray) => {

  let filmNames = [];

  for (const film of filmsArray) {
    // make axios call in utils folder
   await API.film(film)
    .then(res => 
      filmNames.push(res.data.title))
    .catch(err => console.log(err))
  }
  // set state now that we have all films
  setFilms(filmNames);
};


// search starShips,async-await to get all starShips then setState
const searchShips = async (shipsArray) => {

  let shipNames = [];

  for (const ship of shipsArray) {
    // make axios call in utils folder
    await API.starShip(ship)
      .then(res =>
        shipNames.push(res.data.name))
      .catch(err => console.log(err))
  }
  // set state now that we have all starShips
  setStarShips(shipNames);
};

// search for species name and setState
const searchSpecies = async (speciesURL) => {

  // validate there is a species value before making api call
  if (speciesURL === undefined || speciesURL.length === 0){
    return "not defined";
} else{
  // make axios call in utils folder
  await API.species(speciesURL)
      .then(res =>
          setSpecies(res.data.name))
      .catch(err => console.log(err))}
};

// define character component props in if function, wait until character values then send props to component
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

// validate theme load
if(!mountedComponent) return <div/>
  return (
    // wrap entire app in themeProvider for light/dark theme
    <ThemeProvider theme={themeMode}>
      <>
      {/* bring in global styles */}
      <GlobalStyles/>

        <div className="App">

          {/* title header component */}
          <Header />

          {/* toggle theme button & functionality comp. */}
          <Toggle 
          theme={theme}
          toggleTheme={themeToggler}
          />
            
          {/* search bar component */}
          <Search 
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          clearIt={clearIt}
          />

          {/*function calling Character component if props */}
          {renderCharacter()}
      
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
