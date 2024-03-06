import { OffersType } from '../types/types';


export const offers: OffersType = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 180,

    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat'
    ],
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],

    previewImage: 'img/apartment-01.jpg',
    cardBookmarks: 'place-card__bookmark-button place-card__bookmark-button--active button',
  },
  {
    id: '2',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 280,

    isFavorite: true,
    isPremium: true,
    rating: 3.2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat'
    ],
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],

    previewImage: 'img/apartment-02.jpg',
    cardBookmarks: 'place-card__bookmark-button place-card__bookmark-button--active button',
  },
  {
    id: '3',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 380,

    isFavorite: true,
    isPremium: false,
    rating: 1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Wi-Fi',
      'Washing machine',
    ],
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],

    previewImage: 'img/apartment-03.jpg',
    cardBookmarks: 'place-card__bookmark-button place-card__bookmark-button--active button',
  }
];


