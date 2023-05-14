import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user:{},
    isAuthenticated: false,
    sessionId:'',
}

const authenticationSlice= createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state,action)=>{ 
            state.user= action.payload;
            state.isAuthenticated= true;
            state.sessionId= localStorage.getItem('seesion_id');
            localStorage.setItem('accountId', action.payload.id);

        }
    }
})

export const {setUser} =authenticationSlice.actions;
export default authenticationSlice.reducer;
export const userSelector = (state) => state.user;