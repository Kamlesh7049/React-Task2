
 import { configureStore } from "@reduxjs/toolkit";
 
 import colorReducer from "./colorSlice";
 import cntReducer from "./CounterSlice";
const store = configureStore({
reducer :{
    mycounter:cntReducer,
    bgcolor:colorReducer,
   

}


})
export default store;


