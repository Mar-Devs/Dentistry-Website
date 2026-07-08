import { body, validationResult, matchedData } from "express-validator";

const emptyErr = "لا يمكن أن يكون فارغاً";
const alphaErr = "يمكن أن يحتوي فقط على أحرف";
const numErr = "يمكن أن يحتوي على أرقام فقط";

const validator = [
  body("full-name")
    .trim()
    .notEmpty()
    .withMessage(`الاسم ${emptyErr}`)
    .bail()
    .isAlpha("ar", { ignore: " " })
    .withMessage(`الاسم ${emptyErr}`),

  body("phone-number")
    .trim()
    .notEmpty(`رقم الهاتف ${emptyErr}`)
    .bail()
    .isNumeric({ min: 11, max: 11 })
    .withMessage(`رقم الهاتف ${numErr}`),

  body("service-type").trim().notEmpty(`الخدمه ${emptyErr}`).bail(),

  body("appointment-time").trim().notEmpty(`الوقت ${emptyErr}`).bail(),

  body("doctor-gender").trim().notEmpty(`الطبيب ${emptyErr}`).bail(),

  body("date").trim().notEmpty(`التاريخ ${emptyErr}`).bail(),

  body("additional-notes"),
];

const submitAppoitment = [
  validator,
  async (req, res, next) => {
    const errors = validationResult(req);
    const nameError = [];
    const phoneError = [];
    const serviceError = [];
    const appointmentError = [];
    const doctorGenderError = [];
    const dateError = [];

    if (!errors.isEmpty()) {
      const results = errors.array();
      results.forEach((e) => {
        if (e.msg.includes("الاسم")) {
          let temp = e.msg;
          nameError.push(temp);
        } else if (e.msg.includes("رقم الهاتف")) {
          let temp = e.msg;
          phoneError.push(temp);
        } else if (e.msg.includes("الخدمه")) {
          let temp = e.msg;
          serviceError.push(temp);
        } else if (e.msg.includes("الوقت")) {
          let temp = e.msg;
          appointmentError.push(temp);
        } else if (e.msg.includes("الطبيب")) {
          let temp = e.msg;
          doctorGenderError.push(temp);
        } else if (e.msg.includes(التاريخ)) {
          let temp = e.msg;
          dateError.push(temp);
        }
      });
    } else {
      const {
        "full-name": fullName,
        "phone-number": phoneNumber,
        "service-type": serviceType,
        "appointment-time": appointmentTime,
        "doctor-gender": doctorGender,
        date,
        "additional-notes": additionalNotes,
      } = matchedData(req);
      console.log(matchedData)
    }
  },
];

export default submitAppoitment;
