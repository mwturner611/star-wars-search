import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, ListGroup, ListGroupItem
} from 'reactstrap';
import List from './List';

const Character = (props) => {
  if (props.films.length > 0){
  return (
    <div>
      <Card className="card">
        <CardBody>

        <CardTitle className="title">{props.name}</CardTitle>
          <CardSubtitle></CardSubtitle>
          
            <ListGroup>
              <ListGroupItem><u>Height:</u> {props.height}</ListGroupItem>
              <ListGroupItem><u>Weight:</u> {props.weight}</ListGroupItem>
              <ListGroupItem><u>Hair:</u> {props.hairColor}</ListGroupItem>
              <ListGroupItem><u>Year of Birth:</u> {props.dob}</ListGroupItem>
              <ListGroupItem><u>Species:</u> {props.species}</ListGroupItem>
            </ListGroup>
          
                    <List 
                    films={props.films} 
                    starShips={props.starShips} />

        </CardBody>            
      </Card>
    </div>
  )}else{
    return (<div>Star Wars Rocks</div>)
  }
};

export default Character;