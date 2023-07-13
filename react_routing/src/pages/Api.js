
import React, { useState } from 'react';
import "./Api.css"

const Api = () => {
  
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [responseData, setResponseData] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const fetchData = () => {
    
    fetch(url, { method })
      .then(response => response.json())
      .then(data => setResponseData(data))
      .catch(error => console.log(error));
  };

  return (
    <div className='api'>
       
      <select value={method} onChange={handleMethodChange}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>

      <input type="text" value={url} onChange={handleUrlChange} />

      <button onClick={fetchData}>Submit</button>

      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};



export default Api;