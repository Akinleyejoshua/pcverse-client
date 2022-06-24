import React, { useState } from "react"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdClose } from "react-icons/md";

type Props = {
    navChilds:any;
}

export const AuthHeader: React.FC<Props> = ({navChilds}:Props) => {

    const [open, setOpen] = useState(false);

    // console.log(open)

    return <header className="auth-header w-full">
        <nav className="flex justify-between items-center text-center">

            <div className="navbrand">
                <h3 className="flex">PC-VERSE</h3>
            </div>

            <BiDotsHorizontalRounded className="sm:hidden icon" onClick={() => setOpen(true)} />
            <div className="nav-links">
            {navChilds}
        </div>
        </nav>
        

        <div className={`sm:hidden auth-navbar flex flex-col justify-center items-center ${open && "show"}`}>
            <MdClose className="icon absolute top-2 left-2" onClick={() => setOpen(false)} />
            <div className="nav-links">
                {navChilds}
            </div>
        </div>
    </header>
}