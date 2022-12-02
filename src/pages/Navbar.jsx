import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user.token && (
        <li className="list">
          <Link className="links" to="/cars">
            Cars
          </Link>
        </li>
      )}
      {user.token && (
        <li className="list">
          <Link className="links" to="/add">
            Add Car
          </Link>
        </li>
      )}
      {user.token && (
        <li className="list">
          <button className="links" onClick={() => logout()}>
            Logout
          </button>
        </li>
      )}
      {!user.token && (
        <li className="list">
          <Link className="links" to="/register">
            Register
          </Link>
        </li>
      )}
      {!user.token && (
        <li className="list">
          <Link className="links" to="/login">
            Login
          </Link>
        </li>
      )}
    </div>
  );
}
