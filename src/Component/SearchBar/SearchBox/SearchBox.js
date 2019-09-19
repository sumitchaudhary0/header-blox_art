import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SearchBox.css';

export default class SearchBox extends Component {

    constructor(props) {
        super(props);
        console.log(this.props, 'props');
    }
    render()
  
    {
           
        return (
            <div className="searchbox">
                <ul>
                    {this.props.searchitems.map((gameItem) => {
                        return (
                            <Link>
                                <li >
                                    <span className="box-img"><img width="100%" src={gameItem.imgUrl} /></span>
                                    <span className="box-txt"> {gameItem}</span>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
              
            </div>
        )
    }
}
