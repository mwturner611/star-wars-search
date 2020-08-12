import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Search = (props) => {
  return (
    <Form inline className="background">

      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">

        <Label for="examplePassword" className="mr-sm-2 form">Search Here!</Label>

          <Input type="text" name="password" id="examplePassword" placeholder="Character Name" className="form" onChange={props.handleInputChange}/>

      </FormGroup>

        <Button className="form" onClick={props.handleFormSubmit}>Search</Button>

    </Form>
  );
}

export default Search;