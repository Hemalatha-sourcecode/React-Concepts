import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello From Parent";
  const user = {name: "Hema", age: 30};
  return (
    <ChildComponent text={message} userData={user}></ChildComponent>
  )
}

export default ParentComponent