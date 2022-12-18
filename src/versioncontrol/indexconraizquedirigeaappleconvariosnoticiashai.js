import React, { useState } from "react";
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import "./index.css";
import News from "./news";
import Nav from "./nav";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <BrowserRouter>
  <>
  <Nav />
  <Route exact path="/"><Redirect to="/Apple"></Redirect></Route>
    <Route exact path="/Apple">
    <News newsName="apple" API ="CYA5PTGETOT6CEB5" simbolo="AAPL"/>
    <News newsName="tesla" API="KZQXZN4PZAJ8BYLA" simbolo="TSLA"/>
    <News newsName="amazon" API="ABVITO4P6X21I6PM" simbolo="AMZN"/></Route>
    <Route path="/Tesla"><News newsName="tesla" API="KZQXZN4PZAJ8BYLA" simbolo="TSLA"/>
    </Route>
    <Route path="/Bitcoin"><News newsName="BTC" simbolo="AAPL" /></Route>
    <Route path="/Amazon"><News newsName="amazon" API="ABVITO4P6X21I6PM" simbolo="AMZN"/></Route>
    <Route path="/nasa"><News newsName="nasa" /></Route>
    <Route path="/upsc"><News newsName="upsc" /></Route>
  </>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
