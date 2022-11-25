import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import { useDispatch } from 'react-redux';
import { getAll } from "../store/cars/slice";
import Cars from '../services/Cars';


export default function Navbar() {
    const { user, logout } = useAuth();
    

    return (
        <div>
            {user.name &&
                <li className='list'>
                    <Link className="links" to='/cars'>Cars</Link>
                </li>}
            {user.name &&
                <li className='list'>
                    <Link className="links" to='/add'>Add Car</Link>
                </li>}
            {user.name &&
                <li className='list'>
                    <button className="links" onClick={() => logout()}>Logout</button>
                </li>}
            {!user.name &&
                <li className='list'>
                    <Link className="links" to='/register'>Register</Link>
                </li>}
            {!user.name &&
                <li className='list'>
                    <Link className="links" to='/login'>Login</Link>
                </li>}
                
        </div>
    )
}