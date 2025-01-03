import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./views/Home"));
const ImagesToday = lazy(() => import("./views/ImagesToday"));
const ImagesPerDate = lazy(() => import("./views/ImagesPerDate"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/images/today" element={<ImagesToday />} />
        <Route path="/images/per-date" element={<ImagesPerDate />} />
      </Routes>
    </Router>
  );
}

export default App;
