import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { id } from "../user/userSlice"

interface PostData{
    userId: number
    id:number
    title: string
    body: string
}


interface Post{
    loading: boolean
    data:  PostData[]
    error: boolean | string
}

const initialState:Post  ={
    loading: true,
    data: [],
    error: false
}


export const fetchPost:any =  createAsyncThunk("posts",async () => {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const responseData = await response.json();

    return responseData;
    
})

const postSlice = createSlice({
    name: 'post Data',
     initialState,
    
     reducers: {

     },

     extraReducers: (builder) => {
         builder.addCase(fetchPost.pending, (state, {payload})=>{
             state.loading = true;
             state.data = [];
             state.error = false;
         });

         builder.addCase(fetchPost.fulfilled, (state, {payload})=>{
           state.loading = false;
           state.data = payload;
           state.error = false;
         });

         builder.addCase(fetchPost.rejected, (state, {payload})=>{
             state.loading = false;
             state.data = [];
             state.error= true;
         })
     }
});

export default postSlice.reducer