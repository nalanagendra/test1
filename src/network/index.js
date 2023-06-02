import Axios, { AxiosInstance } from 'axios';
import { login, users } from './configuration';

/**
 * Requests
 */
class Requests {
    static client: Requests;

    axios: AxiosInstance;

    constructor() {
        this.axios = Axios.create({
            baseURL: process.env.REACT_APP_SERVICES_API,
        });

        this.axios.defaults.withCredentials = true;
        this.axios.defaults.timeout = 35000;
    }

    setBearerToken = (token) => {
        this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };

    static getInstance = () => {
        if (!Requests.client) {
            Requests.client = new Requests();
        }
        return Requests.client;
    };

    login = (body) => this.axios.post(login, body);

    getUsers = () => this.axios.get(users);

    
}

export default Requests;
