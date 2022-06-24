import React, {useState} from "react"
import { FaSignInAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

type Props = {
    toggle: boolean;
}

export const AuthNavbar: React.FC<Props> = ({ toggle }) => {
    const [open, setOpen] = useState(false);

    return open ? <div className="auth-navbar flex flex-col justify-center items-center">
        <MdClose className="icon absolute top-2 right-2" onClick={() => setOpen(false)}/>
        <div className="nav-links">
            <a href="/signin"><FaSignInAlt className="icon"/> Signin</a>
        </div>
    </div> : <></>

}