import React from "react";
import Login from "./Login";
import About from "./About";
import Mypage from "./Mypage";
import { Link, Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/:userid"> MyPage </Link>
        </li>
        <li>
          <button>Light / Dark</button>
        </li>
      </ul>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:userid" element={<Mypage />}></Route>
      </Routes>
    </div>
  );
}
