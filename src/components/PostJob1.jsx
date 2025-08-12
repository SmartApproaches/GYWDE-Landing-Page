import React, { useState } from "react";
import logo from "../assets/logo.svg";
import icon from "../assets/Ellipse 10.svg";
import "./PostJob1.css";

export default function App() {
  const [description, setDescription] = useState(
  );

  return (
    <div className="wrapper">
      <img src={icon} alt="icon" className="icon" />
      <img src={logo} alt="Logo" className="logo" />

      <h1 className="title">
        Tell us what you <br /> need <span className="highlight">done.</span>
      </h1>

      <p className="subtitle">
        We'll guide you to create a perfect brief. The more detail the better.
      </p>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input"
        placeholder="Enter a few bullet points or a full description of your project."
      />

      <button className="next-btn">Next</button>
    </div>
  );
}
