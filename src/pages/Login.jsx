import React, { useState } from "react";
import "./pageStyle/loginPage.css";

const Login = () => {
  let users = [];
  const [isLogin, setIsLogin] = useState(false);
  const [data, SetData] = useState({
    name: null,
    email: null,
    password: null,
  });
  const [errorMessages, setErrorMessages] = useState({
    nameErr: null,
    passErr: null,
  });

  function inputHandler(e) {
    const inputName = e.target.id;
    const inputValue = e.target.value;

    if (inputName === "name") {
      SetData((data) => ({ ...data, name: inputValue }));
      setErrorMessages((errs) => ({
        ...errs,
        nameErr:
          inputValue.length < 6 || inputValue.length > 20
            ? "name must contain between 6 to 20 chars"
            : null,
      }));
    } else if (inputName === "password") {
      SetData((data) => ({ ...data, password: inputValue }));
      setErrorMessages((errs) => ({
        ...errs,
        passErr: !inputValue.match(
          /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/~`\\|-]).{5,}$/
        )
          ? "password must be at least 5 chars and contain letters, digits and special chars"
          : null,
      }));
    } else if (inputName === "email") {
      SetData((data) => ({ ...data, email: inputValue }));
    }
  }

  function loginPageHandler(e) {
    e.preventDefault();
    setIsLogin((state) => !state);
  }

  // function Onsubmit(e) {
  //   e.preventDefault();
  //   if (!errorMessages.nameErr || !errorMessages.passErr) return null;

  //   if (isLogin) {

  //   }
  //   else {

  //   }
  // }

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
                onChange={inputHandler}
              />
              {errorMessages.nameErr ? (
                <div className="error-msg">{errorMessages.nameErr}</div>
              ) : null}
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
              onChange={inputHandler}
            />
            {errorMessages.passErr ? (
              <div className="error-msg">{errorMessages.passErr}</div>
            ) : null}
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
