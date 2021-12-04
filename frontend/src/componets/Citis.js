import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";

import CityDetails from "./CityDetails";
import ListCitys from "./ListCitys"

export default class Citis extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <Router>
          <Routes>

            <Route exact path="/" element={<ListCitys />} />

            <Route path="city/:city" element={<CityDetails />} />
            
          </Routes>
        </Router>

      </div>
        
    );
  }
}
