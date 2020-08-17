import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Search = (props) => {

  return (
    <Form inline>

      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">

        <Label for="examplePassword" className="mr-sm-2 form">Search Here!</Label>

        <Input type="text" name="text" placeholder="Character Name" className="form" value={props.lookup} onChange={props.handleInputChange}/>

      </FormGroup>

        <Button color="info" className="form SearchBtns" onClick={props.handleFormSubmit}>Search</Button>
        <Button color="warning" className="form SearchBtns" onClick={props.clearIt}>Clear</Button>

    </Form>
  );
}

export default Search;