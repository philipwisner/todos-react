import React from 'react';
import appData from '../data';

const FilterBar = props => {
  const { selectedFilter, toggleFilter } = props;

  const filters = appData.statuses.map(status => {
    return (
      <p
        key={status.value}
        className={selectedFilter === status.value ? 'FilterItem SelectedItem' : 'FilterItem'}
        onClick={() => toggleFilter(status.value)}
      >
        {status.name}
      </p>
    );
  });

  return <div className="FilterBar">{filters}</div>;
};

export default FilterBar;
