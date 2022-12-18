import React from "react";
import Plot from 'react-plotly.js';
class Stock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount(){
        this.fetchStock();
    } 
    fetchStock()
    {
        const pointerToThis = this;
        console.log(pointerToThis);
       // const API_KEY = 'PNMW2K1ZJEFCCUKK';
       const API_KEY = this.props.API;
        //let StockSymbol = 'AMZN';
        let StockSymbol = this.props.StockSymbol;
        let API_Call =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        //let API_Call =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AMZN&outputsize=compact&apikey=PNMW2K1ZJEFCCUKK`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        fetch(API_Call)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data);
                for(var key in data['Time Series (Daily)']){
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Time Series (Daily)']
                    [key]['1. open']);
                }
                pointerToThis.setState({
                    stockChartXValues: stockChartXValuesFunction,
                    stockChartYValues: stockChartYValuesFunction
                });
            }
        )
    }
    render(){
        return(
            <div>
                
                <Plot
        data={[
          {
            x: this.state.stockChartXValues,
            y: this.state.stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 520, height: 440, title: ''}}
      />
               { //<p>x-values: {}</p>
               
                //<p>y-values: {}</p>
            }
            </div>
        )
    }
}

export default Stock;