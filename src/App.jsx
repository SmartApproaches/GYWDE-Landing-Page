import { Routes, Route } from "react-router-dom";
import AboutUsSection from "./components/AboutUsSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutUsSection />} />
    </Routes>
  );
}

export default App;
