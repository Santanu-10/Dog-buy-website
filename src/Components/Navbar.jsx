import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const loginstyle = {
    border: "1px solid #007067",
    backgroundColor: "#007067",
  };

  const sidenavstyle = {
    backgroundColor: "#007067",
    padding: "15px",
    margin: "35px",
    listStyle: "none",
    borderRadius: "10px",
    color: "#fff",
  };

  const [btnState, SetBtnState] = useState(false);

  function handleClick() {
    SetBtnState((btnState) => !btnState);
  }

  let OnClick = btnState ? " active" : "";

  return (
    <>
      <div class={`side${OnClick}`} id="side">
        <div class="side_nav_logo">
          <div>
            <a href="/">
              <img src="./assets/Images\g104.png" alt="Logo" />
            </a>
          </div>
          <div onClick={handleClick} class="close" id="close">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <ul>
          <a href="ourService.html">
            <Link to="/ourservice">
              {" "}
              <li>Our Service</li>{" "}
            </Link>
          </a>
          <a href="ourPeople.html">
            <Link to="/ourpeople">
              {" "}
              <li>Our People</li>{" "}
            </Link>
          </a>
          <a href="aboutUs.html">
            <Link to="/about">
              {" "}
              <li>About Us</li>{" "}
            </Link>
          </a>
          <a href="contactUs.html">
            <Link to="/contact">
              {" "}
              <li>Contact</li>{" "}
            </Link>
          </a>
          <a href="login.html" class="nav-login">
            <Link to="/login">
              {" "}
              <li style={sidenavstyle}>Login</li>{" "}
            </Link>
          </a>
        </ul>
      </div>

      <div className="mobile">
        <div className="hambarger" id="menu">
          <i onClick={handleClick} className="fa-solid fa-bars"></i>
        </div>
        <div className="ico" id="ico">
          <a href="/">
            <img src="./assets/Images\g104.png" alt="" />
          </a>
        </div>
      </div>

      <div className="navbar" id="navbar">
        <div className="logo">
          <a href="/">
            <Link to="/">
              {" "}
              <img src="./assets/Images\g104.png" alt="Logo" />
            </Link>
          </a>
        </div>
        <ul className="menu">
          <Link to="/ourservice">
            <li>
              <a href="/">Our Services</a>
            </li>
          </Link>
          <Link to="/ourpeople">
            <li>
              <a href="/">Our People</a>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <a href="/">About Us</a>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <a href="/">Contact Us</a>
            </li>
          </Link>
          <Link to="/login">
            <li style={loginstyle}>
              <a href="/" id="login">
                Login
              </a>
            </li>
          </Link>
        </ul>
        <ul className="mobile-menu">
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
