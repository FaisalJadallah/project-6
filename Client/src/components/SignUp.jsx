// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Swal from "sweetalert2";
// import { Eye, EyeOff } from "lucide-react";
// import axios from "axios";

// const schema = yup.object({
//   firstName: yup.string().required("الاسم الأول مطلوب"),
//   lastName: yup.string().required("اسم العائلة مطلوب"),
//   email: yup
//     .string()
//     .email("بريد إلكتروني غير صالح")
//     .required("البريد الإلكتروني مطلوب"),
//     phoneNumber: yup.string().required("رقم الجوال مطلوب"),
//   password: yup
//     .string()
//     .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
//     .required("كلمة المرور مطلوبة"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "كلمات المرور غير متطابقة")
//     .required("تأكيد كلمة المرور مطلوب"),
// });

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/users/register",
//         data
//       );
//       Swal.fire({
//         icon: "success",
//         title: "تم إنشاء الحساب!",
//         text: response.data.message || "تم إنشاء حسابك بنجاح",
//         confirmButtonText: "تسجيل الدخول",
//       }).then(() => navigate("/login"));
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "خطأ في التسجيل",
//         text:
//           error.response?.data?.message ||
//           "حدث خطأ أثناء التسجيل، حاول مرة أخرى",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#2daa9e] flex items-center justify-center">
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">
//         <div className="w-full md:w-1/2 bg-[#2daa9e] p-10 text-white flex flex-col justify-center">
//           <h1 className="text-5xl font-bold mb-4">مرحبًا بكم في مشكاه</h1>
//           <p className="text-lg">انضم إلى منصة مشكاه واستكشف آخر المستجدات.</p>
//         </div>

//         <div className="w-full md:w-1/2 p-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">
//             إنشاء حساب في مشكاه
//           </h2>
//           <form onSubmit={handleSubmit(onSubmit)} dir="rtl">
//             <input
//               {...register("firstName")}
//               placeholder="الاسم الأول"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
//             />
//             {errors.firstName && (
//               <p className="text-red-600">{errors.firstName.message}</p>
//             )}

//             <input
//               {...register("lastName")}
//               placeholder="اسم العائلة"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
//             />
//             {errors.lastName && (
//               <p className="text-red-600">{errors.lastName.message}</p>
//             )}

//             <input
//               {...register("email")}
//               placeholder="البريد الإلكتروني"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
//             />
//             {errors.email && (
//               <p className="text-red-600">{errors.email.message}</p>
//             )}

//             <input
//               {...register("phoneNumber")}
//               placeholder="رقم الجوال"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
//             />
//             {errors.phoneNumber && (
//               <p className="text-red-600">{errors.phoneNumber.message}</p>
//             )}

//             <div className="relative mb-4">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 {...register("password")}
//                 placeholder="كلمة المرور"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               />
//               <button
//                 type="button"
//                 className="absolute left-3 top-3 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-red-600">{errors.password.message}</p>
//             )}

//             <input
//               type="password"
//               {...register("confirmPassword")}
//               placeholder="تأكيد كلمة المرور"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-600">{errors.confirmPassword.message}</p>
//             )}

//             <button
//               disabled={isLoading}
//               className="mt-6 w-full bg-[#2daa9e] text-white py-2 rounded-lg hover:bg-[#278e83]"
//             >
//               {isLoading ? "جارٍ الإنشاء..." : "إنشاء الحساب"}
//             </button>

//             <p className="mt-6 text-center">
//               لديك حساب بالفعل؟{" "}
//               <Link to="/login" className="text-[#2daa9e]">
//                 تسجيل الدخول
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const schema = yup.object({
  firstName: yup.string().required("الاسم الأول مطلوب"),
  lastName: yup.string().required("اسم العائلة مطلوب"),
  email: yup
    .string()
    .email("بريد إلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  phoneNumber: yup.string().required("رقم الجوال مطلوب"),
  password: yup
    .string()
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "كلمات المرور غير متطابقة")
    .required("تأكيد كلمة المرور مطلوب"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        data
      );
     
      Swal.fire({
        icon: "success",
        title: "تم إنشاء الحساب!",
        text: response.data.message || "تم إنشاء حسابك بنجاح",
        confirmButtonText: "تسجيل الدخول",
      }).then(() => navigate("/login"));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطأ في التسجيل",
        text:
          error.response?.data?.message ||
          "حدث خطأ أثناء التسجيل، حاول مرة أخرى",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-700 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">
        {/* Right side - Banner */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-teal-500 to-cyan-600 p-10 text-white flex flex-col justify-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
     

          <h1 className="text-4xl font-bold mb-6 relative z-10">مرحبًا بكم في مشكاه</h1>
          <p className="text-lg mb-8 opacity-90 relative z-10">انضم إلى منصة مشكاه واستكشف آخر المستجدات والتطورات في عالم التقنية والابتكار.</p>
        {/* Features list */}
<div className="space-y-3 relative z-10 text-left">
  <div className="flex items-center hover:text-gray-300 transition duration-300">
    <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
    <span className="font-bold">تصفح أحدث المقالات والأخبار</span>
  </div>
  <div className="flex items-center hover:text-gray-300 transition duration-300">
    <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
    <span className="font-bold">تواصل مع المتخصصين في المجال</span>
  </div>
  <div className="flex items-center hover:text-gray-300 transition duration-300">
    <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
    <span className="font-bold">احصل على تحديثات دورية مخصصة</span>
  </div>
</div>
</div>


        {/* Left side - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">
            إنشاء حساب جديد
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} dir="rtl" className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  {...register("firstName")}
                  placeholder="الاسم الأول"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>
              
              <div className="flex-1">
                <input
                  {...register("lastName")}
                  placeholder="اسم العائلة"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("phoneNumber")}
                placeholder="رقم الجوال"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="كلمة المرور"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              <button
                type="button"
                className="absolute left-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="تأكيد كلمة المرور"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              <button
                type="button"
                className="absolute left-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              disabled={isLoading}
              className="mt-8 w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جارٍ الإنشاء...
                </>
              ) : "إنشاء الحساب"}
            </button>

            <p className="mt-6 text-center text-gray-600">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" className="text-teal-600 hover:text-teal-800 font-medium">
                تسجيل الدخول
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
