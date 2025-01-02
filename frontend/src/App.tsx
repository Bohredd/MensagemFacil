import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
