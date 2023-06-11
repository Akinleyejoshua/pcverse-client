import { SideBar } from "../components/SideBar";
import { UserHeader } from "../components/UserHeader";
import { BottomNav } from "../components/BottomNav";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiDollar } from "react-icons/bi";
import { HiOutlineCash } from "react-icons/hi";
import { AiOutlineClockCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalContext";
import { PaystackButton } from "react-paystack";
import { formatCash } from "../utils/helpers";
import { Loader } from "../components/Loader";

export const GetToken: React.VFC = () => {
    const [showBuyNow, setShowBuyNow] = useState(false);

    const {

        transaction,
        handleTransaction,
        user,
        handleTransactionFromPayStack,
        transactions,

    } = React.useContext(GlobalContext);

    const [openAccordion, setOpenAccordion] = useState({
        id: "",
        open: true,
        prev: [],
    });

    const openAccPanel = (event: any, id: any) => {
        setOpenAccordion({
            ...openAccordion,
            id: event.target.id,
        });

        !(id == openAccordion.id)
            ? setOpenAccordion({
                ...openAccordion,
                id: event.target.id,
                open: openAccordion.open,
            })
            : setOpenAccordion({
                ...openAccordion,
                id: event.target.id,
                open: !openAccordion.open,
            });
    };

    interface transactType {
        email: string;
        amount: number;
        metadata: any;
        publicKey: string;
        text: any;
        onSuccess: Function;
        onClose: Function;
    }

    const transactProps: transactType = {
        email: user.email,
        amount: transaction.total * 100,
        metadata: {
            name: user.username,
        },
        publicKey: transaction.pb,
        text: (
            <>
                <AiOutlineShoppingCart className="icon" />
                <p>ADD NOW</p>
            </>
        ),
        onSuccess: (res: any) => {

            // console.log(res);
            handleTransactionFromPayStack(res);

            setShowBuyNow(false);
        },
        onClose: () => setShowBuyNow(false),
    };

    return (
        <div className="get-token flex flex-row w-full h-full text-white">
            <SideBar />
            <div className="App-User w-full h-full text-white">
                <UserHeader />
                <main className="flex flex-row justify-between">
                    {transaction.loading && <Loader />}
                    {user.loading && <Loader />}
                    <div
                        className={`flex flex-col h-full w-full ${!showBuyNow ? "width-full" : "width-none"
                            }`}
                    >
                        <div className="metrics w-full">
                            <div className="item">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex flex-col justify-between">
                                        <HiOutlineCash className="icon" />
                                        <p className="mt-2 mb-2">
                                            1 mcoin = ${transaction.conversion}
                                        </p>
                                        {/* <p>token</p> */}
                                    </div>
                                    <h1>{formatCash(user.mcoin)} </h1>
                                </div>
                                <button onClick={() => setShowBuyNow(true)}>
                                    <AiOutlineShoppingCart fontSize={20} />
                                    <p className="ml-2">Increase token</p>
                                </button>
                            </div>
                        </div>

                        <div className="transactions mt-6 w-full">
                            {/* {!transactions.items.includes("status") && <p>You have not made any transaction yet</p>} */}
                            {!(Object.keys(transactions.items).length === 0) ? transactions.items.map((items: any, i) => {
                                return <div key={i}
                                    className="w-full"
                                >
                                    <div
                                        id={`${i}`}
                                        key={i}
                                        onClick={(event) => openAccPanel(event, i)}
                                        className="accordion btn item styled-button flex flex-col justify-between items-center bb-dim"
                                    >
                                        <div
                                            id={`${i}`}
                                            key={i}

                                            onClick={(event) => openAccPanel(event, `${i}`)}
                                            className="flex cursor-pointer justify-between items-center text-center w-full h-full"
                                        >
                                            <div
                                                className="flex flex-co items-center text-center">
                                                {/* <AiOutlineShoppingCart className="icon" /> */}
                                                <p className="smaller ml-2">{items.status}</p>
                                            </div>
                                            <div className="flex flex-co text-center items-center">
                                                {/* <HiOutlineCash className="icon" /> */}
                                                <p className="smaller ml-2">{items.mcoin}MC ~ ${items.amount}</p>
                                            </div>
                                            <div className="timestamp flex flex-co small">
                                                {/* <AiOutlineClockCircle className="icon" /> */}
                                                <p className="smaller ml-2">{items.timestamp}</p>
                                            </div>
                                        </div>
                                        <div
                                            className={`panel w-full ${openAccordion.open && openAccordion.id === `${i}`
                                                ? "h-full"
                                                : "h-none"
                                                }`}
                                        >
                                            <div className="actions pt-2 flex w-full justify-between">
                                                <div className="flex justify-between w-full">
                                                    <div className="flex items-center text-center">
                                                        <p className="smaller ml-2">REF: {items.reference}</p>
                                                    </div>
                                                    <div className="flex text-center items-center">
                                                        <p className="smaller ml-2">{items.message}</p>
                                                    </div>
                                                    {/* <div className="timestamp flex ml-6 small">
                                            <p className="smaller ml-2">succesfull</p>
                                        </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }) : <p className="text-center">You have not made any transaction yet</p>}

                        </div>
                    </div>
                    <div
                        className={`help flex flex-col h-full w-full devices ${showBuyNow ? "width-full" : "width-none"
                            }`}
                    >
                        <button onClick={() => setShowBuyNow(false)} className="self-start">
                            <BiArrowBack className="icon" />
                            <p>Back</p>
                        </button>

                        <div className="heading-action flex flex-col text-center mt-6">
                            <h1>Multiply your MCOIN</h1>
                            <p>1 mcoin = $5</p>
                        </div>

                        <div className="flex flex-col">
                            <div className="input-bar mt-6">
                                <HiOutlineCash className="icon" />
                                <input
                                    type="number"
                                    placeholder="amount"
                                    onChange={(event) =>
                                        handleTransaction(event.target.value, "amount")
                                    }
                                />
                            </div>
                            <div className="input-bar">
                                <BiDollar className="icon" />
                                <input
                                    type="number"
                                    placeholder="price"
                                    disabled
                                    value={transaction.amount * transaction.conversion}
                                />
                            </div>
                        </div>
                        <PaystackButton {...transactProps} />
                    </div>
                </main>
                <BottomNav />
            </div>
        </div>
    );
};
