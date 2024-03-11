import {useRef, useEffect} from 'react';

import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';

import { CityMap, OffersType, OfferType} from '../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';


type MapProps = {
  CITY: CityMap;
  offers: OffersType;
  cardHoverId: OfferType['id'] | null;
}

function Map({offers, CITY, cardHoverId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: (cardHoverId !== undefined && offer.id === cardHoverId)
              ? currentCustomIcon
              : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, offers, cardHoverId]);

  return (
    <section
      style={{ height: '500px' }}
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
