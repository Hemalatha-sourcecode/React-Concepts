import React, {useState} from 'react';

  const countries = [
    {id: "in", name: "India"},
    {id: "us", name: "USA"}
   ];

   const states = {
       in: [
      { id: "mh", name: "Maharashtra"},
      { id:"tg", name: "Telangana"}
     ],
      us: [
        {id: "ca", name: "California"}, 
        {id: "ny", name: "New York"}
    ]
   }

const SelectSecondOnFirst = () => {
  
    const[selectedCountry, setSelectedCountry] = useState("");
    const[selectedState, setSelectedState] = useState("");

    const handleCountryChange =(e) => {
        setSelectedCountry(e.target.value);
        setSelectedState("");
    }

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    }

  return (
    <div>
        <label>
            Country: {" "}
            <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">--Select Country -- </option>
                {countries.map((country)=>(
                    <option key={country.id} value={country.id}>{country.name}</option>
                ))}
            </select>
        </label>

        <br />

        <label>
            State: {" "}
            <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
               <option value="">--Select State--</option>
               {selectedCountry && 
                states[selectedCountry]?.map((state)=>(
                    <option key={state.id} value={state.id}>{state.name}</option>
                ))
               }
            </select>
        </label>
    </div>
  )
}

export default SelectSecondOnFirst