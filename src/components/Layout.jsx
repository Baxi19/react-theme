import { useContext } from 'react';
import ThemedButton from './ThemeButton';
import ThemeContext from '../theme/themeContex';

function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="Layout"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <header>
        <nav>
          <p>Home</p>
          <ThemedButton />
        </nav>
      </header>
      {children}
      <footer>
        <p>Use Context Hook</p>
      </footer>
    </div>
  );
}

export default Layout;
