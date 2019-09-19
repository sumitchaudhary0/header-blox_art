import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import SearchBox from './Component/SearchBar/SearchBox/SearchBox';


export default class App extends Component {
  state = {
    showMenu: false,
    searchBox: false,
    matchesbox:'',
  


    objects: [
      { imgUrl: 'logo-makepop.png', valu: 'AMERICA' },
      { imgUrl: 'logo-makepop.png', valu: 'JAPAN' },
      { imgUrl: 'logo-makepop.png', valu: 'AFRICA' },
      { imgUrl: 'logo-makepop.png', valu: 'CANADA' },
      { imgUrl: 'logo-makepop.png', valu: 'CHINA' },
      { imgUrl: 'logo-makepop.png', valu: 'TURKEY' },
      { imgUrl: 'logo-makepop.png', valu: 'SINGAPORE' },
      { imgUrl: 'logo-makepop.png', valu: 'SRILANKA' },
      { imgUrl: 'logo-makepop.png', valu: 'WEST INDIES' },
      { imgUrl: 'logo-makepop.png', valu: 'VIETNAM' },
      { imgUrl: 'logo-makepop.png', valu: 'PHILLEPINES' },
    ],

  }



  changeHandler = (value) => {
   
    const result = this.state.objects.map((values )=>{ 
      return values.valu
    })

      const matches = result.filter(states =>
        {  
          const regex =new RegExp(`^${value}`,'gi');
          return  states.match(regex);
          
        });
    this.setState({matchesbox:matches,})
    
     if(value.length ===0 )
     {
      this.setState({searchBox:false})
     }
     else{
       this.setState({searchBox:true})
     }
   
  }  
    


  render() {
   console.log(this.state.matchesbox,'matches')
    return (
      <React.Fragment>
        <div className="Navbar-Wrapper">
          <Navbar navBar={this.changeHandler} />

        </div>

        {this.state.searchBox &&
          <div className="search-box-wrapper">
            <SearchBox searchitems={this.state.matchesbox} />
          </div>}

      </React.Fragment>
    )
  }
}
