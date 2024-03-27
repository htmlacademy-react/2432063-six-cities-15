import { OffersType } from '../types/types';
import { SortType } from '../const';

export function getSortedOffers(sortType: SortType, offers: OffersType) {
  switch (sortType) {
    case SortType.LowToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortType.HighToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
