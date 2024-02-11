import GlobalStyle from "./styles/global";
import { themeStyle } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeMode from "./pages/ThemeMode";

function App() {
  return (
    <ThemeProvider theme={themeStyle.light}>
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
