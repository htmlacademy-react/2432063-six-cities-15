import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getSortType } from '../store/action';
import { SortType } from '../const';

function PlacesSorting(): JSX.Element {

  const [opened, setOpened] = useState<boolean>(false);

  const selectedSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  function sortToggle() {
    setOpened(!opened);
  }

  function changeSorting(item: SortType) {
    dispatch(getSortType(item));
    setOpened(false);
  }


  return (

    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={sortToggle}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${opened ? 'places__options--opened' : ''}`}>
        {Object.values(SortType).map((item) => (
          <li className={`places__option ${selectedSortType === item ? 'places__option--active' : ''}`}
            key={item} tabIndex={0} onClick={() => changeSorting(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
