import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesCard from "./pages/ServicesCard";
import TechnologyDetails from "./pages/TechnologyDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services-category" element={<ServicesCard />} />
        <Route path="/category-details" element={<TechnologyDetails />} />
      </Routes>
    </>
  );
}

export default App;
