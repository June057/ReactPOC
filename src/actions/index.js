import * as types from '../Constants/actionTypes'


export const incrementCounter = (counter) => ({
    type : types.INCREMENT,
    counter
})

export const decrementCounter = (counter) => ({
    type : types.DECREMENT,
    counter
})

