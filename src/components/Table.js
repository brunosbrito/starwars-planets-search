import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters, filterTwo } = useContext(StarWarsContext);
  const [search, setSearch] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const { columFilter, comparisonFilter, number } = filterTwo;

  const filterOptions = (arr) => {
    switch (comparisonFilter) {
    case 'maior que':
      return arr.filter((el) => +el[columFilter] > +number);
    case 'menor que':
      return arr.filter((el) => +el[columFilter] < +number);
    case 'igual a':
      return arr.filter((el) => +el[columFilter] === +number);
    default:
      return arr;
    }
  };

  const filterName = () => {
    const dataFilterName = (!filteredData.length ? data : filteredData)
      .filter((el) => el.name.toUpperCase().includes(filters.toUpperCase()));
    const filtered = filterOptions(dataFilterName);
    setSearch(filtered);
    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    const dataFilterName = data
      .filter((el) => el.name.toUpperCase().includes(filters.toUpperCase()));
    setSearch(dataFilterName);
  }, [filters]);

  useEffect(() => {
    filterName();
  }, [data, filterTwo]);

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
