import React from "react";
import "./SignIn.css";
import bgImage from "../../assets/background.png";
import logo from "../../assets/ChatGPT Image Jul 6, 2025, 11_34_52 PM.png";

const SignIn: React.FC = () => {
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
            
            <span>Welcome to Ditto!</span>
            <span id="say">Login to start your smart work</span>

            <div className="form">
                <form>
                    <input type="text" id="mail" name="Email" placeholder="Email or Username"></input>
                    <input type="password" id="password" name="Password" placeholder="Password"></input>

                    <div className="forgot">
                        <button id="forgot">Forgot Password?</button>
                    </div>
                    

                    <div className="login">
                        <button id="login">Log In</button>
                    </div>

                    <div className="signup">
                        <p>Don't have an account?<button id="signup">Sign Up</button></p>
                    </div>
                    
                    
                    
                </form>
            </div>

        </div>
    
    </div>
  );
};

export default SignIn;
