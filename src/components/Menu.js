import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ children }) {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Be-Practical</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav nav">
                            <li>
                                <Link to="/app">App Component</Link>
                            </li>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Menu;