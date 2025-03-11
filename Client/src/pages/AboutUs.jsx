import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

function About() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // مدة الأنيميشن بالمللي ثانية
//       easing: "ease-in-out", // نوع الحركة
//       once: true, // تشغيل الأنيميشن مرة واحدة فقط
//     });
//   }, []);

  return (
    <main dir="rtl">
      <section className="service-section flex justify-between items-center lg:h-[60vh] h-auto py-12 px-4 bg-[#248f83]">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center mx-20 text-right">
            <div data-aos="fade-up" className="md:w-1/2 w-full">
              <h2 className="text-3xl font-bold text-gray-700 mb-4">
                ابدأ رحلتك معنا
              </h2>
              <p className="text-gray-700 md:text-2xl">مشكاة هي منصتك الداعمة لرواد الأعمال وأصحاب المشاريع الناشئة، حيث نوفر لك الأدوات والموارد التي تساعدك على النمو والنجاح. من خلال شبكتنا، يمكنك الوصول إلى فرص التمويل، الإرشاد، والتواصل مع مجتمع من المبدعين والمستثمرين. مشكاة تضيء طريقك نحو الريادة!
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="md:w-1/2 w-full flex justify-center mb-6 md:mt-6"
            >
              <img
                src="https://images.pexels.com/photos/8553864/pexels-photo-8553864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="إطلالة على الشاليه"
                className="rounded-lg max-w-lg md:max-w-lg w-[full] "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 flex justify-center mt-20 items-center">
        <div className="container flex justify-center items-center px-5 text-right">
          <div className="lg:mx-[100px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                data-aos="zoom-in"
                src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="رؤيتنا"
                className="rounded-lg w-[400px] h-[300px] object-cover"
              />
            </div>
            <div data-aos="fade-up">
              <h2 className="text-4xl font-bold text-[#248f83] mb-4">من نحن</h2>
              <p className="font-medium text-2xl leading-relaxed">نحن ملتزمون بمساعدة أصحاب المشاريع الناشئة على تطوير أعمالهم وتوسيع نطاقها، عبر توفير الأدوات والموارد التي تضمن لهم النجاح. هدفنا هو تمكين رواد الأعمال من الوصول إلى فرص واعدة، والتواصل مع المستثمرين، وبناء مشاريع مبتكرة تترك أثرًا مستدامًا.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 my-20 text-right">
        <div>
          <h2
            data-aos="fade-left"
            className="text-center text-4xl font-bold text-[#248f83] mb-10"
          >
            فريقنا
          </h2>
          <div className="flex justify-center gap-10 flex-col items-center flex-wrap">
            <div className="w-full gap-5 flex justify-evenly items-center flex-wrap">
              {[ 
                { name: "رغد كمال", role: " " },
                { name: "بلال الزرو ", role: "" },
                { name: "هبة معايطة", role: "" },
                { name: "محمد أبو دية", role: " " },
                { name: "فيصل جد الله", role: " " },
                { name: "رامي ", role: "" },
                { name: "  أحمد النجار", role: " " },

              ].map((member, index) => (
                <div key={index} data-aos="flip-right" className="text-center">
                  <img
                    src="https://i.pinimg.com/474x/bd/42/8e/bd428e6bb156d90045700dbf3e967c3e.jpg"
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-bold text-lg text-[#248f83]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-left"
        className="py-12 px-4 bg-[#248f83]  text-right"
      >
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            نحن هنا لمساعدتك!
          </h2>
          <p className="text-gray-700 mb-6">
            هل لديك أي استفسارات أو تحتاج إلى مساعدة؟ فريقنا متاح دائمًا لتقديم
            الدعم لك. لا تتردد في التواصل معنا وسنحرص على تلبية احتياجاتك.
          </p>
          <Link
            to="/contact"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-[#248f83] transition-all"
          >
            تواصل معنا
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
