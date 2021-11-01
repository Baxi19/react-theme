import './styles.css';
import { useState } from 'react';
import Layout from './components/Layout';
import ThemeContext, { themes } from './theme/themeContex';

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Layout>
        <div className="App">
          <h1>React Theme</h1>
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;

