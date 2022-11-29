import React from "react";
import useAuth from "../hooks/useAuth";

import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../store/user/selectors";
import { toLogin } from "../store/user/slice";

export default function AppLoginComponent() {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const { login } = useAuth();

  const handleOnLogin = async (e) => {
    e.preventDefault();
    try {
      await login(userData);
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleOnLogin} className="form-flex">
        <input
          className="input-text"
          placeholder="Email"
          type="email"
          value={userData.email}
          onChange={({ target }) =>
            dispatch(toLogin({ ...userData, email: target.value }))
          }
        />
        <input
          className="input-text"
          placeholder="Password"
          type="password"
          value={userData.password}
          onChange={({ target }) =>
            dispatch(toLogin({ ...userData, password: target.value }))
          }
        />
        <button type="submit" className="btn btn-blue">
          Login
        </button>
      </form>
    </div>
  );
}
