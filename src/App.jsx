import {  Routes, Route } from "react-router-dom";
import AboutUsSection from "./components/AboutUsSection";
import AboutUsSection1 from "./components/AboutUsSection1";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AboutUsSection />
            <AboutUsSection1 />
          </>
        }
      />
    </Routes>
  );
    
}

export default App;
