import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Articels from "./pages/Articels/Articels.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/articles" element={<Articels />}>
          <Route path="news" element />
          <Route path="politics" element />
          <Route path="news" element />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
