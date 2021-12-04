import React, { Component } from "react";
import '../../static/css/detailsCulture.css'

export default class DetailsCultrue extends Component{
    constructor (props){
        super(props);        
    }

    render(){
        return (
            <div id="dContainer">
                <div id="dTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <div id="dHistory">
                    <p>{this.props.history}</p>
                </div> 
                <div id="dImg" style={{ backgroundImage: `url(${this.props.picture != 'none' ? this.props.picture : "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f97164d5bafe82537aac059/1-cultura-mexicana_1.jpg"})`,backgroundRepeat: 'no-repeat',width:'100%'  }}>
                </div>
            </div>
        );
    }
}
