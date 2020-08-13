import React, {useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const List = (props) => {

    const films = props.films;
    const starShips = props.starShips;
    

 
    return(
        <div>
            <h3>Films</h3>
            <ul>
                
            {props.films.map(film => (
                    <li>{film} </li>
                ))}
            
            </ul>

            <h3>Star Ships Flown</h3>
            <ul>
                {props.starShips.map(starShip => (
                    <li>{starShip} </li>
                ))}

            </ul>
		</div>		
    );
}

export default List;