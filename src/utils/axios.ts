import axios from "axios";
import { get } from "./helpers";


const settings = {

	baseURL: 'https://pc-verse.herokuapp.com/api/',
	headers: {
		'Accept': 'application/json,text/plain,*/*',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': "*"

	}
}

// console.log(get("auth"))

export const request = axios.create(settings);

request.interceptors.request.use(
	(config: any) => {
		const token = get("auth") === null ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJiNjI2OWQxODUzMmE3ZDBiZmU4MmJmIiwiaWF0IjoxNjU2MTA1ODU3LCJleHAiOjE2NTYxMDk0NTd9.5aVSkSesvV808JVJ13TSMJ2E-rDIBBR29XW2l4tZToY" : get("auth");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
