import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import restaurants from './restaurants';
import { RestaurantsState } from './restaurants';

export type RootState = {
  restaurants: RestaurantsState;
};

const reducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    restaurants: restaurants.reducer,
  })(state, action);
};

export default reducer;
