import { Routes, Route } from "react-router-dom";
import ServicesCategory from "./components/ServicesCategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ServicesCategory />} />
    </Routes>
  );
}

export default App;
