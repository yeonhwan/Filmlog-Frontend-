import React from "react";
import CommentsList from "../Comments/CommentsList";
import './Photo.css';

export default function Photo() {
  return (
    <div className="PhotoContainer">
      <img src="https://images.unsplash.com/photo-1636377768349-0fce2ce178f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2398&q=80"/>
      <h3>This is my photo</h3>
      <h4>username : King Smurf</h4>
      <h4>I love this Phto</h4>
      <h4>2020 : 03 : 28 : mon</h4>
      <h4>KODAK Colorplus 200</h4>
      <CommentsList/>
    </div>
  );
}
