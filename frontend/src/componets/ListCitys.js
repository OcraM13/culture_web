import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ElementListCity from "./ElementListCity";
import '../../static/css/ListCitis.css'




const  ListCitys = () => {

    const [data, setData] = useState(() => { return []})

    useEffect(() => {
        const url = "/api/get-citis";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const citisList = data.map(city => <li key={city.id}><ElementListCity link={`/city/${city.id}`} name={city.name} /></li>)

    return(
        <div className="back">
            <div className="center">
                <div className="titlebox">
                    <h1>Lista de Ciudades</h1>
                    <hr/>
                </div>
                
                <div className="boxList">
                    <ul className="list" >{citisList}</ul>
                </div>
            </div>
        </div>
    );
}

export default ListCitys;

