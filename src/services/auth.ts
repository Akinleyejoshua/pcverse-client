import { request } from "../utils/axios";
import jwtDecode from "jwt-decode";
import { timestamp } from "../utils/helpers";

export const signup = async (email: string, username: string, password: string) => {
    const time = timestamp();
    return request.post("auth/signup", { email, username, password, time });
}

export const signin = async (email: string, password: string) => {
    const time = timestamp();

    return request.post("auth/signin", { email, password, time });
}

export const recoverPwd = async (email: string) => {
    const time = timestamp();

    return request.post("auth/reset/pwd/", { email, time });
}

export const recoverPassword = async (id: string, password: string) => {
    const time = timestamp();

    return request.post("auth/reset-password/", { id, password, time });
}

export const verifyAccountID = async (id: string) => {
    const time = timestamp();
    return request.post("auth/verify/account/", { id, time })
}

export const decodeToken = async (token: string) => {
    return jwtDecode(token);
}