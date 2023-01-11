import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
