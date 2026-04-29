import maleProfile from "./assests/male-profile.jpg";
import "./ourTeam.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import arrowDownwardIcon from "./assests/arrow-downward.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function OurTeam() {
  const certifcates = ["شهادت طب اسنانو جامعة الكوفه"];
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
              drName="دكتور همام الاسدي"
              drAbout="متخصص زرع"
              practicingSince="يمارس منذ 2018"
              certifcates={certifcates}
            />
            <AboutCard
              drName="دكتوره ساره علي"
              drAbout="متخصصق تقويم"
              practicingSince="تمارس منذ 2018"
              certifcates={certifcates}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function AboutCard({ drName, drAbout, practicingSince, certifcates }) {
  function certDisplay() {
    const bool = false;
    const certDiv = document.querySelector(".certifcations");
    const btn = document.querySelector(".arrow-down");

    btn.addEventListener("click", () => {
      certDiv.style.display = "flex";
    });
  }
  return (
    <>
      <div className="card">
        <div className="card-top">
          <img src={maleProfile} alt="" />
        </div>
        <div className="card-bottom">
          <h6 dir="rtl">{drName}</h6>
          <p dir="rtl">{drAbout}</p>
          <div className="practice-and-more">
            <button className="arrow-down" onClick={certDisplay}>
              <img src={arrowDownwardIcon} alt="downward-arrow" />
            </button>
            <p className="practice-date" dir="rlt">
              {practicingSince}
            </p>
          </div>
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
        </div>
      </div>
    </>
  );
}
