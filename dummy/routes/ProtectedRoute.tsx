import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProtectedRoute = ({ children }: any ) => {
  return children.map(({items}:any, {i}:any) => <Route children={items} key={i}/>)
};

export default ProtectedRoute;
