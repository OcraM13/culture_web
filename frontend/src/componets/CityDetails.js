import React, { useState, useEffect } from "react";
import { useLinkClickHandler, useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import DetailsCulture from "./detailsCulture";
import Map from "./map";
import ElementListCulture from "./ElementListCulture"

import '../../static/css/CityDetails.css'

const CityDetalis = () => {

    const [dataCity, setDataCity] = useState(() => { return []})
    const [dataListCulture, setDataLisCulture] = useState(() => { return []})
    const [dataCulture, setDataCulture] = useState(() => { return {title:'',history:'',picture:'', lat:'', lng:''}})

    const params = useParams();

    useEffect(() => {

        const urlCity = '/api/get-city'+'?id='+params.city;
        const urlListCulture = '/api/get-city-culture'+'?city='+params.city;
        const urlCulture = '/api/get-first-culture'+'?city='+params.city;

        const fetchData = async () => {
            try {
                const responseCity = await fetch(urlCity);
                const jsonCity = await responseCity.json();
                setDataCity(jsonCity);
            } catch (error) {
                console.log("error", error);
            }

            try {
                const responseListCulture = await fetch(urlListCulture);
                const jsonListCulture = await responseListCulture.json();
                setDataLisCulture(jsonListCulture);

            } catch (error) {
                console.log("error", error);
            }

            try {
                const responseCulture = await fetch(urlCulture);
                const jsonCulture = await responseCulture.json();
                if(JSON.stringify(jsonCulture) === '{}'){
                    setDataCulture({title:'No hay historias registradas en esta ciudad',history:'',picture:'', location:''})
                }else{
                    setDataCulture(jsonCulture);
                }
                
            } catch (error) {
                console.log("error", error);
            }
            
        };

        fetchData();
        

    }, []);

    const p = e =>{
        const urlCulture = '/api/get-culture'+'?id='+(e.target.id);

        const updateData = async () => {
            try {
                const responseCulture = await fetch(urlCulture);
                const jsonCulture = await responseCulture.json();
                if(JSON.stringify(jsonCulture) === '{}'){
                    setDataCulture({title:'No hay historias registradas en esta ciudad',history:'',picture:'', location:''})
                }else{
                    setDataCulture(jsonCulture);
                }
                
            } catch (error) {
                console.log("error", error);
            }

        }

        updateData();
        window.scrollTo(0, 0)
    }
    
    const cultureList = () => {
        try{
            return dataListCulture.map(culture => <li key={culture.id} onClick={p}><ElementListCulture id={culture.id} title={culture.title} type={culture.type} /></li>)
        }catch(e){
            return "";
        }
        
    }

    return(
        <div id="container">

            <div id="boxLeft">

                <div id="menu">
                    <div id="title">
                        <h1>{dataCity.name}</h1>
                        <hr/>
                    </div>
                    <div id="list">
                        <ul>
                            {cultureList()}
                        </ul>
                    </div>
                </div>
                
            </div>

            <div id="boxRight">
                <div id="details">
                    <div id="map">
                        <Map lat={dataCulture.lat} lng={dataCulture.lng} />
                    </div>
                    <div id="culture">
                        <DetailsCulture title={dataCulture.title} history={dataCulture.history} picture={dataCulture.picture}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityDetalis;

