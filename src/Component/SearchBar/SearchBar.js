import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="sr-wrapper">
                    <input type="text" onChange={this.props.change} className="search" name="search" placeholder="Search" />
                    <i class="fa fa-search errspan " onClick={this.props.click} aria-hidden="true"></i>
                </div>
            </React.Fragment>

        )
    }
}
