import "./footer.css";
import pin from "./assests/pin.svg";
import facebook from "./assests/facebook.png"
import instagram from "./assests/instagram.png"

export function Footer() {
  return (
    <>
    <footer>
      <div className="footer-wrap">
        <nav className="footer-top">
          <a href="#">من نحن</a>
          <a href="#">خدماتنا</a>
          <a href="#">فريقنا</a>
          <a href="#">زبائننا</a>
          <a href="#">تواصل معنا</a>
        </nav>
        <div className="footer-main">
          <div className="footer-col">
            <div className="col-label">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              تواصل معنا
            </div>
            <div className="contact-row">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="contact-detail">
                  <span className="contact-sublabel">البريد الإلكتروني</span>
                  <span className="contact-value"><a  className="footer-phone-number" href="mailto:humammohammad76@gmail.com">humammohammad76@gmail.com</a></span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="contact-detail">
                  <span className="contact-sublabel">رقم الهاتف</span>
                  <span className="contact-value"><a className="footer-phone-number" href="tel:+964 781 129 5789">+964 781 129 5789</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="col-label">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              العنوان
            </div>
            <div className="address-lines">
              <div className="address-line">
                <span className="address-dot" />
                النجف
              </div>
              <div className="address-line">
                <span className="address-dot" />
                حي الأمير
              </div>
              <div className="address-line">
                <span className="address-dot" />
                شارع الزهور
              </div>
              <div className="address-line">
                <span className="address-dot" />
                مقابل مطعم كنتاكي هوم
              </div>
              <div className="address-line">
                <span className="address-dot" />
                مجاور أسواق الزيزفون
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="col-label">
              <svg viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
              </svg>
              ساعات العمل
            </div>
            <div className="hours-list">
              <div className="hours-row">
                <span className="hours-day">السبت – الخميس</span>
                <span className="hours-time">٥ مساءً – ١٠ مساءً</span>
              </div>
              <hr className="hours-divider" />
              <div className="hours-row">
                <span className="hours-day">الجمعة</span>
                <span className="hours-closed">مغلق</span>
              </div>
            </div>
          </div>
          <div className="footer-socails">
            <a href="https://www.facebook.com/share/1D8biYrB1r/?mibextid=wwXIfr"><img src={facebook} alt="فيسبوك" /></a>
          <a href="https://www.instagram.com/dr.humam_alassadi?igsh=MWVudXR0bHZjeWNxZw=="><img src={instagram} alt="instagram" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>جميع الحقوق محفوظة © 2026</span>
        </div>
      </div>
      </footer>
    </>
  );
}
