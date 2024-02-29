import { Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';
import { AuthorizationStatus } from '../const';

import MainPage from '../pages/main-page/main-page';
import LoginScreen from '../pages/login/login';
import FavoritesScreen from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import Error from '../pages/error/error';

import { OfferType } from '../types/types';


type AppProps = {
  quantityPlaceCard: number;
  offers: Array<OfferType>;
}

function App({quantityPlaceCard, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage quantityPlaceCard={quantityPlaceCard} offers={offers} />} />
        <Route path='login' element={<LoginScreen />} />
        <Route path='favorites' element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesScreen />
          </PrivateRoute>
        }
        />
        <Route path='offer/:id' element={<Offer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
