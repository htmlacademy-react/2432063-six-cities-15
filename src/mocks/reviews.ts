import { Reviews } from '../types/types';

export const reviews: Reviews = [
  {
    id: '1',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'April 2019',
    rating: 3,
    user: {
      userName: 'Jane',
      avatarUrl: 'https://i.pravatar.cc/121',
      isPro: false
    }
  },
  {
    id: '2',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'May 2021',
    rating: 4,
    user: {
      userName: 'Nick',
      avatarUrl: 'https://i.pravatar.cc/122',
      isPro: false
    }
  },
  {
    id: '3',
    comment: 'The building is green and from 18th century.',
    date: 'June 2023',
    rating: 5,
    user: {
      userName: 'Sarah',
      avatarUrl: 'https://i.pravatar.cc/123',
      isPro: false
    }
  },
];
