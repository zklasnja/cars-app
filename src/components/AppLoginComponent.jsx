import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function AppLoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleOnLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleOnLogin} className="form-flex">
        <input
          className="input-text"
          placeholder="Email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          className="input-text"
          placeholder="Password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="btn btn-blue">
          Login
        </button>
      </form>
    </div>
  );
}
