import React, { useState, useEffect } from 'react'

const DataFetcher = ({apiUrl}) => {
 const[data, setData] = useState(null);
 const[loading, setLoading] = useState(true);
 const[error,setError]=useState(null);

  useEffect(()=>{
    setLoading(true);
    setError(null);
    fetch(apiUrl)
      .then((response)=>{
          if(!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
      })
    .then((json)=>{
        setData(json);
        setLoading(false);
    }).catch((err)=>{
        setError(err.message || "Something went wrong");
        setLoading(false);
    })
  },[apiUrl])

  if(loading) return <p>Loading....</p>
  if(error) return <p>Error..{error}</p>

  return (
    <div>
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    </div>
  )
}

export default DataFetcher