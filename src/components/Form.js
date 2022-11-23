import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const [options, setOptions] = useState({
    columFilter: 'population',
    comparisonFilter: 'maior que',
    number: 0,
  });

  const [values, setValues] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const { setFilters, setFilterTwo } = useContext(StarWarsContext);
  const [numbers, setNumbers] = useState([]);

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

  console.log(numbers);

  // useEffect(() => {
  //   setValues({
  //     columFilter: options[0],
  //     comparisonFilter: 'maior que',
  //     number: 0,
  //   }, [values, options]);
  // });

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
          data-testid="column-filter"
          name="columFilter"
          // value={ options.columFilter }
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
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar

        </button>

      </form>
      <div>
        { numbers.map((el) => (
          <div key={ el.columFilter }>
            <p>{`${el.columFilter} ${el.comparisonFilter}`}</p>
            <button type="button">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
