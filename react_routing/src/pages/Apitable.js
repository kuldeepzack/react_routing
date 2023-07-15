import React, {useState} from 'react'
import "./Apitable.css"
import { ColorRing } from  'react-loader-spinner';


const Apitable = () => {
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");
    const [responseData, setResponseData] = useState("");
    const [filteredList, setFilteredList] = useState();
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleMethodChange = (event) => {
        setMethod(event.target.value);
    };


    const fetchData = () => {
        setTimeout(() => {
            fetch(url, { method })
            .then(response => response.json())
            .then(data => { setResponseData(data.data); setFilteredList(data.data) })
            .catch(error => console.log(error));
        }, 1000);
        
          
    };

    const filterBySearch = (event) => {
        if (event.target.value !== "") {
            let updatedList = responseData?.filter((item) => {
                // return (item.responseData).toLowerCase().includes((event.target.value).toLowerCase());
                return (item.email).toLowerCase().includes((event.target.value).toLowerCase());

               

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
        <div className='Apitable'>
            <select value={method} onChange={handleMethodChange}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>

            <input type="text" value={url} onChange={handleUrlChange} />
            <button onClick={fetchData}>Submit{loading ? "Loading...":" "}</button>
            {loading && 
        <ColorRing
 
  height="90"
  width="90"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}
            <div className="ap">Search:
                <input id="search-box" onChange={filterBySearch} />
            </div>

            <h2>{!status ?
              "Response Data" : "Filtered data"
            }</h2>

            <div className='table'>
                <table border={3 }>
                    <thead>
                        <tr>
                            <th>email</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>avatar</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    {responseData && filteredList?.map((data, index) => {
                        return (<tbody>
                             
                            <tr key={data.id}>
                                <td>{data.email}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.avatar}</td>
                                <td><img src={data.avatar} alt="" height="100" width="100" /></td>


                            </tr>
                        </tbody>
                        )

                    })}
                </table>
            </div>
            <h1>Current date is {date}</h1>
        </div>
    )
}

export default Apitable;