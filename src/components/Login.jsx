import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  // absolute removes from flow
  // relative stays in the flow
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
          alt="bgImg"
        />
      </div>

      <form className="absolute bg-[#000000bb] p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md">
        <h1 className="text-3xl py-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-[#5453532e] border border-[gray] rounded-md focus:outline-white"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-[#5453532e] border border-[gray] rounded-md focus:outline-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-[#5453532e] border border-[gray] rounded-md focus:outline-white"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
