import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./components/common/Loader";
import ECommerce from "./pages/dashBoard/ECommerce";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import { useNavigate } from "react-router-dom";

import routes from "./routes";
import { AuthContext } from "./contexts/authContext";

const DefaultLayout = lazy(() => import("./layout/DefaultLayout"));
const userHandler = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const userImage1Handler = userHandler();
const userImage1 = userImage1Handler && userImage1Handler.userFound.images;
const userName1 = userImage1Handler && userImage1Handler.userFound.name;
console.log(userImage1);
console.log(userName1);
function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userData = userHandler();
  const token = userData && userData.token;
  console.log("token---->", token);
  const [userImage, setUserImage] = useState(userImage1);
  const [userName, setUserName] = useState(userName1);

  const userNameHandler = (name) => {
    setUserName(name);
  };
  const userImageHandler = (img) => {
    setUserImage(img);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <AuthContext.Provider
        value={{
          Image: userImage,
          userImageHandler,
          Name: userName,
          userNameHandler,
        }}
      >
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route element={<DefaultLayout />}>
            {!token ? (
              navigate("/auth/signin")
            ) : (
              <Route index element={<ECommerce />} />
            )}
            {routes.map((route, index) => {
              const { path, component: Component } = route;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
