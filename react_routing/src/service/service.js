import axios from 'axios';
// import { GetBaseUrl, GetProjectId } from './helper';
// import encryption from '../../Helper/encryption';

const baseUrl = process.env.REACT_APP_API_BASE_URL;
// const appId= GetProjectId();

class Service {
    constructor(props) {
        this.refreshHeader(
            () => {

        }
        );
    }

    
    refreshHeader(callback) {
        // const sessionToken = sessionStorage.getItem('AuthToken');
        let srh = {
            headers: {
                // 'app_id': appId,
                // 'city_id': '2707',
                // 'Authorization': sessionToken
                // 'x-api-key': 'RfAWFKnCIH72pylpyZctM54Sz5jzsFvu3sotTPuL',
            }
        };
        let service = axios.create(srh);
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
        return callback();
    }

    handleSuccess(response) {
        return response;
    }

    // handleError = (error) => {
    //     let code = 400;
    //     let message = '';
    //     if (typeof error.response != 'undefined') {
    //         if (typeof error.response?.data?.meta?.code != 'undefined') {
    //             code = error.response.data.meta.code;
    //             message = error.response.data.meta.message;
    //         }
    //         if (error.response.statusText === "Unauthorized") {
    //             code = error.response.status;
    //             message = error.response.statusText;
    //         }
    //     }

    //     switch (code) {
    //         case 401:
    //             //EventRegister.emit('SessionExpiredEvent', 'Session Expired');  
    //             sessionStorage.removeItem('token');
    //             window.location.href = `${process.env.PUBLIC_URL}/`;
    //             break;
    //         case 404:
    //             //alert('Resource not found');
    //             break;
    //         default:
    //             //alert(JSON.stringify(error.response.data.error.replace(/['"]+/g, '')));
    //             // alert('Internal server error, please retry');
    //             if (message != '') {
    //                 // notify(message, 'danger');
    //             }
    //             break;
    //     }
    //     return Promise.reject(error)
    // }

    redirectTo = (document, path) => {
        document.location = path
    }

    async get(path, callback) {
        var response = await this.service.get(`${baseUrl}/${path}`);
        callback(response);
        return response;
    }

    async patch(path, payload, callback) {
        let response = await this.service.request({
            method: 'PATCH',
            url: `${baseUrl}/${path}`,
            responseType: 'json',
            data: payload
        });
        return callback(response.status, response.data);
        // return response;
    }

    async post(path, payload, callback) {
        // let encryptedData = encryption(payload)
        let response = await this.service.request({
            method: 'POST',
            url: `${baseUrl}/${path}`,
            responseType: 'json',
            data: payload
        })
        return callback(response);
        // return response;
    }


    async put(path, payload, callback) {
        let response = await this.service.request({
            method: 'PUT',
            url: `${baseUrl}/${path}`,
            responseType: 'json',
            data: payload
        });
        callback(response.status, response.data);
        return response;
    }

    async postV2(path, payload, callback) {
        let token=sessionStorage.getItem('AuthToken');
        // let encryptedData = encryption(payload)
        let response = await this.service.request({
            method: 'POST',
            url: `${baseUrl}/${path}`,
            headers: {
                'Content-Type': 'multipart/from-data',
                'Authorization': token
            },
            responseType: 'json',
            data: payload
        })
        return callback(response);
        
        // return response;
    }
}

export default new Service();   
