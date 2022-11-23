import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters, filterTwo } = useContext(StarWarsContext);
  const [search, setSearch] = useState([]);
  const { columFilter, comparisonFilter, number } = filterTwo;

  const filterOptions = (arr) => {
    let filterByOptions = [];
    switch (comparisonFilter) {
    case 'maior que':
      filterByOptions = arr
        .filter((el) => +el[columFilter] > +number);
      break;
    case 'menor que':
      filterByOptions = arr
        .filter((el) => +el[columFilter] < +number);
      break;
    case 'igual a':
      filterByOptions = arr
        .filter((el) => +el[columFilter] === +number);
      break;
    default:
      filterByOptions = arr;
    }
    return filterByOptions;
  };

  const filterName = () => {
    const dataFilterName = data
      .filter((el) => el.name.toUpperCase().includes(filters.toUpperCase()));
    setSearch(filterOptions(dataFilterName));
  };
  console.log(filterTwo);
  console.log(filterOptions);

  useEffect(() => {
    filterName();
  }, [data, filters, filterTwo]);

  return (
    <table className="table table-dark table-responsive">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th> Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>

        </tr>
      </thead>

      <tbody>
        {search.map((el) => (
          <tr key={ el.name }>
            <td>{el.name}</td>
            <td>{el.rotation_period}</td>
            <td>{el.orbital_period}</td>
            <td>{el.diameter}</td>
            <td>{el.climate}</td>
            <td>{el.gravity}</td>
            <td>{el.terrain}</td>
            <td>{el.surface_water}</td>
            <td>{el.population}</td>
            <td>{el.films}</td>
            <td>{el.created}</td>
            <td>{el.edited}</td>
            <td>{el.url}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default Table;
