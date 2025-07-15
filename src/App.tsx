import { Routes, Route } from "react-router-dom";
import Layout from "../src/Layout/Layout";
import Home from "./Pages/Home/Home";
import AddTask from "./Pages/AddTask/Addtask"

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/AddTask" element={<Layout><AddTask /></Layout>} />
    </Routes>
  );
};

export default App;
