import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Search = (props) => {

  return (
    <Form inline>

      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">

        <Label for="examplePassword" className="mr-sm-2 form">Search Here!</Label>

          <Input type="text" name="text" placeholder="Character Name" className="form" value={props.lookup} onChange={props.handleInputChange}/>

      </FormGroup>

        <Button className="form btn" onClick={props.handleFormSubmit}>Search</Button>
        <Button className="form btn" onClick={props.clearIt}>Clear</Button>

    </Form>
  );
}

export default Search;