import { OfferType } from '../types/types';

import { offersNear } from '../mocks/offers-near';
const offers = offersNear;

const MAX_NEAR_FFERS = 3;

export const getNearOffers = (offer: OfferType): OfferType[] => {
  const nearOffers: OfferType[] = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }

    if (nearOffers.length >= MAX_NEAR_FFERS) {
      break;
    }
  }

  return nearOffers;
};
