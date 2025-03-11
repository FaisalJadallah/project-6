import React, { useState } from 'react';
import { Mail, Clock, Phone, Map } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ إضافة SweetAlert2

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const messageData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    console.log("🚀 البيانات المُرسلة إلى السيرفر:", messageData);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/add-contact",
        messageData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("✅ استجابة السيرفر:", response.data);

      // ✅ تنبيه عند نجاح الإرسال
      Swal.fire({
        title: "تم الإرسال!",
        text: "تم إرسال رسالتك بنجاح، وسنعاود التواصل معك قريبًا.",
        icon: "success",
        confirmButtonText: "حسنًا",
      });

      // تفريغ الحقول بعد الإرسال
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (error) {
      console.error("❌ خطأ أثناء إرسال الطلب:", error);

      let errorMessage = "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.";

      if (error.response) {
        console.error("📌 تفاصيل الخطأ من السيرفر:", error.response.data);
        errorMessage = error.response.data.message || errorMessage;
      } else if (error.request) {
        console.error("📌 لم يتم الحصول على استجابة من السيرفر:", error.request);
      } else {
        console.error("📌 خطأ في إعداد الطلب:", error.message);
      }

      // ✅ تنبيه عند فشل الإرسال
      Swal.fire({
        title: "خطأ!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "حسنًا",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 bg-[#EAEAEA] shadow-lg rounded-lg overflow-hidden">
        {/* Contact Information Section */}
        <div className="bg-[#248f83] text-white p-8 flex flex-col justify-between" dir="rtl">
          <div>
            <h2 className="text-2xl font-bold mb-4">العنوان</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Map className="ml-3 m-3" />
                <p>الأردن - عمان العبدلي</p>
              </div>
              <div className="flex items-center">
                <Clock className="ml-3 m-3" />
                <div>
                  <p>من الإثنين إلى الجمعة: 9 صباحًا إلى 6 مساءً</p>
                  <p>السبت: 10 صباحًا إلى 5 مساءً</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="ml-3 m-3" />
                <p>+962785600</p>
              </div>
              <div className="flex items-center">
                <Mail className="ml-3 m-3" />
                <p>support@meshkah.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-right">هل لديك أي استفسار؟</h2>
          <p className="text-gray-600 mb-6 text-right">
            إذا كانت لديك أي تساؤلات أو كنت ترغب في التواصل معنا، نحن نستمع إليك. لا تتردد في التواصل معنا.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#248f83]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#248f83]"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#248f83]"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="الموضوع"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#248f83]"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="رسالتك"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#248f83]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#248f83] text-white py-3 rounded-lg hover:bg-[#1d766c] transition duration-300"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
