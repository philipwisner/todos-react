import React, { useState, useEffect } from 'react';
import '../styles/Containers.scss';
import appData from '../data';
import { ColorPicker, SetFilter } from '../components';

const SettingsContainer = () => {
  const colors = appData.colors;
  const statuses = appData.statuses;

  const [selectedColor, setSelectedColor] = useState('#921CE8');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [saved, setSaved] = useState(false);

  useEffect(() => console.log('updated'), [selectedColor, selectedColor]);
  //Need to set saved to false after 500ms

  const handleSetSaved = () => {
    setSaved(true);
  };

  const handleSelectedColor = color => {
    setSelectedColor(color);
    handleSetSaved();
  };

  const handleSelectedFilter = filter => {
    setSelectedFilter(filter);
    handleSetSaved();
  };

  return (
    <div className="settings">
      <h2 className="secondary-header">Settings</h2>
      <p className="subheader">Color Theme</p>
      <ColorPicker
        colors={colors}
        selectedColor={selectedColor}
        setThemeColor={handleSelectedColor}
      />
      <p className="subheader">Set Default Filter</p>
      <SetFilter
        statuses={statuses}
        selectedFilter={selectedFilter}
        setDefaultFilter={handleSelectedFilter}
      />
      {saved ? <p className="saved">Saved</p> : null}
    </div>
  );
};

export default SettingsContainer;
