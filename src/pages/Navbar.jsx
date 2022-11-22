import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div>
            <li className='list'>
                <Link className="links" to='/cars'>Cars</Link>
            </li>
            <li className='list'>
                <Link className="links" to='/add'>Add Car</Link>
            </li>
            <li className='list'>
                <Link className="links" to='/register'>Register</Link>
            </li>
            <li className='list'>
                <Link className="links" to='/login'>Login</Link>
            </li>
            <li className='list'>
                <Link className="links" to='/logout'>Logout</Link>
            </li>
        </div>
    )
}