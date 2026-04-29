import "./services.css";
import arrowRight from "./assests/arrow-right.svg";
import denture from "./assests/denture.png";
import toothFilling from "./assests/tooth-filling.png";
import toothExtraction from "./assests/tooth-extraction.png";
import braces from "./assests/braces.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Services() {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".service", {
      opacity: 0.5,
      y: 100,
      duration: 3,
      scrollTrigger: {
        trigger: ".service",
        toggleActions: "restart none none none",
      },
    });
  });
  return (
    <>
      <section id="services">
        <div className="services-header">
          <h6 dir="rtl">خدماتنا</h6>
          <h4 dir="rtl">عنايه احترافيه لكل ابتسامه</h4>
          <p className="blurb" dir="rtl">
            نوفر مدى منالخدمات, كل خدمه مصممه لصحتكوثقتك, و جمالك.
          </p>
        </div>
        <div className="services">
          <Service
            servicePhoto={denture}
            serviceName="تركيبة اسنان"
            serviceDescription="حشوة أسنان متقنة تعيد لابتسامتك جمالها الطبيعي وتحمي أسنانك لسنوات بثقة وراحة."
          />
          <Service
            servicePhoto={toothFilling}
            serviceName="حشوة اسنان"
            serviceDescription="أطقم أسنان مصمّمة بدقة تمنحك ابتسامة طبيعية وثقة كاملة وراحة يومية."
          />
          <Service
            servicePhoto={toothExtraction}
            serviceName="قلع اسنان"
            serviceDescription="خلع أسنان آمن وسلس يضمن راحتك ويحافظ على صحة فمك بخبرة واهتمام."
          />
          <Service
            servicePhoto={braces}
            serviceName="تقويم اسنان"
            serviceDescription="تقويم أسنان متطوّر ينسّق ابتسامتك بدقّة ويمنحك مظهراً واثقاً يدوم."
          />
        </div>
        {/* <div className="button">
          <button dir="rtl">
            <img src="../public/calenderIcon.svg" alt="calender" />
            احجز الان
          </button>
        </div> */}
      </section>
    </>
  );
}

export function Service({ servicePhoto, serviceName, serviceDescription }) {
  return (
    <>
      <div className="service">
        <div className="service-display">
          <img className="service-img" src={servicePhoto} alt="" />
          <p dir="rtl">{serviceName}</p>
          <button>
            <img className="arrow-img" src={arrowRight} alt="" />
          </button>
        </div>
        <div className="service-info">
          <h6 dir="rtl">{serviceName}</h6>
          <p dir="rtl">{serviceDescription}</p>
        </div>
      </div>
    </>
  );
}
