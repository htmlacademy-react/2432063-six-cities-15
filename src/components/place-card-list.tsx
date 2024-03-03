import PlaceCard from './place-card';
import { OffersType } from '../types/types';

type PlaceCardListProps = {
  offers: OffersType;
}

function PlaceCardList({ offers }: PlaceCardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = offer.id;
        return (
          <PlaceCard key={keyValue} offerCard={offer} />
        );
      })}
    </div>
  );
}

export default PlaceCardList;
