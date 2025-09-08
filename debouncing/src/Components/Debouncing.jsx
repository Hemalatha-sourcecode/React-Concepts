import React, { useEffect, useRef, useState } from 'react'

const Debouncing = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const handleInputChange = (event) => {
     setInputValue(event.target.value);
  }

  const timerRef = useRef(null);
  useEffect(()=> {
      if(timerRef.current)  clearTimeout(timerRef.current);
      timerRef.current = setTimeout(()=> {
        setDebouncedValue(inputValue);
      }, 500);
      return () => clearTimeout(timerRef.current);
  }, [inputValue])



  
  return (
    <div>
        <input type="text"
        value={inputValue}
        placeholder='Type Something' 
        onChange={handleInputChange}/>

        <p>Debounced Value: {debouncedValue}</p>
    </div>
  )
}

export default Debouncing