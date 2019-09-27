import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/Containers.scss';
import appData from '../data';
import { ColorPicker, SetFilter } from '../components';

const SettingsContainer = () => {
  const colors = appData.colors;
  const statuses = appData.statuses;
  const [selectedColor, setSelectedColor] = useState(appData.selectedColor);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [saved, setSaved] = useState(false);

  // useEffect(() => console.log('updated'), [selectedColor, selectedColor]);

  const handleSetSaved = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1000);
  };

  const handleSelectedColor = color => {
    setSelectedColor(color);
    //this needs to dispatch an action
    //This needs to be known by app
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

const mapStateToProps = store => {
  return {
    themeColor: store.settings.themeColor,
  };
};

export default connect(mapStateToProps)(SettingsContainer);
