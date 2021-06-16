import React from "react";
import {useAuth0} from "@auth0/auth0-react";
const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
  return (
    <div style={{float: "right"}}>
      <button className="btn pl-3" style={{background: "#a5b1c2", fontWeight: "600"}} onClick={loginWithRedirect}>
        Login
      </button>
    </div>
  );
};

export default LoginButton;