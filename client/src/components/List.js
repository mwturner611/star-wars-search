import React, {useState} from 'react';
import { CardTitle, ListGroup, ListGroupItem, Collapse, Button, CardBody, Card } from 'reactstrap';


const List = (props) => {

    // setState and function for more/less button
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const renderLists = () => {
        // render when it recieves props
        if(props.films){
          return <div>
                    {/* toggle button for more/less */}
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{isOpen ? "Less" : "More"}</Button>

                    {/* wrap in collapsable */}
                    <Collapse isOpen={isOpen} className="list">

                        {/* put lists in a card */}
                        <Card>
                            <CardBody>
                            <CardTitle className="title">Films</CardTitle>
                                <ListGroup>
                                    
                                    {props.films.map(film => (
                                    <ListGroupItem className="item" key={film}>{film} </ListGroupItem>
                                    ))}
                                    
                                </ListGroup>

                                {/* don't display ships title if no ships */}
                                <CardTitle className="title">{props.starShips.length>0 ? "Star Ships Flown" : ""}</CardTitle>

                                <ListGroup>
                                    
                                    {props.starShips.map(ship => (
                                    <ListGroupItem className="item" key={ship}>{ship} </ListGroupItem>
                                    ))}
                                    
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                
        } else{
          return;
        }
      }
 
    return(
        <div>
            {renderLists()}
		</div>		
    );
}

export default List;