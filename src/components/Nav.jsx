import React from "react";


const Nav = () => {
  return (
    <nav className="nav">
      <img className="frame" src="./images/frame.png" alt="frame" />
      <input type="checkbox" id="click"/>
      <label for="click" className="ham-burger">        
        <img className="burger" src="./images/ham-burger.png" />
      </label>

      <ul>
        <li>How to</li>
        <li>Why ScaleHire</li>
        <li>Reviews</li>
        <li>FAQ</li>
      </ul>
      <button className="login">Login</button>
    </nav>
  );
};

export default Nav;
