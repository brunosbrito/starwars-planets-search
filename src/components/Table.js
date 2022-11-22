import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const [search, setSearch] = useState([]);

  const filterName = () => {
    const dataFilterName = data
      .filter((el) => el.name.toUpperCase().includes(filters.toUpperCase()));
    setSearch(dataFilterName);
  };
  console.log(search);

  useEffect(() => {
    // setSearch(data);
    // if (Object.values(filters).length > 1) {
    //   filterName();
    // }
    filterName();
  }, [data, filters]);

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
