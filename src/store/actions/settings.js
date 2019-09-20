export const Types = {
  SET_COLOR_THEME: 'SET_COLOR_THEME',
};

export const updateColorTheme = theme => ({
  type: Types.SET_COLOR_THEME,
  payload: theme,
});
