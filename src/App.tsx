import { useContext } from 'react';
import './App.css';
import "./Components.css";
import { GlobalContext } from './context/GlobalContext';
import AppRouter from './routes';

function App() {
const {settings} = useContext(GlobalContext);

  return (
    <div className={`${settings.bgMode === "" ? "gradient-2-bg-welcome": settings.bgMode}`}>
      <AppRouter />
    </div>
  )
}

export default App
