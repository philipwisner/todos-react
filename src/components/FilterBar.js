import React from 'react';
import PropTypes from 'prop-types';
import appData from '../data';

const FilterBar = ({ selectedFilter, toggleFilter, themeColor }) => {
  const filters = appData.statuses.map(status => {
    return (
      <p
        key={status.value}
        className={selectedFilter === status.value ? 'filter-item' : 'filter-item'}
        onClick={() => toggleFilter(status.value)}
        style={selectedFilter === status.value ? { color: themeColor, fontWeight: 'bold' } : null}
      >
        {status.name}
      </p>
    );
  });

  return <div className="filter-bar">{filters}</div>;
};

export default FilterBar;

FilterBar.propTypes = {
  selectedFilter: PropTypes.string,
  toggleFilter: PropTypes.func,
};
