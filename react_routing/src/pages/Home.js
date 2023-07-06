// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Home  ()  {
//   const navigate = useNavigate();

// //   const Homepage = () => {
//     // navigate("/Form"); 

//     return (
//       <form>
//         <div className="new-expense__control">
//           <label>User-Name</label>
//           <input type="text" className="login-field" placeholder="user-name" />
//         </div>

//         <div className="new-expense__control">
//           <label for="contact">Contact No</label>
//           <input
//             id="mobile"
//             name="mobile"
//             type="number"
//             ng-pattern="/^(91){1}[0-9]{8}$/"
//             placeholder="Enter contact Number"
//             ng-maxlength="10"
//             ng-minlength="10"
//             ng-model="person.mobile"
//             required
//           />
//           <span class="error" ng-show="personForm.mobile.$error.required">
//             Required number!
//           </span>
//           <span class="error" ng-show="personForm.mobile.$error.mobile">
//             Invalid mobile!
//           </span>
//         </div>

//         <div className="new-expense__control">
//           <label>DOB</label>
//           <input
//             type="date"
//             min="1999-01-01"
//             max="2023-07-01"
//             className="login-field"
//           />
//         </div>

//         <div className="new-expense__actions">
//           <button type="submit">Login</button>
         
//         </div>
        
//       </form>
//     );
// //   };
// };
// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Form");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__control">
        <label>User-Name</label>
        <input type="text" className="login-field" placeholder="user-name" />
      </div>

      <div className="new-expense__control">
        <label htmlFor="contact">Contact No</label>
        <input
          id="mobile"
          name="mobile"
          type="number"
          pattern="^(91){1}[0-9]{8}$"
          placeholder="Enter contact Number"
          maxLength="10"
          minLength="10"
          required
        />
        <span className="error" style={{ display: "none" }}>
          Required number!
        </span>
        <span className="error" style={{ display: "none" }}>
          Invalid mobile!
        </span>
      </div>

      <div className="new-expense__control">
        <label>DOB</label>
        <input
          type="date"
          min="1999-01-01"
          max="2023-07-01"
          className="login-field"
        />
      </div>

      <div className="new-expense__actions">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Home;

