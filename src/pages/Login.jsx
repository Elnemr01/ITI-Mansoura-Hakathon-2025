import React, { useState } from "react";
import "./pageStyle/loginPage.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [data, SetData] = useState({
    name: null,
    email: null,
    password: null,
  });

  function loginPageHandler(e) {
    e.preventDefault();
    setIsLogin((state) => !state);
  }

  return (
    <div className="login-page">
      <div className="form">
        <form>
          <h2>{isLogin ? "Login" : "Create Account"}</h2>
          <span className="sub-title">
            Please {isLogin ? "log" : "sign up"} to book appointment
          </span>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">full name</label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) =>
                  SetData((data) => ({ ...data, name: e.target.value }))
                }
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) =>
                SetData((data) => ({ ...data, email: e.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) =>
                SetData((data) => ({ ...data, password: e.target.value }))
              }
            />
          </div>
          <button className="form-btn">
            {isLogin ? "Login" : "Create account"}
          </button>
          <p className="form-foot">
            <span>
              {isLogin ? "Create an new account" : "Already have an account"}?{" "}
              <button className="to-login" onClick={loginPageHandler}>
                {isLogin ? "Click" : "Login"} here
              </button>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
