import { request } from "../utils/axios"
import { timestamp } from "../utils/helpers";

export const addDevice = async (pcName:string, pcUser:string, serial:string, platform:string, id: string) => {
    const time = timestamp();

    return request.post("/add-device", {
        pcName:pcName, pcUser:pcUser, serialnumber:serial, platform, online:false, id:id, time
    });
}

export const getAllDevices = async (id:string) => {
    return request.post("/get-device", {id});
}