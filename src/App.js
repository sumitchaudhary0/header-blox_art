import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar';
import './App.css';


export default class App extends Component {
  state={
    showMenu:false
  }
 
  render() {
    return (
      <React.Fragment>
        <div className="Navbar-Wrapper">
          <Navbar />

        </div>
       
      </React.Fragment>
    )
  }
}
