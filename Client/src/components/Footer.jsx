import React from "react";
import logo from "../assets/img/logo.png"; 

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 w-full" dir="rtl"> 
      <footer className="py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-right"> {/* تعديل المحاذاة */}
          
          {/* معلومات مشكاة */}
          <div>
            <div className="flex items-center justify-end mb-4"> 
            <img src={logo} alt="شعار" className="h-20 w-20 ml-30 mr-10" /> {/* تعديل التباعد */}
              {/* <h5 className="text-xl font-bold text-gray-100">مشكاة</h5> */}
            </div>
            <p className="text-gray-400">
              من خلال منصتنا، نوفر بيئة حاضنة تجمع بين الإرشاد، والتسويق، والتمويل، مما يساعد أصحاب المشاريع على تجاوز العقبات وتحقيق النجاح. مشكاة ليست مجرد موقع، بل مجتمعٌ داعم، يشجع الابتكار ويمكّن الطموحين من تحويل شغفهم إلى إنجازات حقيقية.
            </p>
          </div>

          {/* روابط سريعة */}
          <div className="mr-25">
            <h5 className="text-xl font-bold mb-4 text-gray-100">روابط سريعة</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">الرئيسية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">من نحن</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">تواصل معنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">الدعم</a></li>
            </ul>
          </div>

          {/* الموارد */}
          <div className="mr-25" >
            <h5 className="text-xl font-bold mb-4  text-gray-100">الموارد</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">مركز المساعدة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">الإرشادات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">ساهم معنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#2DAA9E] no-underline">قصص النجاح</a></li>
            </ul>
          </div>

          {/* اتصل بنا */}
          <div>
            <h5 className="text-xl font-bold mb-4 text-gray-100">اتصل بنا</h5>
            <p className="text-gray-400">📧 support@meshkah.com</p>
            <p className="text-gray-400">📞 +1 234 567 890</p>
            <p className="text-gray-400">📍 الزرقاء، الأردن</p>
          </div>
        </div>

        {/* حقوق النشر ووسائل التواصل الاجتماعي */}
        <div className="flex flex-col sm:flex-row justify-between py-6 border-t border-gray-700 mt-6 text-gray-500 text-sm">
          <p className="text-right mr-25">&copy; 2025 Meshkah. جميع الحقوق محفوظة.</p>

          <div className="flex gap-6 justify-start sm:justify-end" style={{ width: "24%" }}> 
            <a href="#" className="text-gray-400 hover:text-[#2DAA9E]"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="#" className="text-gray-400 hover:text-[#2DAA9E]"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="#" className="text-gray-400 hover:text-[#2DAA9E]"><i className="fab fa-linkedin fa-2x"></i></a>
            <a href="#" className="text-gray-400 hover:text-[#2DAA9E]"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;