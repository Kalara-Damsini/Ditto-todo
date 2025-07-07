import React from "react";
import "./SignUp.css";
import bgImage from "../../assets/background.png";
import logo from "../../assets/ChatGPT Image Jul 6, 2025, 11_34_52 PM.png";

const SignUp: React.FC = () => {
  return (
    <div
      className="signin-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

        <div className="book">
            <p>Let's get into work.</p>
            <p>Smart Life.</p>
            <p>Easy Work.</p>
        </div>

        <div className="form-container">

            <div className="ditto">
            <img src={logo} alt="Ditto Logo" className="logo" />
            </div>
            
            <span>Sign Up and Dive In!</span>
            <span id="say">Explore the smart work</span>

            <div className="form">
                <form>
                    <input type="text" id="mail" name="Email" placeholder="Email or Username"></input>
                    <input type="password" id="password" name="Password" placeholder="Password"></input>
                    <input type="password" id="confpassword" name="Password" placeholder="Confirm Password"></input>

                    <div className="agree">
                        <input type="checkbox" id="agree" name="agree" />
                        <label htmlFor="agree" id="con">Agree to the Terms and Conditions</label>
                    </div>
                    

                    <div className="signup">
                        <button id="signup">Sign Up</button>
                    </div>

                    <div className="login">
                        <p>Don't have an account?
                        <button id="login">Log In</button></p>
                    </div>
                    
                    
                    
                </form>
            </div>

        </div>
    
    </div>
  );
};

export default SignUp;
