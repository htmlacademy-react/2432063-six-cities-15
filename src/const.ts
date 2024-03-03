export const reviewRating = {
  'fiveStars': '5',
  'fourStars': '4',
  'threeStars': '3',
  'twoStars': '2',
  'oneStar': '1'
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
