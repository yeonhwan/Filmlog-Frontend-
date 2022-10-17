import React from "react";
import Login from "./Login";
import About from "./About";
import Mypage from "./Mypage";
import { Link, Routes, Route } from "react-router-dom";
import "../../Stylesheets/Navigation/Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar py-0 navbar-expand navbar-container">

        <div className="all-navbar-items-container">
          <div className="navbar-brands-container">
            <img className='navbar-logo ps-3' alt="logo" src='/film_logo.svg'></img>
            <Link className="navbar-brand ps-2" to="/"> UNWIND </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-items-container collapse navbar-collapse">
            <ul className="navbar-nav mb-2">
              <li className="nav-item">
                <Link className="nav-link me-3" to="/login"> Login </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/about"> About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="/about"> Inspire </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link me-5" to="/:userid"> MyPage </Link>
              </li>
              <li className="nav-item me-3 darkmode-toggler">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> 
                    <i className="fa-solid fa-moon"></i>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:userid" element={<Mypage />}></Route>
      </Routes>
    </nav>
  );
}
