import { SideBar } from "../components/SideBar"
import { UserHeader } from "../components/UserHeader"
import { BottomNav } from "../components/BottomNav"

export const Downloads: React.VFC = () => {
    return <div className="downloads flex flex-row w-full h-full text-white">
        <SideBar />
        <div className="App-User w-full h-full text-white">
            <UserHeader />
            <main className="flex-col">
                <div className="accordion">
                    <button id="0"
                        className="accordion-name cursor-pointer flex justify-between items-centerb styled-button">WINDOWS 11</button>
                </div>

                <div className="panel m-left">
                    <div className="flex flex-col mt-2">
                        <button  className="styled-button small">Download Now</button>
                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    </div>
}