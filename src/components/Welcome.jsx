import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleGetStartedClick = () => {
    // Start the animation
    setIsNavigating(true);

    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate("/chat");
    }, 500); // Match this with CSS transition duration
  };

  return (
    <div
      class={`flex flex-col items-center justify-center w-screen h-screen transition-opacity duration-700 ${
        isNavigating ? "opacity-0" : "opacity-100"
      }`}
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
    >
      <div class="text-center p-8 rounded-2xl mb-8 transition-transform duration-500">
        <h1
          class={`text-6xl font-bold mb-2 transition-transform duration-500 ${
            isNavigating ? "translate-y-10 opacity-0" : ""
          }`}
        >
          Welcome to FloorPlan AI
        </h1>
        <p
          class={`text-2xl text-gray-900 transition-transform duration-500 delay-100 ${
            isNavigating ? "translate-y-10 opacity-0" : ""
          }`}
          style={{ fontFamily: "Martel Sans, sans-serif" }}
        >
          Generate AI-powered floor plans with ease. <br />
          Just describe what you need, and we'll create it for you.
        </p>
      </div>
      <button
        class={`bg-white text-gray-800 font-bold py-3 px-8 rounded-full 
                  focus:outline-none focus:ring-4 focus:ring-white/50 
                  hover:bg-gray-100 hover:shadow-lg 
                  transition-all duration-300 group
                  ${isNavigating ? "scale-105 opacity-0" : ""}`}
        style={{ fontFamily: "Martel Sans, sans-serif" }}
        onClick={handleGetStartedClick}
        disabled={isNavigating}
      >
        <div class="flex items-center">
          <span class="group-hover:translate-x-[-4px] transition-transform duration-300">
            Get Started
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-0 h-5 overflow-hidden group-hover:w-5 transition-all duration-300 ml-0 group-hover:ml-2"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Welcome;
