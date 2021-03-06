import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"

import {UserData} from '../../types/types'


 const initialState:UserData = {
    loading: true,
    data: [],
    error: false,
    id: 0,
    name: ""
}



export const fetchUserData: any=  createAsyncThunk("user/fetchData",async () => {

    const response  = await fetch('https://jsonplaceholder.typicode.com/users');

    const responseData = await response.json();

    return responseData;
});

const userSlice = createSlice({
    name: "users",
    initialState,
    
    reducers: {
      postId: (state, action:PayloadAction<number>) =>{
          state.id = action.payload
      },
      username: (state, action:PayloadAction<string>) =>{
       state.name = action.payload
      }   
    },

    extraReducers: (builder) =>{
        builder.addCase(fetchUserData.pending, (state, {payload})=>{
            state.loading = true;
            state.data = [];
            state.error = false;
        });

        builder.addCase(fetchUserData.fulfilled, (state, {payload})=>{
          state.loading= false;
          state.data = payload;
          state.error = false;
        });

        builder.addCase(fetchUserData.rejected, (state, {payload})=>{
            state.loading = false;
            state.data = [];
            state.error = payload; 
        })
    }
})

export const {postId, username} = userSlice.actions
 export default userSlice.reducer