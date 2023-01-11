import "./nav-bar.css";
import logo from "../../assets/images/argentBankLogo.png";
import signOut from "../../assets/images/arrow-right-from-bracket-solid.svg";
import signIn from "../../assets/images/right-to-bracket-solid.svg";
import profile from "../../assets/images/circle-user-solid.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProfile, removeToken } from "../../store/reducers/userReducer";

function NavBar() {
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeToken());
    dispatch(removeProfile());
  };
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {user ? (
        <div className="nav-right">
          <div>
            <Link
              className="profile"
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <img height={25} src={profile} />
              {user ? user.firstName : " "}
            </Link>
          </div>
          <Link onClick={() => logout()} className="main-nav-item" to="/login">
            Sign out
            <img height={20} src={signOut} />
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/login">
            <img height={20} src={signIn} />
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
