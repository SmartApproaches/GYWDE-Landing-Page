import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostJob from "./pages/Post-Job";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<PostJob />} />
      </Routes>
    </>
  );
}

export default App;
