import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HeroPage from "./Components/Homepages/HeroPage";
import Navbar from "./Components/Navbar/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HeroPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}

export default App;
