import React, {useReducer} from 'react';

export const ThemeProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const setDarkTheme = () => {};
  const setLightTheme = () => {};
};
