import React, { useEffect } from "react";
import { AuthHeader } from "../components/AuthHeader";
import { Form } from "../components/Form";
import { useNavigate, useParams } from "react-router";
import { AiOutlineUserAdd, AiOutlineKey, AiOutlineSend } from "react-icons/ai";
import { Loader } from "../components/Loader";
import { GlobalContext } from "../context/GlobalContext";
import { FaSignInAlt } from "react-icons/fa";
import { clearStorage } from "../utils/helpers";

export const ResetPwd: React.VFC = () => {
    const nav = useNavigate();
    const { id } = useParams();
    clearStorage();

    const { handleChange, formData, resetPassword, updateForm } = React.useContext(GlobalContext);

    useEffect(() => {
        updateForm(id, "id");
    }, []);

    return (
        <div id="" className="App w-full h-full text-white p-6">
            <AuthHeader
                navChilds={
                    <div className="flex flex-col sm:flex-row">
                        <a onClick={() => nav("/signin")}>
                            <FaSignInAlt className="icon" /> Signin
                        </a>
                        <a className="mt-6 sm:mt-0 sm:ml-6" onClick={() => nav("/signup")}>
                            <AiOutlineUserAdd className="icon" /> Signup
                        </a>
                    </div>

                }
            />
            <div className="heading-action flex flex-col text-center">
                <h1>Password Reset</h1>
                <p>Reset your account password</p>
                <small>or</small>
                <small className="mt-2">
                    you've just remebered your password?{" "}
                    <i className="btn" onClick={() => nav("/signin")}>
                        signin
                    </i>
                </small>
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

                <Form
                    id="auth-form"
                    children={
                        <>
                            <div className="input-bar">
                                <AiOutlineKey className="icon" />
                                <input
                                    type="password"
                                    placeholder="new password"
                                    onChange={(event) => handleChange(event, "password")}
                                />
                            </div>

                            <button onClick={resetPassword}>
                                <AiOutlineSend className="icon" />
                                RESET
                            </button>
                        </>
                    }
                    submit={() => { }}
                />
            </main>
        </div>
    );
};
