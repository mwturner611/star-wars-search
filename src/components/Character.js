import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import List from './List';

const Character = (props) => {
  if (props.films.length > 0){
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.name}</h1>

            <ul className="lead">
              <li>Height: {props.height}</li>
              <li>Weight: {props.weight}</li>
              <li>Hair: {props.hairColor}</li>
              <li>Year of Birth: {props.dob}</li>
              <li>species: {props.species}</li>
            </ul>
            

                <hr className="my-2" />
                <List 
                films={props.films} 
                starShips={props.starShips} />

            
      </Jumbotron>
    </div>
  )}else{
    return (<div>Star Wars Rocks</div>)
  }
};

export default Character;