import { OfferType } from '../types/types';

import { useState } from 'react';
import { Link } from 'react-router-dom';


type PlaceCardProps = {
  offerCard: OfferType;
  setCardHoverId?(id: string | null): void;
  placeType: 'cities' | 'near-places';
}

function Premium(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCard({offerCard, setCardHoverId, placeType}: PlaceCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id, isFavorite } = offerCard;
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite);
  const premium = isPremium && <Premium />;

  const handleMouseOver = () => {
    setCardHoverId?.(id);
  };

  const handleMouseOut = () => {
    setCardHoverId?.(null);
  };

  return (
    <article className={`${placeType}__card place-card`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {premium}
      <div className={`${placeType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={() => setIsFavoriteCard(!isFavoriteCard)}
            className={`place-card__bookmark-button ${isFavoriteCard ? 'place-card__bookmark-button--active' : ''} button`} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20 }%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>Beautiful &amp; {title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default PlaceCard;
