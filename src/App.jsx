import { Route, Routes } from "react-router-dom";
import CategoryCard from "./components/CategoryCard";
import UserManual from "./components/UserManual";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <CategoryCard />
            <UserManual />
          </div>
        }
      />
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;
