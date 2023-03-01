/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Logo from '../img/logo-star-wars.png';

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
    // setFilterTwo(options);
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
      <div className="text-center" style={ { paddingTop: '80px' } }>
        <img
          style={ { opacity: '60' } }
          src={ Logo }
          alt="logo Star Wars"
        />
      </div>
      <div className="container" style={ { paddingTop: '30px' } }>
        <div className="col-md-6">
          <input
            style={ { marginBottom: '10px' } }
            className="form-control  bg-dark text-white"
            data-testid="name-filter"
            type="text"
            placeholder="pesquisar por nome"
            onChange={ ({ target }) => setFilters(target.value) }
          />
        </div>
        <div className="row g-3">
          <div className="col-md-3">
            <select
              className="form-select bg-secondary bg-opacity-10"
              data-testid="column-filter"
              name="columFilter"
              onChange={ handleChange }
            >
              {values.map((el) => <option key={ el } value={ el }>{el}</option>)}
            </select>
          </div>
          <div className="col-md-2">
            <select
              className="form-select bg-transparent border-bottom"
              name="comparisonFilter"
              value={ options.comparisonFilter }
              data-testid="comparison-filter"
              onChange={ handleChange }
            >
              <option>maior que</option>
              <option>menor que</option>
              <option>igual a</option>
            </select>
          </div>
          <div className="col-md-2">
            <input
              className="form-control bg-transparent border-bottom"
              type="number"
              data-testid="value-filter"
              name="number"
              value={ options.number }
              onChange={ handleChange }
            />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-dark"
              type="button"
              data-testid="button-filter"
              onClick={ handleClick }
            >
              Filtrar
            </button>
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-dark"
              type="button"
              onClick={ clearFilters }
              data-testid="button-remove-filters"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      </div>

      <div>
        { numbers.map((el) => (
          <div
            data-testid="filter"
            key={ el.columFilter }
          >
            <div className="container" style={ { display: 'flex', marginTop: '20px' } }>
              <p>{`${el.columFilter} ${el.comparisonFilter} ${el.number}` }</p>
              <button
                style={ { marginLeft: '10px' } }
                className="btn btn-dark"
                name={ el.columFilter }
                type="button"
                onClick={ deletedButton }
              >
                x
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>

  );
}
export default Form;
