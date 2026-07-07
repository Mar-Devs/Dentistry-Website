import maleProfile from "../assests/male-profile.jpg";
import femaleProfile from "../assests/female no-profile.jpeg";
import humam from "../assests/humam.jpg"
import "./ourTeam.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import arrowDownwardIcon from "../assests/arrow-downward.svg";
import arrowUpIcon from "../assests/arrow-up.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function OurTeam() {
  const certifcates1 = [
    "باكلوريوس جرلحة الفم و الاسنان",
    "سيرتفكت من وزارة الصحة بفرع صناعة الأسنان",
  ];
  const certifcates2 = [
    "باكلوريوس جرلحة الفم و الاسنان",
    "سيرتفكت تجميل الاسنان",
  ];
  const container = useRef();
  useGSAP(() => {
    gsap.from("#our-team", {
      opacity: 0.5,
      y: 100,
      duration: 3,
      scrollTrigger: {
        trigger: "#our-team",
        toggleActions: "restart none none none",
      },
    });
  });
  return (
    <>
      <section id="our-team">
        <div className="our-team-top">
          <div className="our-team-top-left">
            <h6 dir="rtl">فريقنا</h6>
          </div>
          <div className="our-team-top-right">
            <h4 dir="rtl">تعرف على من يقف وراء ابتسامتك</h4>
            <p dir="rtl">
              فريقنا من الخبراء يقدّم لك دقّةً وعنايةً وإبداعًا في كل خطوة،
              بخبرة تمتد لسنوات وشغفٍ بتقديم رعاية مصمّمة خصيصًا لك.
            </p>
          </div>
          <div className="our-team-bottom">
            <AboutCard
              drNameDiv="humam"
              drName="دكتور همام الاسدي"
              drAbout="صناعة اسنان"
              practicingSince="يمارس منذ 2018"
              certifcates={certifcates1}
              str1="doc-a"
              str2="doc-a-img"
              str3="doc-a-div"
              profileImg={humam}
            />
            <AboutCard
              drNameDiv="sarah"
              drName="دكتورة ساره علي"
              drAbout="قشور خزفيه"
              practicingSince="تمارس منذ 2018"
              certifcates={certifcates2}
              str1="doc-b"
              str2="doc-b-img"
              str3="doc-b-div"
              profileImg={femaleProfile}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function AboutCard({
  drName,
  drAbout,
  practicingSince,
  certifcates,
  str1,
  str2,
  str3,
  profileImg,
}) {
  const [open, setOpen] = useState(false);

  function certDisplay() {
    const certDiv = document.querySelector(`.${str3}`);
    if (open === false) {
      const btn = document.querySelector(`.${str1}`);
      const arrowImg = document.querySelector(`.${str2}`);
      btn.addEventListener("click", () => {
        certDiv.style.display = "flex";
        arrowImg.src = arrowUpIcon;
        arrowImg.alt = "upward-arrow";

        setOpen(true);
      });
    } else if (open === true) {
      const btn = document.querySelector(`.${str1}`);
      const arrowImg = document.querySelector(`.${str2}`);

      btn.addEventListener("click", () => {
        certDiv.style.display = "none";
        arrowImg.src = arrowDownwardIcon;
        arrowImg.alt = "downward-arrow";
        setOpen(false);
      });
    }
  }
  return (
    <>
      <div className="card">
        <div className="card-top-and-bottom">
          <div className="card-top">
            <img src={profileImg} alt="" />
          </div>
          <div className="card-bottom">
            <h6 dir="rtl">{drName}</h6>
            <p dir="rtl">{drAbout}</p>
            <div className="practice-and-more">
              <button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  border: "none",
                }}
                className={str1}
                onClick={certDisplay}
              >
                <img
                  style={{ height: "2rem" }}
                  className={str2}
                  src={arrowDownwardIcon}
                  alt="downward-arrow"
                  onClick={() => setOpen(!open)}
                />
              </button>
              <p className="practice-date" dir="rlt">
                {practicingSince}
              </p>
            </div>
          </div>
        </div>
        {
          <div
            className={str3}
            style={{
              display: "none",
              flexDirection: "column",
              padding: "0.2rem 1.5rem",
              backgroundColor: "rgba(27, 79, 216, 0.2)",
              borderRadius: "10px",
              animationName: "slideOut",
              animationDuration: "1s",
              animationFillMode: "forwards",
            }}
          >
            <h6
              className="certifcations-h6s"
              dir="rtl"
              style={{
                margin: "0px",
                fontSize: "1rem",
              }}
            >
              شهادات:
            </h6>
            <ul>
              {certifcates.map((certifcation) => (
                <li
                  style={{ marginBottom: "1rem" }}
                  dir="rtl"
                  key={certifcation}
                >
                  {certifcation}
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </>
  );
}
