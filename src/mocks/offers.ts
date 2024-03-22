import { OffersType } from '../types/types';


export const offers: OffersType = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Angelina',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },

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
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Jim',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },

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
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    host: {
      hostName: 'Mila',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },

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


