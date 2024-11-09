import React from "react";
import LoginPageImage from "./Assets/Login_Page_Image.webp";
import LoginForm from "./LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {  

  return (
    <div id="Login-Page" className="Login-Page">
      <div className="Login-Page-Image-Holder">
        <img src={LoginPageImage} alt={LoginPageImage} />
      </div>
      <div className="Login-Page-Form">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
