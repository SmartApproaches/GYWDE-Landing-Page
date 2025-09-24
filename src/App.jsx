import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ServicesCategory from "./components/ServicesCategory";
import AboutUs from "./pages/About-Us/AboutUs";
import ServicesCard from "./pages/ServicesCard";
import TechnologyDetails from "./pages/TechnologyDetails";
import PostJob from "./pages/Post-Job";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<ServicesCategory />} />
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/services-category" element={<ServicesCard />} />
        <Route path="/category-details" element={<TechnologyDetails />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </>
  );
}

export default App;
