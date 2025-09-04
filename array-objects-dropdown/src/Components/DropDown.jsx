import React, { useState } from 'react'

const DropDown = () => {

  const fruits = ['apple', 'banana', 'orange'];

  const countries = [{
    id:1, name: 'India'
  },{
    id:2, name: 'USA'
  },{
    id:1, name: 'Canada'
  }]

  const [selectedFruit, setSelectedFruit] = useState('');
  const [selectedCountryId, setSelectedCountryId] = useState('');
  return (
    <div>
        <select value="selectedFruit" onChange={(e)=>{setSelectedFruit(e.target.value)}}>
            <option value="" disable> Select Fruit </option>
                {fruits.map((fruit, index)=>(
                    <option key={index} value={fruit}>{fruit}</option>
                ))}
           

        </select>
        <p>Selected Fruit: {selectedFruit}</p>

        <select value="selectedCountryId" onChange={(e)=>setSelectedCountryId(e.target.value)}>
            <option value="" disabled>Select Country</option>
            {countries.map((country)=>(
                <option key={country.id} value={country.id}>{country.name}</option>
            ))}
        </select>
        <p>Selected Country Id: {selectedCountryId}</p>
    </div>
   
  )
}

export default DropDown