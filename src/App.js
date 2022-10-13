import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { HomeView } from "./views/HomeView";
import { StatsView } from "./views/StatsView";

import styled, { ThemeProvider } from "styled-components";
import { COLORS } from "./style/colors";
import { NavBar } from "./components/NavBar/NavBar";

import "./assets/fonts/plus-jarkarta-sans/style.css";

const theme = {
  colors: COLORS,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "1.6rem",
};

const AppTheme = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppTheme>
        <NavBar />
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/stats" element={<StatsView />} />
            <Route path="*" element={<p>Page 404</p>} />
          </Routes>
        </div>
      </AppTheme>
    </ThemeProvider>
  );
}

export default App;
