import "./Login.css";
import { useState } from "react";
import { signIn } from "../../api/api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/reducers/userReducer";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const authenticateUser = () => {
    signIn(email, password).then((data) => {
      if (data.status === 200) {
        dispatch(setToken(data.body.token));
        setError(null);
        history.push("/profile");
      } else {
        setError(data.message);
      }
    });
  };

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        {error && <p style={{ color: "red" }}>{error}</p>}

        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <div className="input-wrapper">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(userinput) => setEmail(userinput.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(userinput) => setPassword(userinput.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={authenticateUser}>
          Sign in
        </button>
      </section>
    </div>
  );
}

export default Login;
