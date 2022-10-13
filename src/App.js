import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { HomeView } from './Views/HomeView';
import { StatsView } from "./Views/StatsView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>yam game</div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/stats">Stats</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/stats" element={<StatsView />} />
        <Route path="*" element={<p>Page 404</p>} />
      </Routes>
    </div>
  );
}

export default App;
