import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import FetchApi from '../services/FetchApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState('');
  const [filterTwo, setFilterTwo] = useState([]);
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    FetchApi().then((result) => setData(result));
  }, []);

  const value = useMemo(() => ({
    data,
    filters,
    setFilters,
    filterTwo,
    setFilterTwo,
    numbers,
    setNumbers,
  }), [data,
    filters,
    setFilters,
    filterTwo,
    setFilterTwo,
    numbers,
    setNumbers,
  ]);

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
