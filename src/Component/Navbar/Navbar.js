import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Navitems from '../NavItems/Navitems';
import './Navbar.css';
import ToggleBtn from './ToggleBtn/ToggleBtn';
import ToggleMenu from './ToggleMenu/ToggleMenu';
import SearchBox from '../SearchBar/SearchBox/SearchBox';



export default class Navbar extends Component {
    state = {
        showMenu: false, showSearch: false, searchBox: false
        ,
        objects: [{ index: 1, value: 'a' }, { index: 2, value: 'b' }, { index: 3, value: 'c' }, { index: 4, value: 'd' }]
    }

    changeHandler = () => {
        this.setState({ searchBox: true })
    }
    searchHandler = () => {
        this.setState({ showSearch: !this.state.showSearch, showMenu: false })
    }
    menuHandler = () => {
        this.setState({ showMenu: !this.state.showMenu, showSearch: false })
    }
    render() {
        return (
            <div className="container">
                <ul className="navbar">
                    <li className="logo-wrapper"><Link><img className="logo" src={process.env.PUBLIC_URL + './logo-makepop.png'} alt="logo here" /></Link></li>
                    <li className="explore-wrapper"><Link>Explore</Link></li>
                    <li className="search-wrapper"><SearchBar change={this.changeHandler} /></li>
                    <li className="items-wrapper"><Navitems /></li>
                    <i class="fa fa-search errspan-sm " onClick={this.searchHandler} aria-hidden="true"></i>
                    <li className="toggle-btn-wrapper"><ToggleBtn click={this.menuHandler} /></li>

                </ul>
                {this.state.searchBox &&
                    <SearchBox searchitems={this.state.objects} />}
                {this.state.showMenu &&
                    <ToggleMenu />
                }
                {
                    this.state.showSearch &&
                    <div className="search-sm-wrapper">
                        <input className="search-sm" type="search" q="googlesearch" />
                    </div>
                }



            </div>
        )
    }
}
