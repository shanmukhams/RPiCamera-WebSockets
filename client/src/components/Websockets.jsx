import React, { Component } from 'react';
import './Video.css'
import ReactPlayer from 'react-player';


class Websockets extends Component {
    
    render() {
        return (
            <div>
                <h1>Websockets</h1>
                <img id="image" src={this.props.imagesrc}></img>
                </div>
        );
    }
}

export default Websockets;

