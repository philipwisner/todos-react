import React from 'react';
import PropTypes from 'prop-types';
import appData from '../data';

const FilterBar = ({ selectedFilter, toggleFilter }) => {
  const filters = appData.statuses.map(status => {
    return (
      <p
        key={status.value}
        className={selectedFilter === status.value ? 'filter-item selected-item' : 'filter-item'}
        onClick={() => toggleFilter(status.value)}
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
