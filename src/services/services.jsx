import "./services.css";
import arrowRight from "../assests/arrow-right.svg";
import denture from "../assests/denture.png";
import toothFilling from "../assests/tooth-filling.png";
import toothExtraction from "../assests/tooth-extraction.png";
import braces from "../assests/braces.png";
import cleaning from "../assests/tooth-cleaning.png";
import implant from "../assests/implant.png";
import whitening from "../assests/tooth-whitening (1).png";
import rootCanal from "../assests/root-canal.png";
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
            نوفر مدى من الخدمات, كل خدمه مصممه لصحتك و ثقتك, و جمالك.
          </p>
        </div>
        <div className="services">
          <Service
            servicePhoto={denture}
            serviceName="تركيبة اسنان - ثابته"
            serviceDescription="حشوة أسنان متقنة تعيد لابتسامتك جمالها الطبيعي وتحمي أسنانك لسنوات بثقة وراحة."
            animationID=""
          />
          <Service
            servicePhoto={denture}
            serviceName="تركيبة اسنان - متحركه"
            serviceDescription="حشوة أسنان متقنة تعيد لابتسامتك جمالها الطبيعي وتحمي أسنانك لسنوات بثقة وراحة."
            animationID="moving-denture"
          />
          <Service
            servicePhoto={cleaning}
            serviceName="تنظيف الاسنان "
            serviceDescription="حشوة أسنان متقنة تعيد لابتسامتك جمالها الطبيعي وتحمي أسنانك لسنوات بثقة وراحة."
            animationID=""
          />
          <Service
            servicePhoto={whitening}
            serviceName="تبييض الاسنان"
            serviceDescription="حشوة أسنان متقنة تعيد لابتسامتك جمالها الطبيعي وتحمي أسنانك لسنوات بثقة وراحة."
            animationID=""
          />
          <Service
            servicePhoto={toothFilling}
            serviceName="حشوة اسنان - اعتياديه"
            serviceDescription="حشوة أسنان متقنة تعيد لابتسامتك جمالها الطبيعي وتحمي أسنانك لسنوات بثقة وراحة."
            animationID=""
          />
           <Service
            servicePhoto={rootCanal}
            serviceName="حشوة اسنان - جذريه"
            serviceDescription="حشوة أسنان متقنة تعيد لابتسامتك جمالها الطبيعي وتحمي أسنانك لسنوات بثقة وراحة."
            animationID=""
          />
          <Service
            servicePhoto={implant}
            serviceName="زراعة الاسنان"
            serviceDescription="أطقم أسنان مصمّمة بدقة تمنحك ابتسامة طبيعية وثقة كاملة وراحة يومية."
            animationID=""
          />
          <Service
            servicePhoto={toothExtraction}
            serviceName="قلع اسنان"
            serviceDescription="خلع أسنان آمن وسلس يضمن راحتك ويحافظ على صحة فمك بخبرة واهتمام."
            animationID=""
          />
          <Service
            servicePhoto={braces}
            serviceName="تقويم اسنان"
            serviceDescription="تقويم أسنان متطوّر ينسّق ابتسامتك بدقّة ويمنحك مظهراً واثقاً يدوم."
            animationID=""
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

export function Service({
  servicePhoto,
  serviceName,
  serviceDescription,
  animationID,
}) {
  return (
    <>
      <div className="service">
        <div className="service-display">
          <img
            id={animationID}
            className="service-img"
            src={servicePhoto}
            alt=""
          />
          <p dir="rtl">{serviceName}</p>
          {/* <button>
            <img className="arrow-img" src={arrowRight} alt="" />
          </button> */}
        </div>
        <div className="service-info">
          <h6 dir="rtl">{serviceName}</h6>
          <p dir="rtl">{serviceDescription}</p>
        </div>
      </div>
    </>
  );
}
