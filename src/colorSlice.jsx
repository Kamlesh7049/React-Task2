 import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({

    name:"bgcolor",
    initialState:{
        color:"blue"
    },
    reducers:{
        changeColor :(state,actions)=>{
            console.log(actions.payload);
            state.color=actions.payload
       
        }

    }

})
export default colorSlice.reducer;
export const {changeColor}=colorSlice.actions;

