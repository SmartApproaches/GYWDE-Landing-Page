import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesCard from "./pages/ServicesCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services-category" element={<ServicesCard />} />
      </Routes>
    </>
  );
}

export default App;
