import axiosInstance from "../../axios";

import { FormComponent } from "../../components/form";
export const SingIn = () => {
  const singInHandler = () => {
    // return axiosInstance
    //   .post("user/login", {
    //     email,
    //     password,
    //   })
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.user.token);
    //     console.log("response", res.data.user.token);
    //   })
    //   .catch((err) => {
    //     console.log("error--->", err);
    //   });

    return axiosInstance
      .get("user/", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log("error--->", err);
      });
  };
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Hello User</h1>
      <FormComponent singInHandler={singInHandler} />
    </>
  );
};
