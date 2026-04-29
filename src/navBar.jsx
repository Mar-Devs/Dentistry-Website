import "./navBar.css";

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
        <img className="close-icon" src="..\public\closeIcon.svg" alt="close" />
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
            <a href="">تواصل معنا</a>
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
            src="..\public\menuIcon.svg"
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
              <button className="contact-us">تواصل معنا</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
