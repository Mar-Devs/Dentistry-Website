import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./navBar";
import { Home } from "./home";
import { StatsCounter } from "./statsCounter.jsx";
import { OurTeam } from "./ourTeam";
import { Services } from "./services";
import { Footer } from "./footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Home />
    {/* <StatsCounter/> */}
    <Services />
    <OurTeam />
    <Footer/>
  </StrictMode>,
);
