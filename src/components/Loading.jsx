import React from 'react';
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner animation='border' />
    </div>
  );
};
