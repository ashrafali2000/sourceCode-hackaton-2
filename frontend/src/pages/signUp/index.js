import axiosInstance from "../../axios";
import { FormComponent } from "../../components/form"

export const SingUp = () => {
    const singUpHandler = (name, email, password) => {
   return  axiosInstance.post("user/signup", {
      name,email,password
     }).then( (res) => {
         console.log("response", res);
       }).catch( (err) => {
         console.log("error--->", err);
       });
       
    };
    return (
        <>
        <h1 className="text-2xl font-bold text-center">Hello User</h1>
        <FormComponent signUp singUpHandler ={singUpHandler}/>
        </>
    )
}