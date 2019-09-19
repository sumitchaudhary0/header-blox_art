import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import SearchBox from './Component/SearchBar/SearchBox/SearchBox';


export default class App extends Component {
  state = {
    showMenu: false,
    searchBox: false,
    filterdata: [],
    inputValue: '',

    objects: [
      { imgUrl: 'logo-makepop.png', value: 'AMERICA' },
      { imgUrl: 'logo-makepop.png', value: 'JAPAN' },
      { imgUrl: 'logo-makepop.png', value: 'b' },
      { imgUrl: 'logo-makepop.png', value: 'ah' },
      { imgUrl: 'logo-makepop.png', value: 'c' },
      { imgUrl: 'logo-makepop.png', value: 'd' },
      { imgUrl: 'logo-makepop.png', value: 'd' },
      { imgUrl: 'logo-makepop.png', value: 'd' },
      { imgUrl: 'logo-makepop.png', value: 'e' },
      { imgUrl: 'logo-makepop.png', value: 'e' },
      { imgUrl: 'logo-makepop.png', value: 'e' },
    ],

  }



  changeHandler = (value) => {
    const query = value;
    const filteredData = this.state.objects.filter(element => {
      return element.value.toLowerCase().includes(query.toLowerCase());
    });
    console.log(filteredData, 'fgjhfgkjh');
  }


  render() {
    console.log(this.state.inputValue, '"input-value"')
    return (
      <React.Fragment>
        <div className="Navbar-Wrapper">
          <Navbar navBar={this.changeHandler} />

        </div>

        {this.state.searchBox &&
          <div className="search-box-wrapper">
            <SearchBox searchitems={this.state.objects} />
          </div>}

      </React.Fragment>
    )
  }
}
