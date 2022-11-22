import PropTypes from 'prop-types';
import React, { useEffect, useState, useMemo } from 'react';
import FetchApi from '../services/FetchApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    FetchApi().then((result) => setData(result));
  }, []);

  const value = useMemo(() => ({
    data,
    filters,
    setFilters,
  }), [data, filters, setFilters]);

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
