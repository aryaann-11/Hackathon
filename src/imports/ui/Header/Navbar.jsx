import React from "react";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";
const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid nav1">
          <a className="navbar-brand navB" style={{color: "white", fontWeight: "600"}} href="#">
            {/* Change font color if required. */}
            Treefer
          </a>
          <button
            className="navbar-toggler nav-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active navText" aria-current="page" href="#" style={{color: "white", fontWeight: "600"}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navText" href="#" style={{color: "white", fontWeight: "600"}}>
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle navText"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color: "white", fontWeight: "600"}}
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#" style={{fontWeight: "400"}}>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" style={{fontWeight: "400"}}>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" style={{fontWeight: "400"}}>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  style={{fontWeight: '600'}}
                  className="nav-link disabled navText"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                  style={{color: "white", fontWeight: "600"}}
                >
                  Disabled
                </a>
              </li>
              {isAuthenticated ? (
                <li className="nav-item">
                  <LogoutButton />
                </li>
              ) : (
                <li className="nav-item" >
                  <LoginButton />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
