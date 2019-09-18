import React, { Component } from 'react';
import './ToggleBtn.css';

export default class ToggleBtn extends Component {
    render() {
        return (
            <button onClick={this.props.click} className="toggle-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        )
    }
}
