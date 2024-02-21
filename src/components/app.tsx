import MainPage from '../pages/main-page';

type AppProps = {
  quantityPlaceCard: number;
}

function RenderMainPage({quantityPlaceCard}: AppProps): JSX.Element {
  return (
    <MainPage quantityPlaceCard={quantityPlaceCard}/>
  );
}
export default RenderMainPage;
