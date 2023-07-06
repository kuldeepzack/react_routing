import React from "react";
import "./Form.css"

const Form = () => {
  return (
    <div className="mk">
      <form name="personForm" ng-submit="sendForm()">
        <h2>
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            ng-model="person.name"
            placeholder="Enter name"
            required
          />
          <span class="error" ng-show="personForm.name.$error.required">
            {" "}
            Required!{" "}
          </span>
        </h2>
        <br />
        <br />

        <h2>
          <label for="adress">Adress</label>
          <input
            id="address"
            name="address"
            type="text"
            ng-model="person.address"
            placeholder="Enter address"
            required
          />
          <span class="error" ng-show="personForm.address.$error.required">
            {" "}
            Required!{" "}
          </span>
        </h2>
        <br />
        <br />

        <h2>
          <label for="contact">Contact No</label>
          <input
            id="mobile"
            name="mobile"
            type="number"
            ng-pattern="/^(91){1}[0-9]{8}$/"
            placeholder="Enter contact Number"
            ng-maxlength="10"
            ng-minlength="10"
            ng-model="person.mobile"
            required
          />
          <span class="error" ng-show="personForm.mobile.$error.required">
            Required number!
          </span>
          <span class="error" ng-show="personForm.mobile.$error.mobile">
            Invalid mobile!
          </span>
        </h2>
        <br />
        <br />

        <h2>
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            ng-model="person.email"
            ng-pattern="regex"
            placeholder="Enter valid email"
            required
          />
          <span class="error" ng-show="personForm.email.$error.required">
            Required!
          </span>
          <span class="error" ng-show="personForm.email.$error.email">
            Invalid Email!
          </span>
        </h2>
        <br />
        <br />

        <h2>
          <input
            type="checkbox"
            ng-model="terms"
            name="terms"
            id="terms"
            required
          />
          <label for="terms">I Agree to the terms.</label>
        </h2>
        <span class="error" ng-show="personForm.terms.$error.required">
          You must agree to the terms
        </span>
        <br />
        <br />
        <h2>
          <button type="submit">Submit Form</button>
        </h2>
        <br />
        <br />
      </form>
    </div>
  );
}
export default Form;