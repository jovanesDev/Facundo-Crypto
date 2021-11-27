import React from "react";
import Form from "../components/Form/Form";

const Login = () => {

  return (
    <div className="formWrapper">
      <div className=" loginContainer">
        <div className="formContainer">
          <h1 className="text-center py-2 ">Login</h1>
          <Form  />
        </div>
      </div>
    </div>
  );
};

export default Login;
