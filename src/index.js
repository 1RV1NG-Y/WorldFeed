import React, { useState } from "react";
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import "./index.css";
import News from "./news";
import NewsFull from "./newsfull";
import Nav from "./nav";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
let niusneim ="apple"
ReactDOM.render(
  <BrowserRouter>
  <>
  <Nav />
  <Route exact path="/">
  <h1>Apple</h1>
  <News newsName="apple" API ="TUAZHV5I504SLDC2" simbolo="AAPL"/>
  <h1>Tesla</h1>
    <News newsName="tesla" API="HOA18T8MRP9Z59K2" simbolo="TSLA"/>
    <h1>Amazon</h1>
    <News newsName="amazon" API="JUERWI4DI9FXU4JU" simbolo="AMZN"/>
    <h1>Microsoft</h1>
    <News newsName="microsoft" API="PNMW2K1ZJEFCCUKK" simbolo="MSFT"/>
  </Route>
    <Route exact path="/Apple">
    <NewsFull newsName="apple" API ="CYA5PTGETOT6CEB5" simbolo="AAPL"/>
    </Route>
    <Route path="/Tesla"><NewsFull newsName="tesla" API="KZQXZN4PZAJ8BYLA" simbolo="TSLA"/>
    </Route>
    <Route path="/Bitcoin"><News newsName="BTC" simbolo="AAPL" /></Route>
    <Route path="/Amazon"><NewsFull newsName="amazon" API="ABVITO4P6X21I6PM" simbolo="AMZN"/></Route>
    <Route path="/Microsoft"><NewsFull newsName="microsoft" API="GKCU17390EAILMLK" simbolo="MSFT"/></Route>
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
