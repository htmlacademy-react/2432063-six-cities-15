import { useAppDispatch, useAppSelector } from '../hooks';
import { getOffersActive, setCityActive, setMapActive } from '../store/action';

import { cityMap } from '../const';

type LocationsListProps = {
  citiesList: string[];
}

function LocationsList({citiesList}: LocationsListProps): JSX.Element {

  const dispatch = useAppDispatch();
  const cityActive = useAppSelector((state) => state.cityActive);

  function changeCity (city:string) {

    const [cityMapActive] = cityMap.filter((item) => item.title === city);

    dispatch(setCityActive(city));
    dispatch(getOffersActive());
    dispatch(setMapActive(cityMapActive));
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        { citiesList.map ((city)=>(
          <li key = {city} className="locations__item">
            <a onClick={() => changeCity(city)} className={`locations__item-link tabs__item ${city === cityActive ? 'tabs__item--active' : ''}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
