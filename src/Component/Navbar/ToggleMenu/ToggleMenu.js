import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ToggleMenu.css';

export default class ToggleMenu extends Component {
    render() {
        return (
            <ul className="togglemenu">
                <li><Link>Explore</Link></li>
                <li><Link>user</Link></li>
                <li><Link>Club</Link></li>
                <li><Link>Logout</Link></li>
            </ul>
        )
    }
}
