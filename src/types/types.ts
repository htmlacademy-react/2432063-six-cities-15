export type OfferType = {
  id: string;
  cardPrice: number;
  previewImage: string;
  cardImg: string[];
  isPremium: boolean;
  cardBookmarks: string;
  cardRating: number;
  cardDescription: string;
  cardType: string;
  insideItem: string[];
};

export type OffersType = OfferType[];
