import PlaceCard from './place-card';
import { OffersType } from '../types/types';

type NearPlaceCardListProps = {
  offers: OffersType;
}

function NearPlaceCardList({ offers }: NearPlaceCardListProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <PlaceCard key={offer.id} offerCard={offer} placeType={'near-places'}/>
        ))}
      </div>
    </section>
  );
}

export default NearPlaceCardList;
