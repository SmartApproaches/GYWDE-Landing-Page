import { Routes, Route } from "react-router-dom";
import HowGwydeWorks from "./components/HowGwydeWorks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HowGwydeWorks />} />
    </Routes>
  );
}

export default App;
