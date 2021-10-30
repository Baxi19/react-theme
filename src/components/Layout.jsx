import { useContext } from 'react';
import ThemedButton from './ThemeButton';
import ThemeContext from '../theme/themeContex';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="Layout"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <header>
        <nav>
          <p>React Hooks</p>
          <ThemedButton />
        </nav>
      </header>
        {children}
      <footer>
        <p>Copyright</p>
      </footer>
    </div>
  );
}

export default Layout;