import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  authToken:null
}

const authSlice = createSlice({
    name: 'auth_token',
    initialState,
    reducers: {
      setToken: (state, action ) => {
        state.authToken = action.payload.authToken;
      },
      clearToken: (state) => {
        state.authToken = null;
      },
    },
  });

  export const { setToken,clearToken} = authSlice.actions;
  export default authSlice.reducer;