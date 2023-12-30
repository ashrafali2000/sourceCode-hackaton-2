// import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";
import './App.css';
import { SingUp } from "./pages/signUp";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { SingIn } from "./pages/signIn";
import { AuthContext } from "./contexts/authContext";
import { useState } from "react";

function App() {
  const [showCreatBtn, setShowCreatBtn] = useState(true)

const loginHandler = () => {
   setShowCreatBtn(false)
}
  return (
    <div className="max-w-7xl mx-auto px-5">
        <AuthContext.Provider value={{isLoggedIn:false, loginHandler}}>
      <Routes>
        <Route path="/" element = {<Navbar showCreatBtn = {showCreatBtn}/>}>
         <Route index element = {<Home />}/>
         <Route path="signUp" element = {<SingUp />}/>
         <Route path="signIn" element = {<SingIn />}/>
        </Route>
      </Routes>
        </AuthContext.Provider>
    </div>
  );
}

export default App;
