import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

function Payment() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      console.error("No user data found");
    }
  }, []);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/projects/AllProject/${id}`
        );
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };
    fetchProjectDetails();
  }, [id]);

  console.log(project);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userId: 0,
    beneficiaryOrg: "",
    projectName: "",
    projectId: 0,
    amount: 0,
    cardNumber: "",
    expiryDate: "",
    ccv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      let formattedValue = value.replace(/\D/g, "");
      let formatted = "";

      for (let i = 0; i < formattedValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formatted += " ";
        }
        formatted += formattedValue[i];
      }

      setFormData({
        ...formData,
        [name]: formatted,
      });
    } else if (name === "expiryDate") {
      let formattedValue = value.replace(/\D/g, "");

      if (formattedValue.length > 2) {
        formattedValue =
          formattedValue.substring(0, 2) + "/" + formattedValue.substring(2);
      }

      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phoneNumber,
      userId: user.id,
      beneficiaryOrg: project.organization_name,
      projectName: project.name,
      projectId: project.id,
      amount: formData.amount,
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      ccv: formData.ccv,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/donations/donations",
        donationData
      );
      console.log("تم إرسال التبرع بنجاح:", response.data);

      // SweetAlert success message
      Swal.fire({
        icon: "success",
        title: "تم استلام تبرعك بنجاح!",
        text: "شكراً لدعمك.",
        confirmButtonColor: "#2DAA9E",
      });
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال التبرع:", error);

      // SweetAlert error message
      Swal.fire({
        icon: "error",
        title: "حدث خطأ!",
        text: "عذرًا، حدث خطأ أثناء معالجة تبرعك. يرجى المحاولة مرة أخرى.",
        confirmButtonColor: "#FF4C4C",
      });
    }
  };

  const getCardNumberParts = () => {
    const parts = formData.cardNumber.split(" ");
    const result = [];

    for (let i = 0; i < 4; i++) {
      result.push(parts[i] || "xxxx");
    }

    return result;
  };

  if (!project) return <p>جارٍ تحميل بيانات المشروع...</p>;
  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">
          من فضلك قم بتسجيل الدخول لاتمام عمليه التبرع{" "}
        </p>
      </div>
    );

  return (
    <div className="bg-gray-100" dir="rtl" lang="ar">
      <div id="app">
        <main>
          <div className="bg-white rounded-lg ">
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                معلومات البطاقة البنكية
              </h3>

              <div
                className="relative w-full max-w-md h-60 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-400 text-white p-5 shadow-2xl mx-auto mb-6"
                style={{ fontFamily: "Tajawal, sans-serif" }}
              >
                <div className="absolute top-5 right-5 font-bold text-2xl">
                  VISA
                </div>
                <div className="w-12 h-10 bg-yellow-400 rounded-lg mb-5"></div>
                <div className="flex justify-between mb-5">
                  {getCardNumberParts().map((part, index) => (
                    <span key={index}>{part}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs uppercase opacity-70">
                      صاحب البطاقة
                    </div>
                    <div>
                      {user.firstName && user.lastName
                        ? `${user.firstName} ${user.lastName}`
                        : "اسم صاحب البطاقة"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase opacity-70">
                      تاريخ الإنتهاء
                    </div>
                    <div>{formData.expiryDate || "MM/YY"}</div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                أرقام البطاقة البنكية التي يجب إدخالها:
              </p>
              <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
                <li>رقم البطاقة: الرقم المكون من 16 خانة على وجه البطاقة</li>
                <li>تاريخ الانتهاء: MM/YY موجود على وجه البطاقة</li>
                <li>رمز الأمان CCV: الرقم المكون من 3 خانات على ظهر البطاقة</li>
              </ul>
            </div>

            <form id="donationForm" className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    الاسم الأول
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    required
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    الاسم الأخير
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    required
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    required
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    required
                    disabled
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="beneficiaryOrg"
                    className="block text-gray-700 font-medium mb-2 text-right"
                  >
                    الجمعية المستفيدة
                  </label>
                  <input
                    type="text"
                    id="beneficiaryOrg"
                    name="beneficiaryOrg"
                    value={project.organization_name}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className=" block text-gray-700 font-medium mb-2 "
                  >
                    اسم المشروع
                  </label>
                  <input
                    id="project"
                    name="project"
                    value={project.name}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    disabled
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    مبلغ التبرع
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    min="1"
                    value={formData.amount}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    رقم البطاقة البنكية
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="xxxx xxxx xxxx xxxx"
                    maxLength="19"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      تاريخ الانتهاء
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="MM/YY"
                      maxLength="5"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ccv"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      رمز الأمان (CCV)
                    </label>
                    <input
                      type="text"
                      id="ccv"
                      name="ccv"
                      placeholder="123"
                      maxLength="3"
                      value={formData.ccv}
                      onChange={handleChange}
                      className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2DAA9E]"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-[#2DAA9E] text-white py-3 px-6 rounded-md hover:bg-[#1E7269] transition duration-300 font-bold"
                >
                  تبرع الآن
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Payment;