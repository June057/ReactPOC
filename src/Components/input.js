import React, { Component } from 'react';
import '../App.css';

class Currency extends Component{
    constructor(props){
        super(props);
        this.handleChange =this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onChange(e.target.value);
    }
    render() {
        return(
            <label>
                <h5>{this.props.name} </h5>
            <input type="text"
                   value={this.props.currency}
            onChange={this.handleChange}/>
            </label>
        )
    }
}
export default Currency;