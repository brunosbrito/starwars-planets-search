import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const [options, setOptions] = useState({
    columFilter: 'population',
    comparisonFilter: 'maior que',
    number: 0,
  });

  const filters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [values, setValues] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const { setFilters, setFilterTwo, numbers, setNumbers } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setOptions({ ...options, [target.name]: target.value });
  };
  const handleOptions = () => {
    const filterOptions = values.filter((el) => el !== options.columFilter);
    setValues(filterOptions);
  };
  const handleClick = () => {
    setFilterTwo(options);
    setNumbers([...numbers, options]);
    handleOptions();
  };

  const clearFilters = () => {
    setNumbers([]);

    setValues(filters);
  };

  const deletedButton = ({ target }) => {
    const { name } = target;
    const removeFilters = numbers.filter((el) => el.columFilter !== name);
    setNumbers(removeFilters);
    values.unshift(name);
    setOptions([...values]);
    setFilterTwo(options);
  };

  useEffect(() => {
    setOptions({
      columFilter: values[0],
      comparisonFilter: 'maior que',
      number: 0,
    });
  }, [values]);

  console.log(numbers);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="pesquisar"
        onChange={ ({ target }) => setFilters(target.value) }
      />
      <select
        data-testid="column-filter"
        name="columFilter"
        onChange={ handleChange }
      >
        {values.map((el) => <option key={ el } value={ el }>{el}</option>)}
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
        type="number"
        data-testid="value-filter"
        name="number"
        value={ options.number }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <div>
        { numbers.map((el) => (
          <div
            data-testid="filter"
            key={ el.columFilter }
          >
            <p>{`${el.columFilter} ${el.comparisonFilter}`}</p>
            <button
              name={ el.columFilter }
              type="button"
              onClick={ deletedButton }
            >
              X

            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={ clearFilters }
          data-testid="button-remove-filters"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}
export default Form;
