import { Route, BrowserRouter, Routes} from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import LoginScreen from '../pages/login/login';
import FavoritesScreen from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import Error from '../pages/404/404';

type AppProps = {
  quantityPlaceCard: number;
}

function App({quantityPlaceCard}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage quantityPlaceCard={quantityPlaceCard}/>} />
        <Route path='login' element={<LoginScreen />} />
        <Route path='favorites' element={<FavoritesScreen />} />
        <Route path='Offer' element={<Offer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
