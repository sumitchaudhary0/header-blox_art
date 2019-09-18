import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {

        return (
            <div className="searchbox">
                {console.log(this.props.searchitems)}
            </div>
        )
    }
}
