import "./footer.css"


export function Footer(){
    return(
        <>
        <footer>
            <form action="">
                <nav>
                    <ul>
                        <li><img src="../public/favIcon.png" alt="logo" /></li>
                        <li dir="rtl"><a href="">من نحن</a></li>
                        <li dir="rtl"><a href="">خدماتنا</a></li>
                        <li dir="rtl"><a href="">فريقنا</a></li>
                        <li dir="rtl"><a href="">تواصل معنا</a></li>
                    </ul>
                    <div className="footer-contact-us">
                        <h6>Contact Us</h6>
                        <p>humammohammad76@gmail.com</p>
                        <p type="tel">+964 791 129 5789</p>
                    </div>
                    <div className="footer-visit-us">
                        <h6>Visit</h6>
                        <p>النجف حي الامير,

                        </p>
                    </div>
                </nav>
            </form>
        </footer>
        </>
    )
}