import {createAction} from '@reduxjs/toolkit';

import { CityMap } from '../types/types';

export const setCityActive = createAction('mainPage/setCityActive', (value: string)=>({payload: value}));
export const getOffersActive = createAction('mainPage/getOffersActive');
export const setMapActive = createAction('mainPage/setMapActive', (value: CityMap) => ({ payload: value }));
