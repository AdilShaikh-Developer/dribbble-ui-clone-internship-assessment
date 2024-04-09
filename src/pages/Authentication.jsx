import { useEffect, useState } from "react";
import { RiAlertFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import graphic from "../assets/design & creativity.jpg";

import "../stylesheets/authentication.css";

const Authentication = () => {
  const [invalidUsernameAlert, setInvalidUsernameAlert] = useState(false);
  const [invalidEmailAlert, setInvalidEmailAlert] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [accountCreationCondition, setAccountCreationCondition] =
    useState(false);

  useEffect(() => {
    // Temporary logic all this logic will come from backend
    (invalidUsernameAlert || invalidEmailAlert) === false &&
    name &&
    username &&
    email &&
    password &&
    privacyPolicy
      ? setAccountCreationCondition(true)
      : setAccountCreationCondition(false);
  }, [name, username, email, password, privacyPolicy]);

  const navigate = useNavigate();

  return (
    <div className="authentication-page">
      <div className="illustration-container">
        <h1 className="logo">dribbble</h1>
        <p className="tagline">
          Discover the world's top Designers & Creatives.
        </p>
        <img src={graphic} className="graphic" />
        <span className="art-credit">
          Art by{" "}
          <Link to={"https://unsplash.com/@digitallgrowth"}>Vivek Sharma</Link>
        </span>
      </div>
      <div className="form-container" id="form-container">
        <span>
          Already a member? <Link to={"#"}>Sign In</Link>
        </span>
        <h4>Sign up to Dribbble</h4>
        <li
          style={
            invalidUsernameAlert || invalidEmailAlert
              ? { opacity: 1 }
              : { opacity: 0 }
          }
        >
          {invalidUsernameAlert ? "Username" : invalidEmailAlert ? "Email" : ""}{" "}
          has already been taken
        </li>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // all form handler's, queries, etc will be here

            navigate("/create-profile");
          }}
        >
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div>
              <label htmlFor="username">
                {invalidUsernameAlert ? <RiAlertFill /> : ""}
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="johndoe123"
                required
                onChange={(e) => {
                  e.target.value.toLowerCase() === "john"
                    ? setInvalidUsernameAlert(true)
                    : setInvalidUsernameAlert(false);
                  setUsername(e.target.value);
                }}
                value={username}
              />
            </div>
          </div>
          <label htmlFor="email">
            {invalidEmailAlert ? <RiAlertFill /> : ""}
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john.doe@email.com"
            required
            onChange={(e) => {
              e.target.value === "john.doe@email.com"
                ? setInvalidEmailAlert(true)
                : setInvalidEmailAlert(false);
              setEmail(e.target.value);
            }}
            value={email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="6+ characters"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <div className="terms-condition-container">
            <label className="checkbox">
              <input
                type="checkbox"
                required
                onChange={(e) => setPrivacyPolicy(e.target.checked)}
                value={privacyPolicy}
              />
              <span className="checkmark"></span>
            </label>
            <span>
              Creating an account means you're okay with our{" "}
              <Link to={"#"}>Terms of Service, Privacy Policy,</Link> and our
              default <Link to={"#"}>Notification Settings.</Link>
            </span>
          </div>

          <button
            className={`${
              accountCreationCondition ? "" : "disable"
            } submit-button`}
          >
            Create Account
          </button>
          <span
            className="return-message"
            style={accountCreationCondition ? { opacity: 1 } : { opacity: 0 }}
          >
            or Press RETURN
          </span>

          <span>
            This site is protected by reCAPTCHA and the Google{" "}
            <Link to={"#"}>Privicy Policy</Link> and{" "}
            <Link to={"#"}>Terms of Service</Link> apply.
          </span>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
