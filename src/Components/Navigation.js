import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link to="/landing" className="active">Start</Link>
                <Link to="/story">O co chodzi?</Link>
                <Link to="/about">O nas</Link>
                <Link to="/organizations">Fundacje i organizacje</Link>
                <Link to="/contact">Kontakt</Link>
            </nav>
        )
    }
}

export default Navigation;
