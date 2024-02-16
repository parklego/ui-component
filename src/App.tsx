import GlobalStyle from "./styles/global";
import { themeStyle } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeMode from "./pages/ThemeMode";

import { useLocalStorage } from "./lib/storage";

function App() {
  const { theme } = useLocalStorage();

  return (
    <ThemeProvider theme={themeStyle[theme]}>
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
