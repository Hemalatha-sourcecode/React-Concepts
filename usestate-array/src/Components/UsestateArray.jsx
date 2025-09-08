import React, {useState} from 'react'

const UsestateArray = () => {
    const [items, setItems] = useState([]);

    const addItem =(newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    }
  return (
        <>
          <button onClick={()=>addItem("New Item")}> Add Item </button>
          <ul>
            {items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
          </ul>
        </>
  )
}

export default UsestateArray