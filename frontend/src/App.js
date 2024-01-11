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

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState("");
  const userImageHandler = (img) => {
    setUserImage(img);
  };
  const userData = JSON.parse(localStorage.getItem("user"));
  const token = userData && userData.token;
  console.log("token---->", token);

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
      <AuthContext.Provider value={{ Image: userImage, userImageHandler }}>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route element={<DefaultLayout />}>
            {token ? (
              <Route index element={<ECommerce />} />
            ) : (
              navigate("/auth/signin")
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
