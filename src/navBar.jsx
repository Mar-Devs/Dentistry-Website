import "./navBar.css";
import menuIcon from "./assests/menuIcon.svg"
import closeIcon from "./assests/closeIcon.svg"
import favIcon from "./assests/favIcon.png"

export function NavBar() {
  function showMobileNav() {
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const menuNav = document.querySelector(".mobile-nav");

    menuIcon.addEventListener("click", () => {
      menuNav.style.animationName = "menuSlideIn";
      menuNav.style.display = "flex";
    });

    closeIcon.addEventListener("click", () => {
      menuNav.style.display = "none";
    });
  }

  return (
    <>
      <div className="mobile-nav">
        <img className="close-icon" src={closeIcon} alt="close" />
        <ul className="mobile-ul">
          <li>
            <a href="">من نحن</a>
          </li>
          <li>
            <a href="#services">خدماتنا</a>
          </li>
          <li>
            <a href="#about-us">فريقنا</a>
          </li>
          <li>
            <a href="#our-team">زبائننا</a>
          </li>
          <li className="contact-us-mobile" id="contact-us-mobile">
            <a href="#contact-us">تواصل معنا</a>
          </li>
        </ul>
      </div>
      <header>
        <nav>
          <a href="#home">
            <img
              className="mobile-logo"
              src="../public/favIcon.png"
              alt="tooth"
            />
          </a>
          <img
            className="menu-icon"
            src={menuIcon}
            alt="menu"
            onClick={showMobileNav}
          />

          <ul className="desktop-ul" dir="rtl">
            <li>
              <a href="#home">
                <img className="logo" src="../public/favIcon.png" alt="tooth" />
              </a>
            </li>
            <li>
              <a href="">من نحن</a>
            </li>
            <li>
              <a href="#services">خدماتنا</a>
            </li>
            <li>
              <a href="#our-team">فريقنا</a>
            </li>
            <li>
              <a href="">زبائننا</a>
            </li>
            <li>
              <button className="contact-us"><a href="#contact-us">تواصل معنا</a></button>
            </li>  
          </ul>
        </nav>
      </header>
    </>
  );
}
