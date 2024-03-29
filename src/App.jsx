import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Planets from "./components/Planets/Planets";
import ArticlesById from "./components/Articles/IndividualArticles/ArticlesById";
import PlanetsById from "./components/Planets/IndividualPlanets/PlanetsById";
import Users from "./components/Users/Users";
import Moons from "./components/Moons/Moons"
import BlackHoles from "./components/BlackHoles/BlackHoles";
import AstronomyData from "./components/Astronomy/AstronomyData"
// import GalaxyData from "./components/Galaxies/GalaxyData";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/articles/:article_id" element={<ArticlesById />} />
        <Route path="/planets/:planets_id" element={<PlanetsById />} />
        <Route path="/users" element={<Users />} />
        <Route path="/moons" element={<Moons />} />
        <Route path="/black_holes" element={<BlackHoles />} />
        <Route path="/astronomy_info" element={<AstronomyData />} />
        {/* <Route path="/galaxies" element={<GalaxyData />} /> */}
      </Routes>
    </>
  );
}

export default App;
