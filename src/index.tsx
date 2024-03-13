import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { offersNear } from './mocks/offers-near';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offers}
      reviews = {reviews}
      offersNear = {offersNear}
    />
  </React.StrictMode>
);
