import React, { useContext, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { auth } from 'firebase'

export const Nav = () => {
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const { user } = state;

  const logout = () => {
    auth().signOut();
    dispatch({
      type: "LOGGED_IN_USER",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Navbar</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        {user && (
          <li>
            <Link to="/profile">{user.email.split("@")[0]}</Link>
          </li>
        )}
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <a onClick={logout} href="/login">
              Logout
            </a>
          </li>
        )}
      </ul>
      <form>
        <input type="search" placeholder="Search" />
        <button>Search</button>
      </form>
    </nav>
  );
};
