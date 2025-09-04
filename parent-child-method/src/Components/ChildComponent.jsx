import React from 'react'

const ChildComponent = ({onAction}) => {
  const handleClick = () => {
    onAction('Hello from Child');
  }
  return <button onClick={handleClick}>
    TriggerParentMethod
  </button>
}

export default ChildComponent