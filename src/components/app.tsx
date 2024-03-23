import { Route, BrowserRouter, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';
import { AuthorizationStatus } from '../const';

import MainPage from '../pages/main-page/main-page';
import LoginScreen from '../pages/login/login';
import FavoritesScreen from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import Error from '../pages/error/error';

import { OffersType, Reviews } from '../types/types';


type AppProps = {
  offers: OffersType;
  reviews: Reviews;
  citiesList: string[];
}

function App({offers, reviews, citiesList}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage citiesList={citiesList} />} />
        <Route path='login' element={<LoginScreen />} />
        <Route path='favorites' element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesScreen />
          </PrivateRoute>
        }
        />
        <Route path='offer/:id' element={<Offer offers={offers} reviews={reviews} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
