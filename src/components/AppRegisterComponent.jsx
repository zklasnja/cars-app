import React from 'react';


export default function AppRegisterComponent({ newUser, setNewUser, handleOnRegister, confirmPassword, setConfirmPassword}) {

    return (
        <div>
            <form onSubmit={handleOnRegister} className='form-flex'>
                <input
                    className='input-text'
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={({ target }) => setNewUser({ ...newUser, name: target.value })}
                    />
                <input
                    className='input-text'
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                />
                <input
                    className='input-text'
                    placeholder="Password"
                    type="password"
                    value={newUser.password}
                    onChange={({ target }) => setNewUser({ ...newUser, password: target.value })
                    }
                />
                <input
                    className='input-text'
                    placeholder="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={({ target }) => setConfirmPassword(target.value)}
                />
                <button type="submit" className='btn btn-blue'>Register</button>
            </form>
        </div>
    )
}