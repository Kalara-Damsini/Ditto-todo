import { Routes, Route } from "react-router-dom";
import Layout from "../src/Layout/Layout";
import Home from "../src/Pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
    </Routes>
  );
};

export default App;
