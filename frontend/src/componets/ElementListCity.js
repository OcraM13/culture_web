import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../static/css/ElementListCity.css'

export default class ElementListCity extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return ( 
            <Link to={this.props.link} className="link" >
                <div className="box">
                    <p className="text" >{this.props.name}</p>
                </div>
            </Link>
        );
    }
}
