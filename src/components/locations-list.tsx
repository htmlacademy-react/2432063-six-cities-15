import { useAppDispatch, useAppSelector } from '../hooks';
import { setCityActive } from '../store/action';

type LocationsListProps = {
  citiesList: string[];
}

function LocationsList({citiesList}: LocationsListProps): JSX.Element {

  const dispatch = useAppDispatch();
  const cityActive = useAppSelector((state) => state.cityActive);

  function changeCity (city:string) {
    dispatch(setCityActive(city));
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
