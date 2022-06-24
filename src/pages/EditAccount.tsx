import { SideBar } from "../components/SideBar";
import { UserHeader } from "../components/UserHeader";
import { BottomNav } from "../components/BottomNav";
import React, { useState } from "react";
import { BiArrowBack, BiKey, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { Form } from "../components/Form";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GlobalContext } from "../context/GlobalContext";

export const EditAccount: React.VFC = () => {
    const [showEdit, setShowEdit] = useState(false);
    const { user } = React.useContext(GlobalContext);

    return (
        <div className="account flex flex-row w-full h-full text-white">
            <SideBar />
            <div className="App-User w-full h-full text-white">
                <UserHeader />
                <main className="flex flex-row justify-between">
                    <div
                        className={`flex flex-col justify-center h-full w-full ${!showEdit ? "width-full" : "width-none"
                            }`}
                    >
                        <div className="section flex flex-col text-center">
                            <div className="img">
                                <BiUserCircle className="icon" />
                            </div>

                            <div className="info mt-6 small">
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </div>

                            <button className="styled-button mt-6 small" onClick={() => setShowEdit(true)}>
                                <AiOutlineEdit className="icon" />
                                edit account</button>
                        </div>
                    </div>
                    <div
                        className={`help flex flex-col h-full w-full devices ${showEdit ? "width-full" : "width-none"
                            }`}
                    >
                        <button onClick={() => setShowEdit(false)} className="self-start">
                            <BiArrowBack className="icon" />
                            <p>Back</p>
                        </button>
                        <div className="heading-action flex flex-col text-center mt-6">
                            <h1>Edit your account</h1>
                            <p>The Form Autosaves has you leave the input field</p>
                        </div>


                        <Form id="account-edit items-center" submit={() => { }} children={
                            <>
                                {/* <div className="input-bar">
                                    <MdOutlineEmail className="icon" />
                                    <input type="email" placeholder="new email" />
                                </div>
                                <div className="input-bar">
                                    <HiOutlineUserCircle className="icon" />
                                    <input type="text" placeholder="new username" />
                                </div> */}

                                <div className="input-bar mt-6">
                                    <BiKey className="icon" />
                                    <input type="password" placeholder="new password" />
                                </div>
                                <div className="input-bar">
                                    <BiKey className="icon" />
                                    <input type="password" placeholder="confirm password"/>
                                </div>

                                <button className="mt-12 styled-button w-abs">
                                    <AiOutlineSave className="icon"/>
                                    Done
                                </button>
                            </>
                        } />
                    </div>
                </main>
                <BottomNav />
            </div>
        </div>
    );
};
