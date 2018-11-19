import React, { Component } from 'react';
import {connect }from 'react-redux'
import {incrementCounter} from '../actions'
import {decrementCounter} from '../actions'


class Counter extends Component {
    constructor(props){
        super(props)
    }


    render(){
        const handleIncrement = this.props.handleIncrement
        const handleDecrement = this.props.handleDecrement
        const counterValue = this.props.counterValue
        console.log("*******")
        console.log(counterValue)
        console.log("*******")

        return(
            <div>
                <h2>Counter Using Redux</h2>
                <button onClick={handleIncrement}>
                    +
            </button>
           <button
               onClick={handleDecrement}>
               -
           </button>

                <h3>TA DA!! HERE IS VALUE {counterValue}</h3>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) =>{
    return {counterValue : state.getUpdatedState}
};
const mapDispatchToProps = (dispatch,ownProps) => {
    return{
        handleDecrement:() =>{
            console.log("here in decrement")
            dispatch(decrementCounter())
        },
        handleIncrement:() =>{
            console.log("here in increment")
            dispatch(incrementCounter())
        }
    }
};

const CounterComponent = connect(mapStateToProps,
    mapDispatchToProps)(Counter);

export default CounterComponent;