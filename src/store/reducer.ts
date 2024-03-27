import {createReducer} from '@reduxjs/toolkit';
import {setCityActive, getOffersActive, setMapActive, getSortType, getSortOffers} from './action';
import { DEFAULT_CITY, defaultLocation, SortType } from '../const';
import { offers } from '../mocks/offers';
import { getSortedOffers } from '../utils/get-sort-offers';

const initialState = {
  cityActive: DEFAULT_CITY,
  offers: offers.filter(
    (item) => item?.city?.name === DEFAULT_CITY
  ),
  city: defaultLocation,
  sortType: SortType.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityActive, (state, action) => {
      state.cityActive = action.payload;
    })
    .addCase(getOffersActive, (state) => {
      state.offers = offers.filter(
        (item) => item?.city?.name === state.cityActive
      );
    })
    .addCase(setMapActive, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(getSortOffers, (state) => {
      state.offers = getSortedOffers(state.sortType, state.offers);
    });

});

export {reducer};
