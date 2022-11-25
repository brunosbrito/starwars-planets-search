import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters, numbers } = useContext(StarWarsContext);
  const [search, setSearch] = useState([]);

  const filterOptions = (arr, filter) => {
    switch (filter.comparisonFilter) {
    case 'maior que':
      return arr.filter((el) => +el[filter.columFilter] > +filter.number);
    case 'menor que':
      return arr.filter((el) => +el[filter.columFilter] < +filter.number);
    case 'igual a':
      return arr.filter((el) => +el[filter.columFilter] === +filter.number);
    default:
      return arr;
    }
  };

  const filterByNumericValue = (planets) => {
    let copyArray = [...planets];
    numbers.forEach((filter) => {
      copyArray = filterOptions(copyArray, filter);
    });
    return copyArray;
  };

  const filterName = () => {
    const dataFilterName = (data)
      .filter((el) => el.name.toUpperCase().includes(filters.toUpperCase()));
    const filtered = filterByNumericValue(dataFilterName);
    setSearch(filtered);
  };

  useEffect(() => {
    const dataFilterName = data
      .filter((el) => el.name.toUpperCase().includes(filters.toUpperCase()));
    setSearch(dataFilterName);
  }, [filters]);

  useEffect(() => {
    filterName();
    console.log(numbers);
  }, [data, numbers]);

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
