// import axios from 'axios';
// import { makeAutoObservable } from "mobx";
// import Service from "../service/service";
// import React from 'react'

// const baseUrl = process.env.REACT_APP_API_BASE;

// class Frontlogin {
//     constructor(rootStore) {
//         this.rootStore = rootStore;
//         makeAutoObservable(this);
//       }


//     async login(payload, callback) {
//         await Service.post(`signin`, payload, async (response) => {
//           return callback(response);
//         }).catch((error) => {
//           return callback(error)
//         });
        
//       }

// }

// export default Frontlogin;  