import { createContext } from "react";

export const AuthContext = createContext({
  Image: "",
  Name:"",
  userImageHandler: () => {},
  userNameHandler: () => {},
});
