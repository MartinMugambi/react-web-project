import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


interface User{
    id: number
    name: string
    email: string
    username: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
  
  }

interface UserData{
  loading: boolean
  data: User[]
  error: boolean | string

}

const initialState:UserData = {
    loading: true,
    data: [],
    error: false,
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

    },

    extraReducers: (builder) =>{
        builder.addCase(fetchUserData.pending, (state, {payload})=>{
            state.loading = true
            state.data = []
            state.error = false
        });

        builder.addCase(fetchUserData.fulfilled, (state, {payload})=>{
          state.loading= false,
          state.data = payload
          state.error = false
        });

        builder.addCase(fetchUserData.rejected, (state, {payload})=>{
            state.loading = false,
            state.data = [],
            state.error = payload
        })
    }
})

 export default userSlice.reducer