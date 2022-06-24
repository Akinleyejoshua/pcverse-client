import React, { useState } from "react";

interface App {
    
}

export const AppContext = React.createContext({});

export const AppProvider = ({ children }: any) => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e: any, name: any) => {
        setFormData((prevState: any) => ({ ...prevState, [name]: e.target.value }));
    };

    return <AppContext.Provider value={{
        formData,
        handleChange
    }}>

        {children}
    </AppContext.Provider>
}