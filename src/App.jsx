import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesCategory from "./components/ServicesCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<ServicesCategory />} />
      </Routes>
    </>
  );
}

export default App;
