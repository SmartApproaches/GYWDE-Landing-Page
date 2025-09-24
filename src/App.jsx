import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesCard from "./pages/ServicesCard";
import TechnologyDetails from "./pages/TechnologyDetails";
import PostJob from "./pages/Post-Job";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services-category" element={<ServicesCard />} />
        <Route path="/category-details" element={<TechnologyDetails />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </>
  );
}

export default App;
