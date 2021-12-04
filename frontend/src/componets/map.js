import React, { Component } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
export default class Map extends Component{
    constructor (props){
        super(props);
    }

    render(){
        return (

            <LoadScript
                googleMapsApiKey="AIzaSyDMbe4HnAsO7AqB9igt13wZQOCl2Sq7B94"
            >
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat:parseFloat(this.props.lat), lng:parseFloat(this.props.lng) }}
                zoom={18}
                clickableIcons={false}
                >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
                </GoogleMap>
            </LoadScript>

        );
    }
}