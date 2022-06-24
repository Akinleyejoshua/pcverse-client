import { SideBar } from "../components/SideBar"
import { UserHeader } from "../components/UserHeader"
import { BottomNav } from "../components/BottomNav"

export const Settings: React.VFC = () => {

    return <div className="settings-page flex flex-row w-full h-full text-white">
        <SideBar />
        <div className="App-User w-full h-full text-white">
            <UserHeader />
            <main className="flex-col">
                <div className="section m-left">
                    <h1>Display</h1>
                    <p className="dim small">Choose a theme</p>
                    <div className="grid mt-2 justify-between" style={{width: "110%" }}>
                        <div onClick={() => localStorage.setItem("display-mode", "gradient-1-bg-welcome")} className="btn styled-button gradient-1-bg-welcome cursor-pointer" style={{ width: "5rem", height: "5rem" }}></div>
                        <div onClick={() => localStorage.setItem("display-mode", "gradient-2-bg-welcome")} className="btn styled-button gradient-2-bg-welcome cursor-pointer" style={{ width: "5rem", height: "5rem" }}></div>
                        <div onClick={() => localStorage.setItem("display-mode", "gradient-3-bg-welcome")}  className="btn styled-button gradient-3-bg-welcome cursor-pointer" style={{ width: "5rem", height: "5rem" }}></div>
                        <div onClick={() => localStorage.setItem("display-mode", "gradient-4-bg-welcome")} className="btn styled-button gradient-4-bg-welcome cursor-pointer" style={{ width: "5rem", height: "5rem" }}></div>
                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    </div>
}