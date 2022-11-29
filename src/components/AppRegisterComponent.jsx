import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { selectUserData } from "../store/user/selectors";
import { toRegister } from "../store/user/slice";

export default function AppRegisterComponent() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();

  const handleOnRegister = async (e) => {
    e.preventDefault();
    try {
      if (userData.password === confirmPassword) {
        await register(userData);
      } else {
        alert("Password and confirm password are not matching!");
      }
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleOnRegister} className="form-flex">
        <input
          className="input-text"
          placeholder="Name"
          type="text"
          name="name"
          value={userData.name}
          onChange={({ target }) =>
            dispatch(toRegister({ ...userData, name: target.value }))
          }
        />
        <input
          className="input-text"
          placeholder="Email"
          type="email"
          name="email"
          value={userData.email}
          onChange={({ target }) =>
            dispatch(toRegister({ ...userData, email: target.value }))
          }
        />
        <input
          className="input-text"
          placeholder="Password"
          type="password"
          value={userData.password}
          onChange={({ target }) =>
            dispatch(toRegister({ ...userData, password: target.value }))
          }
        />
        <input
          className="input-text"
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        <button type="submit" className="btn btn-blue">
          Register
        </button>
      </form>
    </div>
  );
}
