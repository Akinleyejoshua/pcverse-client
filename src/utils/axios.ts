import axios from "axios";
import { get } from "./helpers";


const settings = {

	baseURL: 'http://pc-verse/api/',
	// baseURL: 'http://localhost:1000/api/',
	headers: {
		Accept: 'application/json,text/plain,*/*',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': "*"
	}
}

// console.log(get("auth"))

export const request = axios.create(settings);

request.interceptors.request.use(
	(config: any) => {
		const token = get("auth") === null ? "0123456789" : get("auth");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);