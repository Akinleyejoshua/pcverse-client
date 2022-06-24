import React, { useContext, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";

type Props = {
    id: string,
    show: boolean,
    question: string,
    callback: () => void,
}

export const Prompt: React.FC<Props> = ({ id, show, question, callback }) => {
    const [state, setState] = useState({
        toggle: (show || false),
    });

    const close = () => {
        setState({
            ...state,
            toggle: false,
        })
    }

    const { settings } = useContext(GlobalContext);

    return <div className={`prompt inside ${state.toggle && "outside"}`}>
        <div className={`p-content self-center text-center w-full h-full ${settings.bgMode}`}>
            <div className="info">
                {question}
            </div>
            <div className="actions flex justify-center w-full">
                <button className="styled-button" onClick={() => {
                    callback();
                    close();
                }}>
                    <BiCheckCircle className="icon" />
                    <p>Yes</p>
                </button>
                <button className="styled-button ml-2" onClick={close}>
                    <FaTimes className="icon" />
                    <p>No</p>
                    </button>
            </div>
        </div>
    </div>
}