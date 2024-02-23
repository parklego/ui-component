import GlobalStyle from "./styles/global";
import { themeStyle } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeMode from "./pages/ThemeMode";

import { useThemeListener } from "./hook/useThemeListener";
import { persistLocalStorage } from "./lib/storage";

function App() {
  useThemeListener();

  const { theme } = persistLocalStorage();
  const validTheme = themeStyle[theme];

  return (
    <ThemeProvider theme={validTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<ThemeMode />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
