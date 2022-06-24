import React, { useEffect } from "react";
import { AuthHeader } from "../components/AuthHeader";
import { useNavigate, useParams } from "react-router";
import { AiOutlineCheckCircle, AiOutlineUserAdd } from "react-icons/ai";
import { Loader } from "../components/Loader";
import { GlobalContext } from "../context/GlobalContext";
import { FaSignInAlt } from "react-icons/fa";
import { clearStorage, get } from "../utils/helpers";
import { BiArrowBack } from "react-icons/bi";

export const VerifyAccount: React.VFC = () => {
    const nav = useNavigate();
    const { id } = useParams();

    clearStorage();

    const { formData, updateForm, verifyAccount } = React.useContext(GlobalContext);

    useEffect(() => {
        updateForm(id, "id");
    }, [])

    return (
        <div id="" className="App w-full h-full text-white p-6">
            <AuthHeader
                navChilds={
                    <a onClick={() => nav("/signin")}>
                        <FaSignInAlt className="icon" /> SIGNIN
                    </a>
                }
            />
            <div className="heading-action flex flex-col text-center">

                {(

                    !formData.verified ? (
                        <>
                            <button onClick={() => {
                                updateForm(true, "loading");
                                verifyAccount();
                            }} className="styled-button">
                                <AiOutlineCheckCircle className="icon" />
                                Verify now
                            </button>
                        </>
                    ) :

                        formData.loading ? (<></>) :
                            (<>
                                <h1>Your account is been verified!</h1>
                                <button className="styled-button" onClick={() => nav(`${get("prev-url")}`)}>
                                    <BiArrowBack className="icon" /> Back
                                </button></>

                            )


                )
                }


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
            </main>
        </div>
    );
};
