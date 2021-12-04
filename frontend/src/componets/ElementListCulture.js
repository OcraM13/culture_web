import React, { Component } from "react";
import '../../static/css/ElementListCulture.css'

export default class ElementListCity extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return ( 
            <div className="boxC" id={this.props.id}>
                <p className="textC" id={this.props.id}>{this.props.title}</p>
                <p className="type" id={this.props.id}>{this.props.type}</p>
            </div>
        );
    }
}
