import React, { Component } from "react";
import { render } from "react-dom";

import Citis from "./Citis";

export default class App extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return <div><Citis/></div>;
    }
}

const appDiv = document.getElementById("app"); 
render(<App/>, appDiv)