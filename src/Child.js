import React, { Component } from 'react';
//import billy from './billy.jpg';
// import data from './data.json';

export default class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patsOnHead: 0,
            hugs: 0
        }
    }

    handleClick = () => {
        // click add 1 to total of pats on the head

        // first track how many pats billy as

        this.setState({patsOnHead: this.state.patsOnHead + 1});


    }


    render() {
        return (
            <div>
                <img src={'./public/billy.jpg'} alt="description"/>
                <h3>{this.props.name}</h3>
                <p>This is the chile which has {this.patsOnHead} pats on head</p>
                <button onClick={this.handleClick}>pat on head</button>
            </div>
        )

    }
}