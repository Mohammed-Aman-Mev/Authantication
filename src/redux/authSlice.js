import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HandleApi } from "./authService";

const user_ok = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user_ok ? user_ok : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "No message",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(Register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(Register.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(Log_out.fulfilled, (state, action) => {
        state.user = null;
      })
      .addCase(Log_in.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(Log_in.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(Log_in.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
// export const { user, isLoading, isSuccess, isError, message } = initialState;

export const Register = createAsyncThunk(
  "REGISTER/USER",
  async (data, thunkAPI) => {
    try {
      return await HandleApi.sign_in(data);
    } catch (error) {
      // console.log(error);
      const message = error.response.data.message;
      alert(error.response.data.message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const Log_in = createAsyncThunk("LOGIN/USER", async (data, thunkAPI) => {
  // console.log(data);
  try {
    return await HandleApi.log_in(data);
  } catch (error) {
    alert(error.response.data.message + " or invalid password");
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const Log_out = createAsyncThunk("LOG_OUT/USER", async () => {
  localStorage.removeItem("user");
});
