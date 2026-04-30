import "./home.css"
import dentist from './assests/dentist.png'
import calenderIcon from "./assests/calenderIcon.svg"
export function Home(){
    return(
        <>
        <section id="home">
            <div className="home-body">
                <div className="home-body-left">
                    <img src={dentist} alt="dentist-leaning-against-a-tooth" />
                </div>
                <div className="home-body-right">
                    <p dir="rtl">عياده متخصصه في مجال تعويض الاسنان الثابته و المتحركه</p>
                    <button><img src={calenderIcon}alt="calendar" />احجز الان</button>
                </div>
            </div>
        </section>
        </>
    )
}