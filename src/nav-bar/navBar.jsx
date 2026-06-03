import "./navBar.css";
import menuIcon from "../assests/menuIcon.svg";
import closeIcon from "../assests/closeIcon.svg";
import favIcon from "../assests/favIcon.png";
import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    const menuNav = document.querySelector(".mobile-nav");
    if (open === false) {
      menuNav.style.display = "flex";
      setOpen(true);
    } else if (open === true) {
      menuNav.style.display = "none";
      setOpen(false);
    }
  }

  return (
    <>
      <div className="mobile-nav">
        <img
          className="close-icon"
          src={closeIcon}
          alt="close"
          onClick={toggleMenu}
        />
        <ul className="mobile-ul">
          <li>
            <a href="#services" className="mobile-a-item" onClick={toggleMenu}>
              خدماتنا
            </a>
          </li>
          <li>
            <a href="#our-team" className="mobile-a-item1" onClick={toggleMenu}>
              فريقنا
            </a>
          </li>
          <li className="contact-us-mobile" id="contact-us-mobile">
            <a
              href="#contact-us"
              className="mobile-a-item2"
              onClick={toggleMenu}
            >
              تواصل معنا
            </a>
          </li>
        </ul>
      </div>
      <header>
        <nav>
          <a href="#home">
            <img className="mobile-logo" src={favIcon} alt="tooth" />
          </a>
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu"
            onClick={toggleMenu}
          />

          <ul className="desktop-ul" dir="rtl">
            <li>
              <a href="#home">
                <img className="logo" src={favIcon} alt="tooth" />
              </a>
            </li>
            <li>
              <a href="#services">خدماتنا</a>
            </li>
            <li>
              <a href="#our-team">فريقنا</a>
            </li>
            <li>
              <a className="contact-us" href="#contact-us">
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
