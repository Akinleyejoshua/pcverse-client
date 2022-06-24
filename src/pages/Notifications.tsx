import { SideBar } from "../components/SideBar"
import { UserHeader } from "../components/UserHeader"
import { BottomNav } from "../components/BottomNav"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Loader } from "../components/Loader"

export const Notifications: React.VFC = () => {
    const { user } = useContext(GlobalContext);

    return <div className="notifications flex flex-row w-full h-full text-white">
        <SideBar />
        <div className="App-User w-full h-full text-white">
            <UserHeader />
            <main className="flex-col">
                {user.loading && <Loader />}
                <div className="section flex rfc w-full">
                    {
                        !(Object.keys(user.notifications).length === 1) ? user.notifications.map((items: any) => <div className="w-full item" key={items._id}>
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between w-full ">
                                    <p>{items.info}</p> {
                                        items.seen ? <button>
                                            <AiOutlineEye className="icon" />
                                            read
                                        </button> : <button>
                                            <AiOutlineEyeInvisible className="icon" />
                                            unread
                                        </button>
                                    }
                                </div>
                                <div className="m-right">
                                    {items.timestamp}
                                </div>
                            </div>
                        </div>) : <p>You dont have any notification</p>
                    }
                </div>
            </main>
            <BottomNav />
        </div>
    </div>
}