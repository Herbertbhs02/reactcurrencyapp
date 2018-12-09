import React, { Component } from 'react'
import './Form.css';

export class form extends Component {
     constructor(props){
     super(props);
     this.state = {from:'',to:'',amount:0}
}
convertFrom = (e)=>{console.log(this.state);this.setState({from:e.target.value});}
convertTo = (e)=>{this.setState({to:e.target.value})}
amount = (e)=>{this.setState({amount:e.target.value})}
submit = (e)=>{this.props.submitted(this.state); e.preventDefault();}
  render() {
    return (
      <div>
      
        <form onSubmit={this.submit}>
        <div className='Userselection'>

            <div>
        <h2>From</h2>
        <select value={this.state.from} onChange={this.convertFrom}>
        <option value="USD">USD America</option>
        <option value="GBP" selected>GBP UK</option>
        <option value="EUR">EUR Europe</option>
        <option value="JPY" >JPY Japan</option>
        <option value="BGN" >Bulgarian</option>
        <option value="CAD" >Canadian Dollar</option>
        <option value="BRL" >Brazilian Real	</option>
        <option value="DKK" >Danish Krone</option>
        <option value="CHF" >Swiss Franc</option>
        <option value="SEK" >Swedish Krona</option>
        <option value="NOK" >Norwegian Krone</option>
        <option value="NZD" >New Zealand Dollar</option>
        <option value="HKD" >Hong Kong Dollar</option>
        <option value="AUD" >Australian Dollar</option>
        <option value="RUB" >Russian Ruble</option>
        <option value="THB" >Baht THAILAND</option>
        <option value="TRY" >Turkish Lira</option>
        <option value="ILS" >New Israeli Sheqel</option>
        <option value="IDR" >Rupiah INDONESIA</option>
        <option value="INR" >Indian Rupee</option>
        <option value="SGD" >Dollar SINGAPORE</option>
        <option value="CNY" >Renminbi Yuan CHINA </option>
        <option value="MYR" >Ringgit MALAYSIA</option>
        <option value="ISK" >ICELAND</option>
        <option value="PHP" >Philippine Peso</option>
        <option value="MXN" >New Peso</option>
        <option value="KRW" >Won Korea</option>
        <option value="PLN" >Zloty</option>
        <option value="CZK" >Czech Koruna</option>
        <option value="ZAR" >Rand</option>
        <option value="HRK" >Croatia</option>
        <option value="RON" >Romanian Leu	</option>
        <option value="HUF" >Forint	</option>

       </select> 
            </div>
            <div>
       <h2>To</h2>
       <select onChange={this.convertTo}>

       <option value="USD">USD America</option>
       <option value="GBP" selected>GBP UK</option>
       <option value="EUR">EUR Europe</option>
       <option value="JPY" >JPY Japan</option>
       <option value="BGN" >Bulgarian</option>
       <option value="CAD" >Canadian Dollar</option>
       <option value="BRL" >Brazilian Real	</option>
       <option value="DKK" >Danish Krone</option>
       <option value="CHF" >Swiss Franc</option>
       <option value="SEK" >Swedish Krona</option>
       <option value="NOK" >Norwegian Krone</option>
       <option value="NZD" >New Zealand Dollar</option>
       <option value="HKD" >Hong Kong Dollar</option>
       <option value="AUD" >Australian Dollar</option>
       <option value="RUB" >Russian Ruble</option>
       <option value="THB" >Baht THAILAND</option>
       <option value="TRY" >Turkish Lira</option>
       <option value="ILS" >New Israeli Sheqel</option>
       <option value="IDR" >Rupiah INDONESIA</option>
       <option value="INR" >Indian Rupee</option>
       <option value="SGD" >Dollar SINGAPORE</option>
       <option value="CNY" >Renminbi Yuan CHINA </option>
       <option value="MYR" >Ringgit MALAYSIA</option>
       <option value="ISK" >ICELAND</option>
       <option value="PHP" >Philippine Peso</option>
       <option value="MXN" >New Peso</option>
       <option value="KRW" >Won Korea</option>
       <option value="PLN" >Zloty</option>
       <option value="CZK" >Czech Koruna</option>
       <option value="ZAR" >Rand</option>
       <option value="HRK" >Croatia</option>
       <option value="RON" >Romanian Leu	</option>
       <option value="HUF" >Forint	</option>
       </select> 
             </div>
             <div>
       <h2>Amount</h2>
       <input type="text"  placeholder='Enter amount' onChange={this.amount}/>
       <input type="submit" value="Submit" />
              </div>
              <div>
             <p>YOU GET: {this.props.total.toFixed(2)}</p>
              </div>
              </div>
        </form> 
       
      </div>
    )
  }
}

export default form
