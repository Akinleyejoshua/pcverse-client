import { SideBar } from "../components/SideBar"
import { UserHeader } from "../components/UserHeader"
import { BottomNav } from "../components/BottomNav"

export const GetToken: React.VFC = () => {
    return <div className="gettoken-page flex flex-row w-full h-full text-white">
        <SideBar />
        <div className="App-User w-full h-full text-white">
            <UserHeader />
            <main className="flex-col">

            </main>
            <BottomNav />
        </div>
    </div>
}