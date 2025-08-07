import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login_div">
      <img src={logo} alt="" className="login_logo" />
      <div className="login_form">
        <h1> {signState}</h1>
        <form>
          {signState === "Sign Up" && (
            <input type="text" placeholder="Insert your Name" />
          )}

          <input type="email" placeholder="Insert your Email" />
          <input type="password" placeholder="Insert your password" />
          <button>{signState}</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
