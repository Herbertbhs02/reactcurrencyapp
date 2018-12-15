import React, { Component } from 'react';
import Head from './Head';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {from:'',to:'',amount:0,
                 rate:[],
                  country:[],
                  base:'',
                  date:'' }
  }
 
 
  submit = (userInput)=>{this.setState({from:userInput.from,to:userInput.to,amount:userInput.amount});
   var f= userInput.from;
  var url ='https://api.exchangeratesapi.io/latest?base='+f+''
  
  fetch(url)
   .then(response => response.json())
   .then((data)=>{ this.setState({rate:data.rates,base:data.base})}) }
  
  render() {
    const total = this.state.rate[this.state.to]*this.state.amount;
    return (
      <div className="App">
         <Head/>
         
         <Form submitted={userInput=>this.submit(userInput)} total={total}/>
          <p>ONE {this.state.from}={this.state.rate[this.state.to]} {this.state.to}</p>
         
      </div>
    );
  }
}

export default App;
