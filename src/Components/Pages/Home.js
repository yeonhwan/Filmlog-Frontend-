import React from "react";
import "../../Stylesheets/Pages/Home.scss";

export default function Home() {
  return (
    <div className="home-background-img">
      <div className="home-background-color-shaper">
      <main className="home-container">
        <div className="home-title-container">
          <img className="main-logo" alt="logo" src="/film_logo.svg"></img>
          <h1 className="home-title mb-3">UNWIND</h1>
          <div className="home-title-underline mb-3"></div>
          <div className="home-title-phrases">
            <p className="home-title-phrases-emphasis me-2 mb-0">Upload, </p>
            <p className="mb-0"> your photography</p>
            <p className="home-title-phrases-emphasis me-2 mb-0">Share it, </p>
            <p className="mb-0"> your photography</p>
            <p className="home-title-phrases-emphasis me-2 mb-0">Get inspired, </p>
            <p className="mb-0"> your photography</p>
          </div>
          <div className="home-title-upload-button mt-5">
            <p>Introduce your “POINT OF VIEW” to the world</p>
            <button className="btn btn-warning">Upload Your Own</button>
          </div>
        </div>
        <div className="home-photolist-container">
          <p>this will go to photo lists</p>
        </div>
      </main>
      </div>
    </div>
  );
}
