import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavItems.css';

export default class Navitems extends Component {
    render() {
        return (
            <React.Fragment>

                <ul className="navitems">
                    <li><Link>user</Link></li>
                    <li><Link>club</Link></li>
                    <li><Link>Logout</Link></li>
                </ul>
            </React.Fragment>
        )
    }
}
