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

export const LOCATIONS = [
  {citi: 'Paris',
    def: false,
  },
  {citi: 'Cologne',
    def: false,
  },
  {citi: 'Brussels',
    def: false,
  },
  {citi: 'Amsterdam',
    def: true,
  },
  {citi: 'Hamburg',
    def: false,
  },
  {citi: 'Dusseldorf',
    def: false,
  },
  {citi: 'Zalupinsk',
    def: false,
  }
];
