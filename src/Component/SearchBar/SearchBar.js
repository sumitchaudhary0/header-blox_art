import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
            searchBox: false,
            matchesbox: '',
            searchInput: '',
            objects: [
                { index: 0, imgUrl: 'Australia.png', valu: 'AMERICA' },
                { index: 1, imgUrl: 'Australia.png', valu: 'JAPAN' },
                { index: 2, imgUrl: 'Australia.png', valu: 'AFRICA' },
                { index: 3, imgUrl: 'Australia.png', valu: 'CANADA' },
                { index: 4, imgUrl: 'Australia.png', valu: 'CHINA' },
                { index: 5, imgUrl: 'Australia.png', valu: 'TURKEY' },
                { index: 6, imgUrl: 'Australia.png', valu: 'SINGAPORE' },
                { index: 7, imgUrl: 'Australia.png', valu: 'SRILANKA' },
                { index: 8, imgUrl: 'Australia.png', valu: 'WEST INDIES' },
                { index: 9, imgUrl: 'Australia.png', valu: 'VIETNAM' },
                { index: 10, imgUrl: 'Australia.png', valu: 'PHILLEPINES' },
            ],
        };
    }


    crossHandler = () => {
        console.log('hsdkjhksdf');
    }

    changeHandler = (event) => {
        const searchText = event.target.value;
        this.state.searchInput = searchText;

        const result = this.state.objects.map((values) => {
            return values.valu
        })

        const matches = result.filter(states => {
            const regex = new RegExp(`^${searchText}`, 'gi');
            return states.match(regex);

        });

        this.state.matchesbox = matches;

        if (searchText.length === 0) {
            this.state.searchBox = false;
        }
        else {
            this.state.searchBox = true;
        }

        this.setState(this.state);
    }

    clearSearch = () => {
        this.state.searchInput = '';
        this.state.searchBox = false;
        this.setState(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="sr-wrapper">
                    <input type="text" onChange={this.changeHandler} value={this.state.searchInput} className="search" name="search" placeholder="Search" />
                    {this.state.searchBox ?
                        <i class="fa fa-times errspan" onClick={this.clearSearch} aria-hidden="true"></i>
                        :
                        <i class="fa fa-search errspan" aria-hidden="true"></i>
                    }

                    {this.state.searchBox &&
                        <div className="search-box-wrapper">
                            <SearchBox searchitems={this.state.matchesbox} />
                        </div>}
                </div>
            </React.Fragment>

        )
    }
}

