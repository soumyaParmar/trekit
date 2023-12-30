import "./App.css";
import { Route, BrowserRouter as Routes } from "react-router-dom";
import HeroPage from "./Components/Homepages/HeroPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HeroPage />} />
      </Routes>
    </div>
  );
}

export default App;
