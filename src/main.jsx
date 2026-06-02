import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavBar } from "./nav-bar/navBar.jsx";
import { Home } from "./home/home.jsx";
import {StatsSection} from "./stats/stats.jsx"
import { OurTeam } from "./our-team/ourTeam.jsx";
import { Services } from "./services/services.jsx";
import { DentalBooking } from "./contact-form/contactForm.jsx";
import { Footer } from "./footer/footer.jsx";

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
