import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import FetchApi from '../services/FetchApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState('');
  const [option, setOptions] = useState([]);
  const [filterTwo, setFilterTwo] = useState([]);

  useEffect(() => {
    FetchApi().then((result) => setData(result));
  }, []);

  const value = useMemo(() => ({
    data,
    filters,
    setFilters,
    filterTwo,
    setFilterTwo,
  }), [data,
    filters,
    setFilters,
    option,
    setOptions,
    filterTwo,
    setFilterTwo,
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
