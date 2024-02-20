import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderMainPage from './components/app';
import { Setting } from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RenderMainPage
      quantityPlaceCard = {Setting.quantityPlaceCard}
    />
  </React.StrictMode>
);
