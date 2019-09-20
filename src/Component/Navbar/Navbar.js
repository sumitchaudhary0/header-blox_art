import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Navitems from '../NavItems/Navitems';
import './Navbar.css';
import ToggleBtn from './ToggleBtn/ToggleBtn';
import ToggleMenu from './ToggleMenu/ToggleMenu';




export default class Navbar extends Component {
    state = {
        showMenu: false,
        showSearch: false
    }

    searchHandler = () => {
        this.setState({ showSearch: !this.state.showSearch, showMenu: false })
    }
    menuHandler = () => {
        this.setState({ showMenu: !this.state.showMenu, showSearch: false });
    }

    render() {
        return (
            <div className="container">
                <ul className="navbar">
                    <li className="logo-wrapper"><Link><img className="logo" src={process.env.PUBLIC_URL + './logo-makepop.png'} alt="logo here" /></Link></li>
                    <li className="explore-wrapper"><Link>Explore</Link></li>
                    <li className="search-wrapper"><SearchBar /></li>

                    <li className="items-wrapper"><Navitems /></li>
                    <i class="fa fa-search errspan-sm " onClick={this.searchHandler} aria-hidden="true"></i>
                    <li className="toggle-btn-wrapper"><ToggleBtn click={this.menuHandler} /></li>

                </ul>

                {this.state.showMenu &&
                    <ToggleMenu />
                }
                {
                    this.state.showSearch &&
                    <div className="search-sm-wrapper">
                        <SearchBar />
                    </div>
                }



            </div>
        )
    }
}
