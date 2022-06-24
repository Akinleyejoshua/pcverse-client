import { request } from "../utils/axios"

export const getUserData = async (id:string) => {
    return request.get(`/user/${id}`);
}