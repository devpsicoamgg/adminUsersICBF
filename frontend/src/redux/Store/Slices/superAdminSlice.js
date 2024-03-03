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

export const fetchContracts = createAsyncThunk(
  "superAdmin/fetchContracts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${ADRES.TO}/admin/contract/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCoordinators = createAsyncThunk(
  "superAdmin/fetchCoordinators",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${ADRES.TO}/admin/coordinators/`);
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
    contracts: [],
    coordinators: [],
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
      })
      .addCase(fetchContracts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContracts.fulfilled, (state, action) => {
        state.loading = false;
        state.contracts = action.payload;
      })
      .addCase(fetchContracts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCoordinators.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoordinators.fulfilled, (state, action) => {
        state.loading = false;
        state.coordinators = action.payload;
      })
      .addCase(fetchCoordinators.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


      
  },
});

export const { reducer: superAdminReducer } = superAdminSlice;
export default superAdminSlice.reducer;
