import {Signup, Dashboard, Signin, GetStarted, GetToken, AddDevice, EditAccount, Settings, Services, Downloads} from "../pages";

export const routes  = [
    {
        name: "login",
        path: "/signin",
        exact: true,
        protected: false,
        element: Signin
    },
    {
        name: "login",
        path: "/",
        exact: true,
        protected: false,
        element: Signin
    },
    {
        name: "signup",
        path: "/signup",
        exact: true,
        protected: false,
        element: Signup
    },
    {
        name: "dashboard",
        path: "/dashboard",
        exact: true,
        protected: true,
        element: Dashboard
    },
    {
        name: "get-started",
        path: "/get-started",
        exact: true,
        protected: true,
        element: GetStarted
    },
    {
        name: "get-token",
        path: "/get-token",
        exact: true,
        protected: true,
        element: GetToken
    },
    {
        name: "devices",
        path: "/devices",
        exact: true,
        protected: true,
        element: AddDevice
    },
    {
        name: "edit-account",
        path: "/edit-account",
        exact: true,
        protected: true,
        element: EditAccount
    },
    {
        name: "settings",
        path: "/settings",
        exact: true,
        protected: true,
        element: Settings
    },
    {
        name: "services",
        path: "/services",
        exact: true,
        protected: true,
        element: Services
    },
    {
        name: "downloads",
        path: "/downloads",
        exact: true,
        protected: true,
        element: Downloads
    },
]