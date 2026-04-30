import maleProfile from "./assests/male-profile.jpg";
import "./ourTeam.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import arrowDownwardIcon from "./assests/arrow-downward.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function OurTeam() {
  const certifcates1 = ["شهادت طب اسنان جامعة الكوفه"];
  const certifcates2 = ["شهادت طب اسنان جامعة الكوفه"];
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
            drNameDiv = "humam"
              drName="دكتور همام الاسدي"
              drAbout="متخصص زرع"
              practicingSince="يمارس منذ 2018"
              certifcates={certifcates1}
            />
            <AboutCard
            drNameDiv = "sarah"
              drName="دكتوره ساره علي"
              drAbout="متخصصق تقويم"
              practicingSince="تمارس منذ 2018"
              certifcates={certifcates2}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function AboutCard({ drName, drAbout, practicingSince, certifcates }) {
  const [open, setOpen] = useState(false)
  function certDisplay() {
    if(open === false){
    const certDiv = document.querySelector(".certifcations");
    const btn = document.querySelector(".arrow-down");
    btn.addEventListener("click", () => {
      certDiv.style.display = "flex";
      setOpen(true)
    });
  } else if(open === true){
    const certDiv = document.querySelector(".certifcations");
    const btn = document.querySelector(".arrow-down");

    btn.addEventListener("click", () => {
      certDiv.style.display = "none";
      setOpen(false)
    });
  }
  }
  return (
    <>
      <div className="card">
        <div className="card-top-and-bottom">
        <div className="card-top">
          <img src={maleProfile} alt="" />
        </div>
        <div className="card-bottom">
          <h6 dir="rtl">{drName}</h6>
          <p dir="rtl">{drAbout}</p>
          <div className="practice-and-more">
            <button className="arrow-down" onClick={certDisplay}>
              <img src={arrowDownwardIcon} alt="downward-arrow" onClick={() => setOpen(!open)}/>
            </button>
            <p className="practice-date" dir="rlt">
              {practicingSince}
            </p>
          </div>
        </div>
        </div>
    {open && (
          <div className="certifcations">
            <h6 dir="rtl">شهادات:</h6>
            <ul>
              {certifcates.map((certifcation) => (
                <li dir="rtl" key={certifcation}>
                  {certifcation}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
