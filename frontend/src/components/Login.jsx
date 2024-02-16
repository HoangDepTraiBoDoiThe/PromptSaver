import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();

  const googleLoginSuccess = (credential) => {
    const decoded = jwtDecode(credential.credential);
    localStorage.setItem("user", JSON.stringify(decoded));

    const doc = {
      _id: decoded.sub,
      _type: "user",
      name: decoded.name,
      email: decoded.email,
      image: decoded.picture,
    };
    client
      .createIfNotExists(doc)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(decoded);
  };

  const googleLoginFail = () => {};

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin onSuccess={googleLoginSuccess} onError={googleLoginFail} />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;
