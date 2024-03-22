import { CityList } from './types/types';

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

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const CITY_LIST: CityList = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const DEFAULT_CITY = CITY_LIST.Amsterdam;

export const citiesList = [
  CITY_LIST.Paris,
  CITY_LIST.Cologne,
  CITY_LIST.Brussels,
  CITY_LIST.Amsterdam,
  CITY_LIST.Hamburg,
  CITY_LIST.Dusseldorf
];
