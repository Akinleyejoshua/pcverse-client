import { Outlet } from 'react-router-dom';
import { save } from "../utils/helpers";


export const PrivateRoute = () => {
  save("prev-url", location.pathname)

  return (<Outlet />)
}