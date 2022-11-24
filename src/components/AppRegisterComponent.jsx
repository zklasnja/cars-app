import React from 'react';


export default function AppRegisterComponent({ newUser, setNewUser, handleOnRegister, confirmPassword, setConfirmPassword}) {

    return (
        <div>
            <form onSubmit={handleOnRegister}>
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={({ target }) => setNewUser({ ...newUser, name: target.value })}
                    />
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={newUser.password}
                    onChange={({ target }) => setNewUser({ ...newUser, password: target.value })
                    }
                />
                <input
                    placeholder="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={({ target }) => setConfirmPassword(target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}