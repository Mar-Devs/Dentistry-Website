import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./navBar";
import { Home } from "./home";
import {StatsSection} from "./stats.jsx"
import { OurTeam } from "./ourTeam";
import { Services } from "./services";
import { DentalBooking } from "./contactForm.jsx";
import { Footer } from "./footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Home />
    <StatsSection/>
    <Services />
    <OurTeam />
    <DentalBooking/>
    <Footer/>
  </StrictMode>,
);
