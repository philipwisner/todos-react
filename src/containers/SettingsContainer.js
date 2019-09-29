import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { ColorPicker, SetFilter } from '../components';
import { updateColorTheme, updateDefaultTab } from '../store/actions';
import '../styles/Containers.scss';
import appData from '../data';

const SettingsContainer = props => {
  const colors = appData.colors;
  const statuses = appData.statuses;
  const dispatch = useDispatch();
  const themeColor = props.themeColor;
  const [selectedColor, setSelectedColor] = useState(themeColor);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [saved, setSaved] = useState(false);

  const handleSetSaved = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 1000);
  };

  const handleSelectedColor = color => {
    dispatch(updateColorTheme(color));
    setSelectedColor(color);
    handleSetSaved();
  };

  const handleSelectedFilter = filter => {
    dispatch(updateDefaultTab(filter));
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
    themeColor: store.settings.updateSettings.themeColor,
  };
};
export default connect(mapStateToProps)(SettingsContainer);
