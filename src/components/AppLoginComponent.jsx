import React from 'react';


export default function AppLoginComponent({ newUser, setNewUser, handleOnLogin}) {

    return (
        <div>
            <form onSubmit={handleOnLogin}>
                <input
                    required
                    type="email"
                    name="name"
                    value={newUser.email}
                    onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                />
                <input
                    required
                    type="password"
                    value={newUser.password}
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, password: target.value })
                    }
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}