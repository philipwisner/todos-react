import React from 'react';
import '../styles/Containers.scss';
import appData from '../data';
import { ColorPicker } from '../components';

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: appData.colors,
      selectedColor: '#921CE8',
      saved: false,
    };
  }

  setThemeColor = color => {
    this.setState({ selectedColor: color, saved: true }, () => {
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
        {this.state.saved ? <p className="saved">Saved</p> : null}
      </div>
    );
  }
}

export default SettingsContainer;
