import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Settings.scss';

const SetFilter = ({ statuses, selectedFilter, setDefaultFilter }) => {
  const filterOptions = statuses.map((status, index) => {
    return (
      <div key={index} className="filter-option">
        <label htmlFor={status.value}>
          <input
            type="radio"
            name="default-fitler"
            checked={selectedFilter === status.value}
            id={status.value}
            value={status.value}
            onChange={() => setDefaultFilter(status.value)}
          />
          {status.name}
        </label>
      </div>
    );
  });
  return <div className="filter-options">{filterOptions}</div>;
};

export default SetFilter;

SetFilter.propTypes = {
  statuses: PropTypes.array,
  selectedFilter: PropTypes.string,
  setDefaultFilter: PropTypes.func,
};
