import React, { useEffect } from "react";
import { AuthHeader } from "../components/AuthHeader";
import { Form } from "../components/Form";
import { useNavigate } from "react-router";
import { AiOutlineUserAdd, AiOutlineKey, AiOutlineLogin, AiOutlineSend } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { Loader } from "../components/Loader";
import { GlobalContext } from "../context/GlobalContext";
import { get } from "../utils/helpers";

export const Signin: React.VFC = () => {
    const nav = useNavigate();
    const { handleChange, formData, validateSignin, updateForm, resetPass, resetForm, route } = React.useContext(GlobalContext);

    useEffect(() => {
        resetForm();
    }, [])
    
    // console.log(1);

    return <div id="" className="App w-full h-full text-white p-6">
        <AuthHeader navChilds={
            <a onClick={() => nav("/signup")}><AiOutlineUserAdd className="icon" /> Signup</a>
        } />
        <div className="heading-action flex flex-col text-center">
            {!formData.forgotPass ? (
                <>
                    <h1>SIGN-IN</h1>
                    <p>Start recovering your PC passwords</p>
                    <small className="mt-2">dont have an account? <i className="btn" onClick={() => nav("/signup")}>signup</i></small>
                </>
            ) : (
                <>
                    <h1>FORGOT PASSWORD</h1>
                    <p>Input your email account email address</p>
                    <small className="mt-2">Oops!, you remember now? <i className="btn" onClick={() => updateForm(false, "forgotPass")}>signin</i></small>
                </>
            )}

        </div>

        {formData.loading && <Loader />}

        <main className="flex-col">
            <div
                className={`flex justify-center mb-6 text-center small toast ${formData.error
                    ? `h-max-content width-full p-2 ${formData.errorType}`
                    : "width-none h-none"
                    }`}
            >
                {formData.errorMsg}
            </div>

            <Form id="auth-form" children={<>
                <div className="input-bar">
                    <MdOutlineEmail className="icon" />
                    <input type="email" id="email" placeholder="email address" onChange={event => handleChange(event, "email")} />
                </div>
                <div className={`${formData.forgotPass ? "none" : "input-bar"}`}>
                    <AiOutlineKey className="icon" />
                    <input type="password" id="password" placeholder="password" onChange={event => handleChange(event, "password")} />
                </div>
                <p className={`${formData.forgotPass ? "none" : "mt-3 small btn"}`} onClick={() => updateForm(true, "forgotPass")}>forgot password?</p>

                {
                    !formData.forgotPass ? (
                        <button onClick={validateSignin}>
                            <AiOutlineLogin className="icon" />
                            Signin
                        </button>
                    ) : (
                        <button onClick={resetPass}>
                            <AiOutlineSend className="icon" />
                            Send
                        </button>
                    )
                }

            </>} submit={() => { }} />
        </main>
    </div>
}