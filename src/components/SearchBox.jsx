import React from 'react';
import { InputGroup, FormControl, Button } from "react-bootstrap";


export const SearchBox = () => {
  return (
    <div className="d-flex align-items-center mb-4">
      <InputGroup className='me-4'>
        <FormControl placeholder='Search For News...' />
      </InputGroup>
      <Button variant='success' disabled={true}>Search</Button>
    </div>
  );
};
