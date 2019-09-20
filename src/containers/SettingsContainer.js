import React, { Component } from 'react';
import '../styles/Containers.scss';
import appData from '../data';
import { ColorPicker, SetFilter } from '../components';

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: appData.colors,
      statuses: appData.statuses,
      selectedColor: '#921CE8',
      saved: false,
      selectedFilter: 'all',
    };
  }

  setThemeColor = color => {
    this.setState({ selectedColor: color, saved: true }, () => {
      setTimeout(() => {
        this.setState({ saved: false });
      }, 1000);
    });
  };

  setDefaultFilter = filter => {
    this.setState({ selectedFilter: filter, saved: true }, () => {
      setTimeout(() => {
        this.setState({ saved: false });
      }, 1000);
    });
  };

  render() {
    return (
      <div className="settings">
        <h2 className="secondary-header">Settings</h2>
        <p className="subheader">Color Theme</p>
        <ColorPicker
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          setThemeColor={this.setThemeColor}
        />
        <p className="subheader">Set Default Filter</p>
        <SetFilter
          statuses={this.state.statuses}
          selectedFilter={this.state.selectedFilter}
          setDefaultFilter={this.setDefaultFilter}
        />
        {this.state.saved ? <p className="saved">Saved</p> : null}
      </div>
    );
  }
}

export default SettingsContainer;
