import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userDetails:null
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUser:(state,action)=>{
            state.userDetails=action.payload
        },
        logout:(state)=>{
            state.userDetails=null
        }
    }
})
export const {updateUser,logout}=userSlice.actions;
export default userSlice.reducer;