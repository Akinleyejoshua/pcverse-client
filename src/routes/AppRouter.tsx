import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { PrivateRoute } from "./ProtectedRoute";
import { Fragment, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router";
import React from "react";
import { get } from "../utils/helpers";

const AppRouter: React.VFC = () => {
    const { route } = React.useContext(GlobalContext);
    const nav = useNavigate();
    const auth = route.auth;

    useEffect(() => {

        if (auth) {
            auth && nav(`${get('prev-url') || "/dashboard"}`);
        } else {
            nav("/signin");
        }

    }, [auth]);


    return (
        <Fragment>
            <Routes>
                <Route element={<PrivateRoute />}>
                    {routes.map(items => items.protected && <Route {...items} element={<items.element />} key={items.name} />)}
                </Route>
                {
                    (
                        routes.map(items => !items.protected && <Route {...items} element={<items.element />} key={items.name} />)
                    )
                }
            </Routes>
        </Fragment>

    );
};

export default AppRouter;
