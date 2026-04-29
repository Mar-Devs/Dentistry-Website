import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./navBar";
import { Home } from "./home";
import { OurTeam } from "./ourTeam";
import { Services } from "./services";
import { Footer } from "./footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Home />
    <Services />
    <OurTeam />
    <Footer/>
  </StrictMode>,
);
