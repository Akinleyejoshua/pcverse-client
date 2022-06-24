import React, { useCallback, useEffect } from "react";
import { AuthHeader } from "../components/AuthHeader";
import { Form } from "../components/Form";
import { useNavigate } from "react-router";
import {
    AiOutlineLogin,
    AiOutlineUser,
    AiOutlineKey,
    AiOutlineUserAdd,
} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { GlobalContext } from "../context/GlobalContext";
import { Loader } from "../components/Loader";

export const Signup: React.VFC = () => {
    const nav = useNavigate();

    const { handleChange, formData, validateSignup, resetForm } = React.useContext(GlobalContext);

    useEffect(() => {
        resetForm();
    }, []);

    // console.log(1);

    return (
        <div id="" className="App w-full h-full text-white p-6">
            <AuthHeader
                navChilds={
                    <a onClick={() => nav("/signin")}>
                        <AiOutlineLogin className="icon" /> Signin
                    </a>
                }
            />

            <div className="heading-action flex flex-col text-center">
                <h1>SIGN-UP</h1>
                <p>Start recovering your PC passwords</p>
                <small className="mt-2">already have an account? <i className="btn" onClick={() => nav("/signin")}>signin</i></small>
            </div>

            {formData.loading && <Loader />}

            <main className="flex-col relative">
                <div
                    className={`flex justify-center mb-6 text-center small toast ${formData.error
                        ? `h-max-content width-full p-2 ${formData.errorType}`
                        : "width-none h-none"
                        }`}
                >
                    {formData.errorMsg}
                </div>

                <Form
                    id="auth-form"
                    children={
                        <>
                            <div className="input-bar">
                                <AiOutlineUser className="icon" />
                                <input type="username" placeholder="username" onChange={event => handleChange(event, "username")} />
                            </div>
                            <div className="input-bar">
                                <MdOutlineEmail className="icon" />
                                <input type="email" placeholder="email address" onChange={event => handleChange(event, "email")} />
                            </div>
                            <div className="input-bar">
                                <AiOutlineKey className="icon" />
                                <input type="password" placeholder="password" onChange={event => handleChange(event, "password")} />
                            </div>
                            <p className="mt-3 small text-center">By signing up you hereby accept our <i className="btn bright" onClick={() => nav("termsandconditions")}>terms & conditions</i></p>

                            <button onClick={validateSignup}>
                                <AiOutlineUserAdd className="icon" />
                                Signup
                            </button>
                        </>
                    }
                    submit={null}
                />
            </main>
        </div>
    );
};
