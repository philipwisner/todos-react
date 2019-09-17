import React from "react";

//OnClick of filter item send this to parent and update list filter.
//Need to display whether field is active

const FilterBar = props => {
  console.log(props);
  return (
    <div className="FilterBar">
      <p className="FilterItem SelectedItem">All</p>
      <p className="FilterItem">Pending</p>
      <p className="FilterItem">Completed</p>
    </div>
  );
};

export default FilterBar;
