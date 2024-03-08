import {useRef} from 'react';

import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';

import { City, OffersType } from '../types/types';


type MapProps = {
  CITY: City;
  offers: OffersType;
}

function Map({offers, CITY}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

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
