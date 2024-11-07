import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Reception />} />
          <Route path="/floor/:index" element={<Floor />} />
          <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
