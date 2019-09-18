import React, { Component } from 'react';
import './SearchBar.css';



export default class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sr-wrapper">
                    <input className="search" onChange={this.props.change} type="search" q="googlesearch" />
                    <i class="fa fa-search errspan " onClick={this.props.click} aria-hidden="true"></i>
                </div>
            </React.Fragment>

        )
    }
}
