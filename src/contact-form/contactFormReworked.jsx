import "./contactForm.css"

export function ContactForm() {
  return (
    <>
      <form action="/submission" method="POST" className="">
      <div className="flex justify-between">
        <div className="flex flex-col">
            <label htmlFor="full-name" className="">الاسم الكامل</label>
            <input className="bg-inputBkg border-1-inputBorder p-[0.5rem]" type="text" name="full-name" id="full-name" placeholder="ادخل اسمك" />
        </div>
        <div>
            <label htmlFor="phone-number">رقم الهاتف</label>
            <input type="number" name="phone-number" id="phone-number" />
        </div>
      </div>
      </form>
    </>
  );
}
