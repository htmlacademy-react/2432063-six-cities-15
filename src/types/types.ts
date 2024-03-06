export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;

  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  images: string[];

  previewImage: string;
  cardBookmarks: string;
};

export type OffersType = OfferType[];
