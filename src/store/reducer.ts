import {createReducer} from '@reduxjs/toolkit';
import {setCityActive} from './action';
import { DEFAULT_CITY } from '../const';


const initialState = {
  cityActive: DEFAULT_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    });
});

export {reducer};
