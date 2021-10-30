import React, { useContext } from 'react';
import ThemeContext from '../theme/themeContex';

function ThemeButton() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Change Theme
    </button>
  );
}

export default ThemeButton;