import React from "react";
import Login from "./Login";
import About from "./About";
import Mypage from "./Mypage";
import { Link, Routes, Route } from "react-router-dom";
import "../../Stylesheets/Navigation/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-light navbar-container">
      <div className="container-fluid">
        <div className="all-navbar-items-container">
          <div className="navbar-brands-container">
            <Link className="navbar-brand" to="/"> UNWIND </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-items-container collapse navbar-collapse">
            <ul className="navbar-nav mb-2">
              <li className="nav-item">
                <Link className='nav-link'to="/login"> Login </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> About </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/:userid"> MyPage </Link>
              </li>
              <li className="nav-item">
                <button className="btn-btn-primary">Light / Dark</button>
              </li>
            </ul>
          </div>
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
