export const SettingsTypes = {
  SET_COLOR_THEME: 'SET_COLOR_THEME',
  SET_DEFAULT_TAB: 'SET_DEFAULT_TAB',
};

export const updateColorTheme = theme => ({
  type: SettingsTypes.SET_COLOR_THEME,
  payload: theme,
});

export const updateDefaultTab = tab => ({
  type: SettingsTypes.SET_DEFAULT_TAB,
  payload: tab,
});
