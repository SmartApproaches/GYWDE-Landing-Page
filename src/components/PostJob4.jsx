import React, { useState } from "react";
import logo from "../assets/logo.svg";
import icon from "../assets/Ellipse 10.svg";
import "./PostJob4.css";

export default function App() {
  const [selected, setSelected] = useState(
    "Landing page for a Digital product"
  );
  return (
    <div className="wrapper">
      <img src={icon} alt="icon" className="icon" />
      <img src={logo} alt="Logo" className="logo" />

      <h1 className="title">
        Tell us what you <br /> need <span className="highlight">done.</span>
      </h1>

      <p className="subtitle">
        Answer three quick questions and we'll craft you the perfect project{" "}
        <br /> description!
      </p>

      <p className="text">
        Interactive Website with Rive and Spline animations and interactions
        <span>
          <div className="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pencil-icon"
            >
              <path d="M3 21l3-1 11-11-3-3L3 17l-1 4z" />

              <rect
                x="17"
                y="3"
                width="4"
                height="2"
                transform="rotate(45 17 3)"
                fill="black"
              />
            </svg>
          </div>
        </span>
      </p>

      <div className="question-row">
        <p className="question">
          What is the main purpose of your interactive website?
        </p>
        <span className="space">1 of 3</span>
      </div>

      <div className="options">
        <label>
          <input
            type="radio"
            value="Showcase Portfolio"
            checked={selected === "Showcase Portfolio"}
            onChange={(e) => setSelected(e.target.value)}
          />
          Showcase Portfolio
        </label>

        <label>
          <input
            type="radio"
            value="E-commerce Website"
            checked={selected === "E-commerce Website"}
            onChange={(e) => setSelected(e.target.value)}
          />
          E-commerce Website
        </label>

        <label>
          <input
            type="radio"
            value="Promote a Product/Service"
            checked={selected === "Promote a Product/Service"}
            onChange={(e) => setSelected(e.target.value)}
          />
          Promote a Product/Service
        </label>

        <label>
          <input
            type="radio"
            value="Landing page for a Digital product"
            checked={selected === "Landing page for a Digital product"}
            onChange={(e) => setSelected(e.target.value)}
          />
          Landing page for a Digital product
        </label>
      </div>
      <button className="next-btn">Next</button>
    </div>
  );
}
