import React, {useState} from 'react';
import { CardTitle, ListGroup, ListGroupItem, Collapse, Button, CardBody, Card } from 'reactstrap';


const List = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    const renderLists = () => {
        if(props.films){
          return <div>
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>More</Button>

                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                            <CardTitle className="title">Films</CardTitle>
                                <ListGroup>
                                    
                                    {props.films.map(film => (
                                    <ListGroupItem key={film}>{film} </ListGroupItem>
                                    ))}
                                    
                                </ListGroup>

                                <CardTitle className="title">Star Ships Flown</CardTitle>
                                <ListGroup>
                                    
                                    {props.starShips.map(ship => (
                                    <ListGroupItem key={ship}>{ship} </ListGroupItem>
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