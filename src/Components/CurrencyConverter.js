import React, { Component } from 'react';
import Currency from "./input";
import DisplayCurrency from "./DisplayCurrency"

class CurrencyConverter extends  Component {
    constructor(props){
        super(props);
        this.handleDollarChange =this.handleDollarChange.bind(this);
        this.handleRupeeChange=this.handleRupeeChange.bind(this);
        this.state={
            currency:0,
            code:"RS"
        }
    }
    handleDollarChange(value){
        this.setState({
            currency:value,
            code:"DLR"
        })

    }
    handleRupeeChange(value){
        this.setState({
            currency:value,
            code:"RS"
        })
    }


    render(){
        function converToRS(currency){
           if(currency && !Number.isNaN(currency)) return currency*70;
           else return " ";

        }

        function converToDLR(currency) {
            if(currency && !Number.isNaN(currency)) return (currency/70).toFixed(2);
            else return " ";

        }
        const code = this.state.code;
        const currency = this.state.currency;
        const rupee= code === 'DLR' ? converToRS(currency) : currency;
        const dollar= code === "RS" ? converToDLR(currency) : currency;
        return(
            <div className="currency">
                <Currency name="Rupee"
                          currency={rupee}
                          onChange={this.handleRupeeChange}
                />
                <div>
                <Currency name = "Dollar"
                currency ={dollar}
                onChange={this.handleDollarChange}/>
                </div>
                <div>
                    <div>
                        <DisplayCurrency currency = {dollar}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default  CurrencyConverter;
