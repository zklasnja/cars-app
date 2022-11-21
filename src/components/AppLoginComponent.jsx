import React from 'react';


export default function AppLoginComponent({ user, setUser, handleOnLogin, handleRefresh}) {

    return (
        <div>
            <form onSubmit={handleOnLogin}>
                <input
                    required
                    type="email"
                    name="name"
                    value={user.email}
                    onChange={({ target }) => setUser({ ...user, email: target.value })}
                />
                <input
                    required
                    type="password"
                    value={user.password}
                    onChange={({ target }) =>
                        setUser({ ...user, password: target.value })
                    }
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    )
}