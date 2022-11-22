import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Form() {
  const { setFilters } = useContext(StarWarsContext);

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="pesquisar"
        onChange={ ({ target }) => setFilters(target.value) }
      />
    </form>
  );
}

export default Form;
