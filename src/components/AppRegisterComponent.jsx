import React from 'react';


export default function AppRegisterComponent({ user, setUser, handleOnRegister, handleConfirmPassword, confirmPassword, setConfirmPassword}) {

    return (
        <div>
            <form onSubmit={handleOnRegister}>
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={({ target }) => setUser({ ...user, name: target.value })}
                    />
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={({ target }) => setUser({ ...user, email: target.value })}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={user.password}
                    onChange={({ target }) =>
                        setUser({ ...user, password: target.value })
                    }
                />
                <input
                    placeholder="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={({ target }) =>
                    setConfirmPassword(target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}