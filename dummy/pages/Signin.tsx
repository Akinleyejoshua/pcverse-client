import React from "react";
import { AuthHeader } from "../components/AuthHeader";
import { Form } from "../components/Form";
import { useNavigate } from "react-router";
import { AiOutlineUserAdd, AiOutlineKey, AiOutlineLogin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

export const Signin: React.VFC = () => {
    const nav = useNavigate();

    return <div id="" className="App w-full h-full text-white p-6">
        <AuthHeader navChilds={
            <a onClick={() => nav("/signup")}><AiOutlineUserAdd className="icon" /> Signup</a>
        }/>

        <div className="heading-action flex flex-col text-center">
            <h1>SIGN-IN</h1>
            <p>     Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
</p>
        </div>
    
        <main className="flex-col">
            <Form id="auth-form" children={<>
                <div className="input-bar">
                    <MdOutlineEmail className="icon"/>
                    <input type="email" placeholder="email address"/>
                </div>
                <div className="input-bar">
                    <AiOutlineKey className="icon" />
                    <input type="password" placeholder="password"/>
                </div>

                <button onClick={() => nav('/dashboard')}>
                    <AiOutlineLogin className="icon"/>
                    Signin
                </button>
            </>} submit={() => { }} />
        </main>
    </div>
}