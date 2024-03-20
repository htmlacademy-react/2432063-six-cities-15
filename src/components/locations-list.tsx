import { LOCATIONS } from '../const';
import Location from './location';


function LocationsList(): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {LOCATIONS.map((location) => (
          <Location key={location.citi} NameCiti={location} />
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
