import React, { useContext, useState } from "react";
import { v4 as uidqueId } from "uuid";
import "./pageStyle/loginPage.css";
import { OurContext } from "../contextAPI/FilterName";
import { useNavigate } from "react-router";

const Login = () => {
  const { setLogin } = useContext(OurContext);
  const navigate = useNavigate();
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

  // controls whether login or create account
  function loginPageHandler(e) {
    e.preventDefault();

    setIsLogin((state) => !state);

    setData({ name: "", email: "", password: "" });
    setErrorMessages({ nameErr: "", emailErr: "", passErr: "" });
  }

  function onSubmit(e) {
    e.preventDefault();

    // Calculate the errors
    const nameErr =
      data.name.length < 6 || data.name.length > 20
        ? "name must contain between 6 to 20 chars"
        : "";

    const emailErr =
      data.email.trim().length === 0 ? "this field is required" : "";

    const passErr = !data.password.match(
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;"'<>,.?/~`\\|-]).{5,}$/
    )
      ? "password must be at least 5 chars and contain letters, digits and special chars"
      : "";

    // Update the error state
    setErrorMessages({
      nameErr,
      emailErr,
      passErr,
    });

    // Handles dealing with database (after validation)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Login handle
    if (isLogin) {
      if (!emailErr && !passErr) {
        let emailExist = false;
        let loginCorrect = false;
        users.forEach((user) => {
          if (user.email === data.email) {
            emailExist = true;
            if (user.password === data.password) loginCorrect = true;
          }
        });

        if (emailExist) {
          if (loginCorrect) {
            setLogin(() => true);
            navigate("/");
          } else {
            // incorrect email or password
          }
        } else {
          // email is not exist
        }
      }
    }
    // Create account handle
    else {
      if (!nameErr && !emailErr && !passErr) {
        let isFound = users.some((user) => user.email === data.email);

        // add user to Database
        if (!isFound) {
          let user = { ...data, id: uidqueId() };
          users.push(user);
          localStorage.setItem("users", JSON.stringify(users));
          // current user
          localStorage.setItem("currentUser", JSON.stringify(user));

          // successfully created account
          setLogin(() => true);
          navigate("/");
        }
        // user already exists
        else {
          setTimeout(() => {
            setIsLogin(() => true);
            setData({ name: "", email: "", password: "" });
          }, 2000);
        }
      }
    }
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
