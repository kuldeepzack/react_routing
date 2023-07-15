
import React, { useState } from 'react';
import "./Api.css"

const Api = () => {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [responseData, setResponseData] = useState("");
  const [filteredList, setFilteredList] = useState("");
  const [status, setStatus] = useState(false);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const fetchData = () => {
    fetch(url, { method })
      .then(response => response.json())
      .then(data => { setResponseData(data.data); setFilteredList(data.data) })
      .catch(error => console.log(error));
  };

  const filterBySearch = (event) => {
    if (event.target.value !== "") {
      let updatedList = responseData?.filter((item) => {
        return item.first_name.includes(event.target.value);
      });


      if (updatedList)
        setFilteredList(updatedList);
      setStatus(true);
    }
    else {
      setFilteredList(responseData)
      setStatus(false);
    }
  };

  return (
    <>
      <div className='api'>

        <select value={method} onChange={handleMethodChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>

        <input type="text" value={url} onChange={handleUrlChange} />
        <button onClick={fetchData}>Submit</button>

        <div className="ap">Search:
          <input id="search-box" onChange={filterBySearch} />
        </div>

        {responseData && (
          <div>
            <h2>{!status ?
              "Response Data" : "Filtered data"
            }</h2>
            
            <pre>{JSON.stringify(filteredList, null, 2)}</pre>

          </div>
        )}

        {/* {responseData && responseData?.map((data, index) => {
        
          return (
            <ol className='list-group-item'>

              <ul className='list-group-item' key={index}>{data.name}{"  "}{data.year}</ul>

            </ol>
          )
        })} */}

      </div>
      
    </>
  );
};



export default Api;