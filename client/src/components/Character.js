import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, ListGroup, ListGroupItem
} from 'reactstrap';
import List from './List';

// character info component
const Character = (props) => {
  // only load if the app.js passes down props
  if (props.films.length > 0){
  return (
    <div>
      <Card className="card">
        <CardBody>

        <CardTitle className="title">{props.name}</CardTitle>
          <CardSubtitle></CardSubtitle>
          
            <ListGroup>
              <ListGroupItem className="item"><u>Height:</u> {props.height}</ListGroupItem>
              <ListGroupItem className="item"><u>Weight:</u> {props.weight}</ListGroupItem>
              <ListGroupItem className="item"><u>Hair:</u> {props.hairColor}</ListGroupItem>
              <ListGroupItem className="item"><u>Year of Birth:</u> {props.dob}</ListGroupItem>
              <ListGroupItem className="item"><u>Species:</u> {props.species}</ListGroupItem>
            </ListGroup>
          
                    {/* pass props to child component */}
                    <List 
                    films={props.films} 
                    starShips={props.starShips} />

        </CardBody>            
      </Card>
    </div>
  )}else{
    // display nothing if no props are passed down
    return (<div></div>)
  }
};

export default Character;