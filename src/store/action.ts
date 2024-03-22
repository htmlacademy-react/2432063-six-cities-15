import {createAction} from '@reduxjs/toolkit';

export const setCityActive = createAction('mainPage/setCityActive', (value: string)=>({payload: value}));
export const getOffersActive = createAction('mainPage/getOffersActive');
