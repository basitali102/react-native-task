import {createSlice} from "@reduxjs/toolkit"

const CounterReducer = createSlice({
    name :"increment/decrement",
    initialState:{
        count : 0
    },
    reducers: {
        increment: (state)=>{
            state.count +=1
        },
        decrement: (state)=>{
            state.count -= 1
        }
    }

})

export const {increment, decrement} = CounterReducer.actions;
export default CounterReducer.reducer
