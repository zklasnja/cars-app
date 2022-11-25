import React from 'react';


export default function AppLoginComponent({ newUser, setNewUser, handleOnLogin}) {

    return (
        <div >
            <form onSubmit={handleOnLogin} className='form-flex'>
                <input
                    className='input-text'
                    placeholder='Email'
                    type="email"
                    name="name"
                    value={newUser.email}
                    onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                />
                <input
                    className='input-text'
                    placeholder='Password'
                    type="password"
                    value={newUser.password}
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, password: target.value })
                    }
                />
                <button type="submit" className='btn btn-blue'>Login</button>
            </form>
        </div>
    )
}