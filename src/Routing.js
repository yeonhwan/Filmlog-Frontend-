import Navbar from "./Components/Navigation/Navbar";
import PhotoList from "./Components/PhotoList/PhotoList";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Login from "./Components/Navigation/Login";
import About from "./Components/Navigation/About";
import Mypage from "./Components/Navigation/Mypage";
import SignUp from "./Components/Forms/SignUp";
import Home from "./Components/Pages/Home";
import '../src/Stylesheets/Routing.css'

function Routing() {
  return (
    <div className="Routing">
      <Routers>
        <Routes>
          <Route
            path="*"
            element={
              <div className="home">
                <Navbar className='navbar-component'/>
                <Home className='home-component'/>
              </div>
            }
          ></Route>
          <Route path="/login/*" element={<Login />}></Route>
          <Route
            path="/about/*"
            element={
              <div>
                <About />
                <Navbar />
              </div>
            }
          ></Route>
          <Route
            path="/signup/*"
            element={
              <div>
                <SignUp/>
              </div>
            }
          ></Route>
          <Route
            path="/:userid/*"
            element={
              <div>
                <Mypage />
                <Navbar />
              </div>
            }
          ></Route>
        </Routes>
      </Routers>
    </div>
  );
}

export default Routing;
