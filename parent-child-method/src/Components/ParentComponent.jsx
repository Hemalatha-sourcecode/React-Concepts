import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleChildAction =(data) => {
    console.log('Method invoked from Child!', data);
  }

  return (
    <ChildComponent onAction={handleChildAction}></ChildComponent>
  )
}

export default ParentComponent