import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <h1>
            {props.text}
        </h1>
        <p>Name: {props.userData.name}, Age: {props.userData.age}</p>
    </div>
  )
}

export default ChildComponent