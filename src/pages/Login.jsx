import React, { useState } from "react";
import "./pageStyle/loginPage.css";

const Login = () => {
  let users = [];

  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    nameErr: "",
    passErr: "",
    emailErr: "",
  });

  function loginPageHandler(e) {
    e.preventDefault();

    setIsLogin((state) => !state);

    setErrorMessages({ nameErr: "", emailErr: "", passErr: "" });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("sondumbit");

    setErrorMessages(() => ({
      nameErr:
        data.name.length < 6 || data.name.length > 20
          ? "name must contain between 6 to 20 chars"
          : "",

      emailErr: data.email.trim().length === 0 ? "this field is required" : "",

      passErr: !data.password.match(
        /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/~`\\|-]).{5,}$/
      )
        ? "password must be at least 5 chars and contain letters, digits and special chars"
        : "",
    }));

    if (
      !errorMessages.nameErr &&
      !errorMessages.emailErr &&
      !errorMessages.passErr
    )
      console.log("cant take user data");
  }

  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={onSubmit}>
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
                  setData((data) => ({ ...data, name: e.target.value }))
                }
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
                setData((data) => ({ ...data, email: e.target.value }))
              }
            />
            {errorMessages.emailErr ? (
              <div className="error-msg">{errorMessages.emailErr}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) =>
                setData((data) => ({ ...data, password: e.target.value }))
              }
            />
            {errorMessages.passErr ? (
              <div className="error-msg">{errorMessages.passErr}</div>
            ) : null}
          </div>
          <button className="form-btn" type="submit">
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
