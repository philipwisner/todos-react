import React from 'react';
import '../styles/Settings.scss';

const ColorPicker = ({ colors, selectedColor, setThemeColor }) => {
  const colorTiles = colors.map(color => {
    return (
      <div
        key={color.value}
        className={selectedColor === color.value ? 'selected color-tile' : 'color-tile'}
        style={{ backgroundColor: color.value }}
        onClick={() => setThemeColor(color.value)}
      ></div>
    );
  });
  return <div className="color-tiles">{colorTiles}</div>;
};

export default ColorPicker;
