import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Button} from "@material-ui/core";
const LoginButton = (props) => {
    const {loginWithRedirect} = useAuth0();
  return (
    <div>
      {/* <button className="btn pl-3" style={{background: "#a5b1c2", fontWeight: "600"}} onClick={loginWithRedirect}>
        Login
      </button> */}
      <Button variant="contained" color="secondary" onClick={loginWithRedirect} size={props.size}>Login</Button>
    </div>
  );
};

export default LoginButton;