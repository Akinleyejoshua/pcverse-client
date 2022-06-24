import { SideBar } from "../components/SideBar"
import { UserHeader } from "../components/UserHeader"
import { BottomNav } from "../components/BottomNav"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export const Settings: React.VFC = () => {
    const { handleBgMode } = useContext(GlobalContext);

    const changeBGMode = (val: string) => {
        localStorage.setItem("display-mode", val);
        handleBgMode(val);
    }

    return <div className="settings-page flex flex-row w-full h-full text-white">
        <SideBar />
        <div className="App-User w-full h-full text-white">
            <UserHeader />
            <main className="flex-col">
                <div className="section m-left">
                    <h1>Display</h1>
                    <p className="dim small">Choose a theme</p>
                    <div className="flex mt-2 justify-between" style={{ width: "110%" }}>
                        <button onClick={() => changeBGMode("gradient-1-bg-welcome")} className="gradient-1-bg-welcome cursor-pointer" style={{ width: "3rem", height: "3rem" }}></button>
                        <button onClick={() => changeBGMode("gradient-2-bg-welcome")} className="gradient-2-bg-welcome cursor-pointer" style={{ width: "3rem", height: "3rem" }}></button>
                        <button onClick={() => changeBGMode("gradient-3-bg-welcome")} className="gradient-3-bg-welcome cursor-pointer" style={{ width: "3rem", height: "3rem" }}></button>
                        <button onClick={() => changeBGMode("gradient-4-bg-welcome")} className="gradient-4-bg-welcome cursor-pointer" style={{ width: "3rem", height: "3rem" }}></button>
                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    </div>
}