import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const [options, setOptions] = useState({
    columFilter: 'population',
    comparisonFilter: 'maior que',
    number: 0,
  });
  const { setFilters, setFilterTwo, filterTwo } = useContext(StarWarsContext);

  const newObj = [{ ...filterTwo }];
  console.log(newObj);

  const handleChange = ({ target }) => {
    setOptions({ ...options, [target.name]: target.value });
  };

  const handleClick = () => {
    setFilterTwo(options);
  };

  return (
    <div>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="pesquisar"
          onChange={ ({ target }) => setFilters(target.value) }
        />
        <select
          name="columFilter"
          value={ options.columFilter }
          onChange={ handleChange }
          data-testid="column-filter"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          name="comparisonFilter"
          value={ options.comparisonFilter }
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          name="number"
          value={ options.number }
          data-testid="value-filter"
          onChange={ handleChange }
          type="number"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar

        </button>

      </form>
    </div>
  );
}

export default Form;
