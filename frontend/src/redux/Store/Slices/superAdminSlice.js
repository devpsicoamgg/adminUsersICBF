import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ADRES } from "../../../helpers/Routes.helper";
import axios from "axios";

export const createContract = createAsyncThunk(
  "superAdmin/createContract",
  async (contractData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${ADRES.TO}/admin/contract/`,
        contractData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const superAdminSlice = createSlice({
  name: "superAdmin",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContract.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContract.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createContract.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: superAdminReducer } = superAdminSlice;
export default superAdminSlice.reducer;
