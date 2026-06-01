import "./navBar.css";
import menuIcon from "./assests/menuIcon.svg";
import closeIcon from "./assests/closeIcon.svg";
import favIcon from "./assests/favIcon.png";

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

  function navigationHideNavBar() {
    const menuNav = document.querySelector(".mobile-nav");
    const aElement = document.querySelector(".mobile-a-item");
    const aElement1 = document.querySelector(".mobile-a-item1");
    const aElement2 = document.querySelector(".mobile-a-item2");

    aElement.addEventListener("click", () => {
      menuNav.style.display = "none";
    });

    aElement1.addEventListener("click", () => {
      menuNav.style.display = "none";
    });

    aElement2.addEventListener("click", () => {
      menuNav.style.display = "none";
    });
  }

  return (
    <>
      <div className="mobile-nav">
        <img className="close-icon" src={closeIcon} alt="close" />
        <ul className="mobile-ul">
          <li>
            <a
              href="#services"
              className="mobile-a-item"
              onClick={navigationHideNavBar}
            >
              خدماتنا
            </a>
          </li>
          <li>
            <a
              href="#our-team"
              className="mobile-a-item1"
              onClick={navigationHideNavBar}
            >
              فريقنا
            </a>
          </li>
          <li className="contact-us-mobile" id="contact-us-mobile">
            <a
              href="#contact-us"
              className="mobile-a-item2"
              onClick={navigationHideNavBar}
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
            onClick={showMobileNav}
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
              <button className="contact-us">
                <a href="#contact-us">تواصل معنا</a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
