import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SiteLayout from "../layouts/SiteLayout";

function App() {
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
}

export default App;
