import { message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const Navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));

  const logoutHandler = () => {
    Navigate("/login");
    localStorage.removeItem("userDetails");
    message.info("Logout successfully");
  };

  return (
    <header className="brand-navigation">
      <div className="content">
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {userInfo?.userId ? (
                <Link to="#">welcome {userInfo?.name}</Link>
              ) : (
                <Link to="/login">login/Signup</Link>
              )}
            </li>
          </ul>
        </nav>
        {userInfo?.userId ? (
          <button className="button-dark" onClick={() => logoutHandler()}>
            logout
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
