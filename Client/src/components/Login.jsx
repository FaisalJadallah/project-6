// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Eye, EyeOff } from "lucide-react";

// const Login = () => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [credentials, setCredentials] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/users/login",
//         credentials
//       );

//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));

//       Swal.fire({
//         icon: "success",
//         title: "تم تسجيل الدخول!",
//         text: `مرحبًا بعودتك، ${response.data.user.firstName}`,
//       }).then(() => navigate("/"));
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "خطأ في تسجيل الدخول",
//         text: error.response?.data.message || "حدث خطأ في بيانات الدخول",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#2daa9e] flex items-center justify-center">
//       <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-xl">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           تسجيل الدخول في مشكاه
//         </h2>
//         <form onSubmit={handleSubmit} dir="rtl" className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="البريد الإلكتروني"
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="كلمة المرور"
//               onChange={handleChange}
//               className="input"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-[#2daa9e] text-white py-2 rounded"
//           >
//             {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           ليس لديك حساب؟{" "}
//           <Link to="/signup" className="text-[#2daa9e]">
//             إنشاء حساب
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        credentials
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      Swal.fire({
        icon: "success",
        title: "تم تسجيل الدخول!",
        text: `مرحبًا بعودتك، ${response.data.user.firstName}`,
      }).then(() => navigate("/"));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطأ في تسجيل الدخول",
        text: error.response?.data.message || "حدث خطأ في بيانات الدخول",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700  z-0">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(255, 255, 255, 0.1)"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                     M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                     M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(255, 255, 255, 0.05)"
            d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,186.7C672,192,768,224,864,218.7C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,186.7C672,192,768,224,864,218.7C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                     M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,90.7C672,85,768,139,864,165.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                     M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,186.7C672,192,768,224,864,218.7C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
        {/* Add floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-10 h-10 bg-white opacity-10 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10">
        {/* Left side - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">
            تسجيل الدخول في مشكاه
          </h2>
          <form onSubmit={handleSubmit} dir="rtl" className="space-y-5">
            <div>
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="كلمة المرور"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                required
              />
              <button
                type="button"
                className="absolute left-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="remember" className="mr-2 text-sm text-gray-600">
                  تذكرني
                </label>
              </div>
              <a href="#" className="text-sm text-teal-600 hover:text-teal-800">
                نسيت كلمة المرور؟
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-8 w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جاري تسجيل الدخول...
                </>
              ) : "تسجيل الدخول"}
            </button>

            <p className="mt-6 text-center text-gray-600">
              ليس لديك حساب؟{" "}
              <Link to="/signup" className="text-teal-600 hover:text-teal-800 font-medium">
                إنشاء حساب
              </Link>
            </p>
          </form>
        </div>

        {/* Right side - Banner */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-teal-500 to-cyan-600 p-10 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Animated decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-float-delay"></div>
          
          <h1 className="text-4xl font-bold mb-6 relative z-10">مرحباً بعودتك</h1>
          <p className="text-lg mb-8 opacity-90 relative z-10">
            سعداء برؤيتك مجدداً! قم بتسجيل الدخول للوصول إلى حسابك واستكشاف آخر التحديثات والمستجدات.
          </p>
          
          {/* Features list */}
          <div className="space-y-3 relative z-10">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
              <span>استكشف المحتوى المخصص لك</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
              <span>تابع آخر الفعاليات والأخبار</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
              <span>تفاعل مع المجتمع وشارك تجاربك</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Login;