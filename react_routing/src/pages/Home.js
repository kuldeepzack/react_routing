
import { ColorRing } from  'react-loader-spinner';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPassword from "../assets/images/show-password.png"
import HidePassword from "../assets/images/HidePassword.jpg"
import './Home.css'
import { useStores } from "../store";

function Home() {
  const {Frontlogin} = useStores();
  const navigate = useNavigate();
  const [username, setUserName]= useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit =async (event) => {
    setLoading(true)
    event.preventDefault();
    let paylaod={
      contact: username,
      password: password
    }
    setTimeout(async() => {
      await Frontlogin.login(paylaod, (response)=>{
        console.log(response)
        setLoading(false);
       
      })
      navigate("/Form");
    }, 1000);
 
  
  };


  return (
   
    <div className="main">
    <form onSubmit={handleSubmit} className="form">
      <div className="new-expense__control">
        <h1>Welcome to the Gro+ Portal</h1>
        <br />
        <br />
        <br />

        <label>User-Name</label>
        <br />
        <br />

        <input
          type="text"
          className="login-field"
          placeholder="user-name"
          value={username}
          onChange={(e)=>setUserName(e.target.value)}
          required
        />
        <span className="error" ng-show="personForm.name.$error.required">

        </span>
        <br />
        <br />
        <br />
      </div>

      <div className="new-expense__control">
        <label>Password</label>
        <br />
        <br />

        <div className="password-input-container">
          <input
            type={passwordVisible ? "text" : "password"}
            className="login-field"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
            visible={true}
          >
            <img
              src={passwordVisible ?   ShowPassword: HidePassword }
              alt={passwordVisible ? " Hide password" : "Show password" }
              className="password-icon"
            />
          </span>
        </div>

        <span className="error" ng-show="personForm.password.$error.required">

        </span>
      </div>
  
      <div className="new-expense__actions">
        <button type="submit">Login{loading ? "Loading...":" "}</button>
      
      </div>
    </form>
    {loading && 
        <ColorRing
 
  height="90"
  width="90"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}
    </div>
  
  );
}
 export default Home;