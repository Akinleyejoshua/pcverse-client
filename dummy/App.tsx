import './App.css';
import "./Components.css";
import AppRouter from './routes';

function App() {

  return (
    <div className={`gradient-2-bg-welcome ${localStorage.getItem("display-mode")}`}>
      <AppRouter />
    </div>
  )
}

export default App
