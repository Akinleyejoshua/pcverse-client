import { createContext, useEffect, useState } from "react";
import {
    recoverPassword,
    recoverPwd,
    signin,
    signup,
    verifyAccountID,
    decodeToken,
} from "../services/auth";
import { addDevice, getAllDevices } from "../services/devices";
import { getAllTransactions, getTokenData, makeTransactions } from "../services/transaction";
import { getUserData } from "../services/user";
import { clearStorage, get, save, timestamp } from "../utils/helpers";
import { globalstate } from "./globalstate";

type GlobalContextProviderProps = {
    children: React.ReactNode;
};

export const GlobalContext = createContext(globalstate);

export const GlobalProvider = ({ children }: GlobalContextProviderProps) => {
    // states
    const token = get("auth");

    const [formData, setFormData] = useState({
        id: "",
        email: "",
        username: "",
        password: "",
        error: false,
        errorType: "",
        errorMsg: "",
        loading: false,
        done: false,
        forgotPass: false,
        emailRegex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        validated: false,
        verified: false,
    });

    const { email, password, username, id, emailRegex } = formData;

    const [route, setRoute] = useState({
        auth: (token == null || token == undefined) ? false : true,
        id: "",
    });

    // ====================================== SETTINGS ======================================================================

    const handleBgMode = (val: string) => {


        setSettings({
            ...settings,
            bgMode: val,
        });


    }

    // DEVICES ===============================================================================================================

    const [devices, setDevices] = useState({
        items: [
            {}
        ],
        pcName: "",
        platform: "",
        serial: "",
        pcUser: "",
    });

    const handleDevice = (val: any, name: string) => {
        errorFalse();
        setDevices((prevState) => ({ ...prevState, [name]: val }));
    }

    const autoAddDevice = () => {

        const { platform, } = navigator;

    }

    const updateDevice = () => {
        getAllDevices(user.id).then(res => {
            let data = res.data;

            if (data.done) {
                setDevices({
                    ...devices,
                    items: data.devices
                });

            }

        });
    }

    const addNewDevice = () => {
        const { pcName, pcUser, serial, platform } = devices;
        // console.log(devices)
        if ([pcName, pcUser, serial, platform].includes("")) return errorTrue("All fields are required!", "danger");
        handleUser(true, "loading");
        addDevice(
            pcName, pcUser, serial, platform, user.id
        ).then(res => {
            let data = res.data;
            if (data.done) {
                errorTrue(data.message, "success");

                setDevices({
                    ...devices,
                    items: [...devices.items, data.devices]
                });

                handleUser(false, "false");
            } else {
                errorTrue(data.message, "causion");

            }
        }).catch(() => {
            handleUser(false, "loading");
        });

    }

    // END =================================================================================================================

    // ===================================== tranactions =====================================================================

    const [transaction, setTransaction] = useState({
        amount: 0,
        mcoin: 0,
        conversion: 0,
        pb: "",
        dollar: 0,
        total: 0,
        transaction_id: "",
        transaction_ref: "",
        status: "",
        time: "",
        message: "",
        loading: false,
    });

    const [transactions, setTransactions] = useState({
        items: [
            {}
        ],

    });

    const handleTransaction = (val: any, name: string) => {
        setTransaction((prevState) => ({
            ...prevState,
            amount: val,
            mcoin: val,
            total: val * transaction.conversion * transaction.dollar,
        }));

    };

    const handleTransactions = (val: any, name: string) => {
        setTransaction((prevState) => ({ ...prevState, [name]: val }));
    };

    const getToken = () => {
        return;
    };

    const handleTransactionFromPayStack = (res: any) => {
        handleTransaction(true, "loading");
        const time = timestamp();

        makeTransactions(

            user.id,
            res.transaction,
            res.trxref,
            transaction.mcoin,
            transaction.amount * transaction.conversion,
            res.status,
            time,
            res.message,

        ).then(res => {
            let data = res.data;
            if (data.done) {
                setUser({
                    ...user,
                    mcoin: user.mcoin + Number(transaction.amount),
                });
                let newTransactions = data.transactions;
                setTransactions({
                    ...transactions,
                    items: [...transactions.items, newTransactions]
                });
            }
        }).then(() => {
            handleTransaction(false, "loading");

        }).catch(() => {
            handleTransaction(false, "loading");
        });

    }

    const updateTransactionData = () => {
        handleTransaction(true, "loading");
        getTokenData()
            .then((data) => {
                setTransaction({
                    ...transaction,
                    pb: data.data.pbkey,
                    conversion: parseInt(data.data.conversion),
                    dollar: parseInt(data.data.dollar),
                });
            })
            .then(() => {
                handleTransaction(false, "loading");
            })
            .catch(() => {
                handleTransaction(false, "loading");
            });
    };

    const updateTransactionsData = () => {
        handleTransaction(true, "loading");
        getAllTransactions(user.id).then(res => {
            let data = res.data.data;
            setTransactions({
                ...transactions,
                items: data,
            });

        }).then(() => {
            handleTransaction(false, "loading");

        }).catch(() => {
            handleTransaction(false, "loading");

        });
    };

    // ======================================================== END ========================================================

    //  ========================================== USER =====================================================================


    const [user, setUser] = useState({
        id: "",
        username: "",
        email: "",
        mcoin: "",
        passkey: "",
        loading: false,
        notifications: [{}]
    });

    const [settings, setSettings] = useState({
        bgMode: get("display-mode") || "gradient-2-bg-welcome",
    });


    const handleUser = (val: any, name: string) => {
        setUser((prevState) => ({ ...prevState, [name]: val }));
    };

    const updateUserData = () => {

        handleUser(true, "loading");
        decodeToken(`${token}`).then((data: any) => {
            handleUser(data.user_id, "id");
            getUserData(data.user_id)
                .then((res) => {
                    var data = res.data.data;

                    if (res.data.message === "token expired") return clearAuth();
                    if (res.data.error === "does-not-exist") return clearAuth();

                    setUser((prevState) => ({
                        ...prevState,
                        id: data?._id,
                        username: data?.username,
                        mcoin: data?.mcoin,
                        devices: data?.devices,
                        email: data?.email,
                        notifications: res.data.notifications
                    }));
                })
                .then(() => {
                    handleUser(false, "loading");
                })
                .catch(() => {
                    handleUser(false, "loading");
                });
        }).catch(err => {
            return;
        });

    };

    // ============================================= END =================================================================

    // ====================================== authentication functions ==================================================

    const errorTrue = (val: string, type: string) => {
        setFormData((prevState) => ({
            ...prevState,
            error: true,
            errorMsg: val,
            errorType: type,
        }));
    };

    const errorFalse = () => {
        setFormData((prevState) => ({
            ...prevState,
            error: false,
            errorMsg: "",
            errorType: "",
        }));
    };

    const toggleLoader = (value: boolean) => {
        setFormData((prevState) => ({
            ...prevState,
            loading: value,
        }));
    };

    const errTimeout = (time: number) => {
        setTimeout(() => {
            toggleLoader(false);
        }, time);

        errorTrue("Check your internet connection", "causion");
    };

    // dispatchers
    const handleChange = (e: any, name: string) => {
        errorFalse();
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    const updateForm = (val: any, name: string) => {
        errorFalse();
        setFormData((prevState) => ({ ...prevState, [name]: val }));
    };

    const handleRoute = (e: any, name: string) => {
        setRoute((prevState) => ({
            ...prevState,
            [name]: e,
        }));
    };

    const resetForm = () => {
        setFormData((prevState) => ({
            ...prevState,
            id: "",
            email: "",
            username: "",
            password: "",
            error: false,
            errorType: "",
            errorMsg: "",
            loading: false,
            done: false,
            forgotPass: false,
            validated: false,
            verified: false,
        }));

        errorFalse();
    };
    const clientAuth = (token: string) => {
        save("auth", token);
        resetForm();
        toggleLoader(false);
        updateUserData();
        setRoute((prevState) => ({
            ...prevState,
            auth: true,
        }));
        updateTransactionData();
        updateTransactionsData();
    };

    useEffect(() => {
        route.auth && clientAuth(`${token}`);
    }, [route.auth]);

    useEffect(() => {
        updateTransactionsData();
        updateDevice();
    }, [user.id]);

    const clearAuth = async () => {
        clearStorage();
        resetForm();
        toggleLoader(false);

        setRoute((prevState) => ({
            ...prevState,
            auth: false,
        }));

        return;

    };

    const validateSignup = () => {
        if ([email, password, username].includes(""))
            return errorTrue("All fields are required!", "danger");

        if (!email.match(emailRegex))
            return errorTrue("Invalid email address", "danger");

        if (password.length < 6)
            return errorTrue(
                "Password to weak, atleast not less that 6 characters",
                "danger"
            );

        toggleLoader(true);

        signup(email, username, password)
            .then((res) => {
                if (res.data.error === "email exist")
                    return errorTrue(res.data.message, "causion"), toggleLoader(false);
                if (res.data.done) return (clearStorage(), clientAuth(res.data.data.token));
            })
            .catch(() => {
                toggleLoader(false);
            });
    };

    const validateSignin = () => {
        if ([email, password].includes(""))
            return errorTrue("All fields are required!", "danger");
        toggleLoader(true);

        signin(email, password)
            .then((res) => {
                if (res.data.error)
                    return errorTrue(res.data.message, "causion"), toggleLoader(false);
                if (res.data.done) return clientAuth(res.data.data.accessToken);
            })
            .catch(() => {
                toggleLoader(false);
            });
    };

    const resetPass = async () => {
        if ([email].includes(""))
            return errorTrue("Your Email is required!", "danger");
        toggleLoader(true);

        errTimeout(1000);

        recoverPwd(email)
            .then((res) => {
                if (res.data.error)
                    return errorTrue(res.data.message, "causion"), toggleLoader(false);
                if (res.data.done)
                    return errorTrue(res.data.message, "success"), toggleLoader(false);
            })
            .catch(() => {
                toggleLoader(false);
            });
    };

    const resetPassword = async () => {
        if ([password].includes(""))
            return errorTrue("Your New Password is required!", "danger");
        if (password.length < 6)
            return errorTrue(
                "Password to weak, atleast not less that 6 characters",
                "danger"
            );

        recoverPassword(id, password)
            .then((res) => {
                if (res.data.error)
                    return errorTrue(res.data.message, "causion"), toggleLoader(false);
                if (res.data.done)
                    return errorTrue(res.data.message, "success"), toggleLoader(false);
            })
            .catch(() => {
                toggleLoader(false);
            });
    };

    const verifyAccount = async () => {
        verifyAccountID(id).then((res) => {
            if (res.data.done)
                return toggleLoader(false), updateForm(true, "verified");
        });
    };

    //  ============================================ END ========================================================================

    return (
        <GlobalContext.Provider
            value={{
                user,
                formData,
                handleChange,
                route,
                handleRoute,
                validateSignup,
                validateSignin,
                updateForm,
                resetPass,
                resetPassword,
                verifyAccount,
                resetForm,
                updateUserData,
                handleUser,
                transaction,
                transactions,
                handleTransaction,
                handleTransactions,
                updateTransactionData,
                updateTransactionsData,
                getToken,
                handleTransactionFromPayStack,
                clearAuth,
                handleBgMode,
                settings,
                clientAuth,
                devices,
                handleDevice,
                addNewDevice,
                autoAddDevice
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
