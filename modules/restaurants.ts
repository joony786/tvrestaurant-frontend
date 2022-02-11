import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as RestaurantAPI from '../lib/api/restaurants';

export interface Menu {
  name: string;
  price: number;
}

export interface Category {
  name: string;
}

export interface Type {
  name: string;
  episode: string;
}

export interface Restaurant {
  id?: number;
  name: string;
  tel: string;
  address: string;
  location: { x: number; y: number };
  menus: Menu[];
  categories: Category[];
  types: Type[];
}

export interface RestaurantsState {
  loading: boolean;
  data: Restaurant[];
}

export const action = {
  getRestaurants: createAsyncThunk('GET/RESTAURANTS', async () => {
    const response = await RestaurantAPI.getRestaurants();
    return response.data;
  }),
};

const initialState: RestaurantsState = {
  loading: false,
  data: [],
};

const restaurants = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: {
    [action.getRestaurants.pending.type]: (state, action) => {
      state.loading = true;
    },
    [action.getRestaurants.fulfilled.type]: (
      state,
      action: PayloadAction<Restaurant[]>,
    ) => {
      state.loading = true;
      state.data = action.payload;
    },
    [action.getRestaurants.rejected.type]: (state, action) => {
      state.loading = true;
      state.data = [];
    },
  },
});

export default restaurants;
