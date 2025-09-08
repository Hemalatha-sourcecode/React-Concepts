import React, { useState } from 'react'

const Displaydata = () => {
  const [inputValue, setInputValue] = useState('');  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <div>
        <input type="text"
        placeholder='Enter something'
        value={inputValue}
        onChange={handleChange} />
        <br />
         <input type="text"
        placeholder='Displayed Value'
        value={inputValue}
        readOnly />
    </div>
  )
}

export default Displaydata