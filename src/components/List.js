import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const List = (props) => {

    const films = props.films;
    const starShips = props.starShips;

    if (!films) {
        return null;
    }

    return(
        <div>
            <h3>Films</h3>
            <ul>
                
                {films.map(film => (
                    <li>{film} </li>
                ))}
            
            </ul>

            <h3>Star Ships Flown</h3>
            <ul>
                {starShips.map(starShip => (
                    <li>{starShip} </li>
                ))}

            </ul>
		</div>		
    );
}

export default List;