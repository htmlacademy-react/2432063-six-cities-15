import { location } from '../types/location';

type LocationProps = {
  NameCiti: location;
}

function Location({ NameCiti }: LocationProps): JSX.Element {
  const {citi, def} = NameCiti;
  const itemActiv = def && 'tabs__item--active';
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${itemActiv}`} href="#">
        <span>{citi}</span>
      </a>
    </li>
  );
}

export default Location;
