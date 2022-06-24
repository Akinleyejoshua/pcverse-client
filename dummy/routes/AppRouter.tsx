import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { routes } from "./routes";

const AppRouter = () => {
    return <Router>
        <Routes>
            {
                routes.map((items, i) => !items.protected ? <Route {...items} element={<items.element/>} key={i}/> : 
                <Route {...items} element={<items.element/>} key={i} />)
            }
        </Routes>
    </Router>
}

export default AppRouter;