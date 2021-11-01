import { useContext } from 'react';
import ThemeContext from '../theme/themeContex';

const ThemeButton = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={handleChangeTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Switch Theme
    </button>
  );
}

export default ThemeButton
