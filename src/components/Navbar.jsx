// import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
// import Logo from "../img/logo2.jpeg";

const Navbar = () => {
  // const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to="/">
            <img src={Logo} alt="" />
          </Link> */}
          <h3>life<span>S</span></h3>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>About</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>Read</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Write</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Products</h6>
          </Link>
          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
          </div>
          <div className="account">
            <span className="login">
              <Link className="link" to="/login">
                Log in
              </Link>
            </span>
            <span className="signup">
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </span>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
