import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ServicesCategory from "./components/ServicesCategory";
import AboutUs from "./pages/About-Us/AboutUs";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<ServicesCategory />} />
        <Route path="/about" element={<AboutUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
