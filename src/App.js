import { useState } from 'react';
import './App.css';

function App() {
  const [overlayBoxStyle , setoverlayStyle] = useState({"zIndex":"-2"});
  const [styleOne,setstyleOne] = useState({"display":"block"});
  const [styleTwo,setstyleTwo] = useState({"display":"none"});
  const [type,setType] = useState("password");
  const ShowLoginBox = () => {
    setoverlayStyle({"zIndex":"2"});
  }
  const showRegisterBox = () => {
    setoverlayStyle({"zIndex":"-2"});
  }
  const handleStyleOne = () =>{
    setstyleOne({"display":"none"});
    setstyleTwo({"display":"block"});
    setType("text");
  }
  const handleStyleTwo = () =>{
    setstyleOne({"display":"block"});
    setstyleTwo({"display":"none"});
    setType("password");
  }

  return (
    <>
      <section className="container">
        <form className="formContainer" id="Box-1">
          <div className="leftBox">
            <h3 className="greetBox">
              Welcome Back!
            </h3>
            <p className="infoText">
              To keep connected with us please login with your personal info
            </p>
            <button className="loginBtn" onClick={ShowLoginBox}>
              LOG IN
            </button>
          </div>
          <div className="rightBox">
            <h3 className="regHeader">
              Create Account
            </h3>  
            <div className="socialIcon">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-google" />
              <i className="fab fa-linkedin-in" />
            </div>
            <p className="regInfoBox">
              or use your email for registration
            </p>
            <input type="text" name="myName" placeholder="User Name" required/>
            <input type="email" name="myEmail" placeholder="Email Address" required/>
            <input type={type} name="myPassword" placeholder="Enter Password" required/>
            <div className="passIcon">
              <i className="fas fa-eye" style={styleOne} onClick={handleStyleOne}></i>
              <i className="fas fa-eye-slash" style={styleTwo} onClick={handleStyleTwo}></i>
            </div>
            <div className="regCheckBox">
              <input type="checkbox" name="myCheckBox" id="regCheckBoxterm" required/>
              <span>I agree to the terms and condition</span>
            </div>
            <input type="submit" value="SIGN UP" />
          </div>
        </form>
      
        <form className="formContainer" style={overlayBoxStyle}>
          <div className="overlayleftBox">
            <h3 className="regHeader">
              Sign In
            </h3>  
            <div className="socialIcon">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-google" />
              <i className="fab fa-linkedin-in" />
            </div>
            <p className="regInfoBox">
              or use account with your email
            </p>
            <input type="email" name="myEmail" placeholder="Email Address" required/>
            <input type={type} name="myPassword" placeholder="Enter Password" required/>
            <div className="passIcon">
              <i className="fas fa-eye" style={styleOne} onClick={handleStyleOne}></i>
              <i className="fas fa-eye-slash" style={styleTwo} onClick={handleStyleTwo}></i>
            </div>
            <div className="regCheckBox" id="RemBox">
              <input type="checkbox" name="myCheckBox" id="regCheckBox" />
              <span>Remember Password</span>
            </div>
            <input type="submit" value="LOG IN" />
          </div>
          <div className="overlayrightBox">
            <h3 className="greetBox">
              Hello, Friend!
            </h3>
            <p className="infoText">
              Enter your personal details and start journey with us
            </p>
            <button className="loginBtn" onClick={showRegisterBox}>
              SignUp
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
