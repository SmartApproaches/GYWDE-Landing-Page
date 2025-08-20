import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ServicesCategory from "./components/ServicesCategory";

function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/Services" element={<ServicesCategory />} />
    </Routes>
    </>
    
  );
}

export default App;
