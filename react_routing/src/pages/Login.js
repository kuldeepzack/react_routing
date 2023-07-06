import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const countries = ["USA", "Canada", "UK", "Australia", "India"];

function LoginPage() {
//   const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [college, setCollege] = useState("");

  const handleLogin = () => {
    // navigate("/Showhide");
    console.log("Logged in");
  };

  const handleSubmit = (e) => {
    // navigate("/api");
    e.preventDefault();
    console.log("Form submitted");
    setSubmitted(true);
  };

  return (
    <div className="pages">
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
    </div>
  );
}

export default LoginPage;
