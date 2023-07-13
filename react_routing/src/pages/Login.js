import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const countries = ["USA", "Canada", "UK", "Australia", "India"];
let products = [
  {
    "product_name": "Witchers",
    "type": "book",
    "manufactured": new Date(),
    "price": 800
  },
  {
    "product_name": "OnePlus 9",
    "type": "Mobile Phone",

    "price": 49000
  },
  {
    "product_name": "Black ",
    "type": "Shoes",

    "price": 2500
  },
  {
    "product_name": "Skybags",
    "type": "Bags",

    "price": 2200
  },

]


function LoginPage() {
  // const navigate = useNavigate();

  // const [userId, setUserId] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [country, setCountry] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // const [college, setCollege] = useState("");
  const [productdata,setProductData] = useState(products)
  const [submitdata, setSubmitdata] = useState("")

  // const [allData] = useState([]);
  const [filteredList, setFilteredList] = useState(products);
  //  const handleChange = (e) => setValue(e.target.value);
  // const handleLogin = () => {
  //   navigate("/Showhide");
  //   console.log("Logged in");
  // };

  // const [data] = useState([]); useEffect(() => { localStorage.setItem('dataKey', JSON.stringify(data)); }, [data]);


  // const handleSubmit = (e) => {
  //   navigate("/api");
  //   e.preventDefault();
  //   console.log("Form submitted");
  //   setSubmitted(true);
  // };

  const handlesubmitdata = () => {
    let sort = productdata.sort((a, b) => { return a.price - b.price })
    console.log(sort)
    setSubmitdata(sort)
  };


  const filterBySearch = (event) => {

if(event.target.value === "")
{
  setProductData(filteredList);
}else {
     let updatedList = productdata.filter((item) => {
      return item.product_name == event.target.value ;
    });

    setProductData(updatedList);
  };
  }




  return (

    <>
      <div>
        {productdata.map(
          (element) => {
            return (
              <div>
                <ul>
                  <li>{element.product_name}</li>
                  <li>{element.type}</li>
                  <li>{element.price}</li>
                </ul>

              </div >



            )
          }
        )
        }
        <button onClick={(e) => { handlesubmitdata() }}   >Submit</button>


        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
        {/* <div id="products">
          <ol>
            {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div> */}

      </div>
      {/* <div className="pages">
      <h2>Login Page</h2>
      {submitted ? (
        <div>
          <p>User ID: {userId}</p>
          <p>Password: {password}</p>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      )}

      {submitted && (
        <div>
          <h2>User Details Form</h2>
          <p>Name: {name}</p>
          <p>Last Name: {lastName}</p>
          <p>College: {college}</p>
          <p>Email: {email}</p>
          <p>Country: {country}</p>
        </div>
      )}

      {!submitted && (
        <form onSubmit={handleSubmit}>
          <h2>User Details Form</h2>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label>College:</label>
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Country:</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div> */}
    </>
  );
}

export default LoginPage;
