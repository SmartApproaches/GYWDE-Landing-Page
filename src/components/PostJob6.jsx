import React, { useState } from "react";
import logo from "../assets/logo.svg";
import icon from "../assets/Ellipse 10.svg";
import "./PostJob6.css";

export default function App() {
  // Separate states for different groups
  const [mainPurpose, setMainPurpose] = useState(
    "Landing page for a Digital product"
  );
  const [landingGoal, setLandingGoal] = useState(
    "Provide Product information"
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
        <br />
        description!
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

      {/* First Question */}
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
            checked={mainPurpose === "Showcase Portfolio"}
            onChange={(e) => setMainPurpose(e.target.value)}
          />
          Showcase Portfolio
        </label>

        <label>
          <input
            type="radio"
            value="E-commerce Website"
            checked={mainPurpose === "E-commerce Website"}
            onChange={(e) => setMainPurpose(e.target.value)}
          />
          E-commerce Website
        </label>

        <label>
          <input
            type="radio"
            value="Promote a Product/Service"
            checked={mainPurpose === "Promote a Product/Service"}
            onChange={(e) => setMainPurpose(e.target.value)}
          />
          Promote a Product/Service
        </label>

        <label>
          <input
            type="radio"
            value="Landing page for a Digital product"
            checked={mainPurpose === "Landing page for a Digital product"}
            onChange={(e) => setMainPurpose(e.target.value)}
          />
          Landing page for a Digital product
        </label>
      </div>

      {/* Second Question */}
      <div className="question-header">
        <p className="question">
          What is the primary goal of your landing page?
        </p>
        <span className="step-counter">2 of 3</span>
      </div>

      <div className="options">
        <label>
          <input
            type="radio"
            value="Generate Leads"
            checked={landingGoal === "Generate Leads"}
            onChange={(e) => setLandingGoal(e.target.value)}
          />
          Generate Leads
        </label>

        <label>
          <input
            type="radio"
            value="Make sales"
            checked={landingGoal === "Make sales"}
            onChange={(e) => setLandingGoal(e.target.value)}
          />
          Make sales
        </label>

        <label>
          <input
            type="radio"
            value="Provide Product information"
            checked={landingGoal === "Provide Product information"}
            onChange={(e) => setLandingGoal(e.target.value)}
          />
          Provide Product information
        </label>

        <label className="disabled">
          <input
            type="radio"
            value="Other(please specify)"
            checked={landingGoal === "Other(please specify)"}
            onChange={(e) => setLandingGoal(e.target.value)}
          />
          Other(please specify){" "}
          {landingGoal === "Other(please specify)" && "(selected)"}
        </label>
      </div>

      <button className="next-btn">Next</button>
    </div>
  );
}
