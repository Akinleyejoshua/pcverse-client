import { request } from "../utils/axios";

export const getTokenData = async () => {

    return request.get("/get-token/data");

}

export const makeTransactions = async (user_id: any, transaction_id: any, transaction_ref: any, mcoin: any, amount: any, status: any, timestamp: any, message: any) => {

    return request.post("/get-token/mcoin", {
        id: user_id, transaction_ref: transaction_ref, mcoin: mcoin, amount: amount, status: status, timestamp: timestamp, message: message, transaction_id: transaction_id
    });

}

export const getAllTransactions = async (id: string) => {
    // console.log(id);
    return request.post("/get-token/transactions", { id });
}