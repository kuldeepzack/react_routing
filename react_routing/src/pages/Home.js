
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPassword from "../assets/images/show-password.png"
import HidePassword from "../assets/images/HidePassword.jpg"
import './Home.css'
import { useStores } from "../store";

function Home() {
  // const {Frontlogin} = useStores();
  const navigate = useNavigate();
  const [username, setUserName]= useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const handleSubmit =async (event) => {
  //   event.preventDefault();
  //   let paylaod={
  //     contact: username,
  //     password: password
  //   }
  //   await Frontlogin.login(paylaod, (response)=>{
  //     console.log(response)
  //   })
  //   navigate("/Form");
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Form");
  };

  return (
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
      <br />
      <br />
      <div className="new-expense__actions">
        <button type="submit" >Login</button>
      </div>
    </form>
  );
}
 export default Home;
