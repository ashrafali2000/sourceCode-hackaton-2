// import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";
import './App.css';
import { SingUp } from "./pages/signUp";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Routes>
        <Route path="/" element = {<Navbar/>}>
         <Route index element = {<SingUp />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
