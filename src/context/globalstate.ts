export const globalstate = {
    formData: {
        id: "",
        email: "",
        username: "",
        password: "",
        error: false,
        errorType: "",
        errorMsg: "",
        loading: false,
        forgotPass: false,
        verified: false,
    },

    transaction: {
        amount: 0,
        mcoin: 0,
        conversion: 0,
        pb: "",
        total: 0,
        dollar: 0,
        transaction_id: "",
        transaction_ref: "",
        status: "",
        time: "",
        message: "",
        loading: false,
    },

    user: {
        id: "",
        username: "",
        email: "",
        mcoin: "",
        passkey: "",
        loading: false,
        notifications: [{}]
    },

    route: {
        auth: false,
        id: ""
    },

    transactions: {
        items: [
            {}
        ],
    },

    devices: {
        items: [
            {}
        ],
        pcName: "",
        platform: "",
        serial: "",
        pcUser: "",
    },

    settings: {
        bgMode: "",
    },

    handleRoute: (e: any, name: string) => { },
    validateSignup: () => { },
    validateSignin: () => { },
    resetPass: () => { },
    resetPassword: () => { },
    resetForm: () => { },
    addNewDevice: () => { },
    autoAddDevice: () => { },
    verifyAccount: () => { },
    handleBgMode: (val:string) => { },
    clearAuth: () => { },
    clientAuth: (token:string) => { },
    updateForm: (val: any, name: string) => { },
    handleTransactionFromPayStack: (red:any) => { },
    updateUserData: () => { },
    updateTransactionData: () => { },
    updateTransactionsData: () => { },
    getToken: () => { },
    handleUser: (val: any, name: string) => { },
    handleDevice: (val: any, name: string) => { },
    handleChange: (e: any, name: string) => { },
    handleTransaction: (val: any, name: string) => { },
    handleTransactions: (val: any, name: string) => { },
};
