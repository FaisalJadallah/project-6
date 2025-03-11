// import React, { useEffect, useState } from "react";
// import { UserCircle } from "lucide-react";

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userData = localStorage.getItem("user");
//     if (userData) {
//       setUser(JSON.parse(userData));
//     } else {
//       console.error("No user data found");
//     }
//   }, []);

//   if (!user)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-xl text-gray-500">Loading profile...</p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
//       <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
//         <div className="flex flex-col items-center">
//           <UserCircle className="w-24 h-24 text-gray-600 mb-4" />

//           <h2 className="text-3xl font-bold text-gray-900 mb-2">
//             {user.firstName} {user.lastName}
//           </h2>
//           <p className="text-gray-600 text-lg mb-6">{user.email}</p>

//           <div className="w-full border-t border-gray-300 pt-4">
//             <h3 className="text-xl font-semibold text-gray-700 mb-3">
//               معلومات الحساب
//             </h3>
//             <div className="text-left text-gray-600">
//               <p className="mb-2">
//                 <strong>الاسم الأول:</strong> {user.firstName}
//               </p>
//               <p className="mb-2">
//                 <strong>اسم العائلة:</strong> {user.lastName}
//               </p>
//               <p className="mb-2">
//                 <strong>البريد الإلكتروني:</strong> {user.email}
//               </p>
//             </div>
//           </div>

//           <button
//             className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//             onClick={() => {
//               localStorage.removeItem("token");
//               localStorage.removeItem("user");
//               window.location.href = "/";
//             }}
//           >
//             تسجيل الخروج
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { UserCircle, Mail, User, LogOut, Edit, Clock, Shield } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = localStorage.getItem("user");
        if (userData) {
          setUser(JSON.parse(userData));
        } else {
          console.error("No user data found");
        }
      } finally {
        // Simulate a slight delay to show loading animation
        setTimeout(() => setIsLoading(false), 800);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-teal-600 flex justify-center items-center">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg text-gray-700">جاري تحميل الملف الشخصي...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-teal-600 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <UserCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">لم يتم العثور على بيانات المستخدم</h2>
          <p className="text-gray-600 mb-6">يرجى تسجيل الدخول مرة أخرى للوصول إلى ملفك الشخصي</p>
          <button
            onClick={() => window.location.href = "/login"}
            className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:opacity-90 transition"
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    );
  }

  // Calculate account age (placeholder for demo)
  const accountCreationDate = new Date(user.createdAt || Date.now() - 30*24*60*60*1000);
  const accountAge = Math.floor((Date.now() - accountCreationDate) / (24 * 60 * 60 * 1000));

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700 z-0">
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
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-10 h-10 bg-white opacity-10 rounded-full animate-float-delay"></div>
      </div>

      <div className="max-w-4xl w-full mx-auto z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with gradient banner */}
          <div className="h-40 bg-gradient-to-r from-teal-500 to-cyan-600 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 animate-pulse-slow"></div>
          </div>
          
          {/* Profile content */}
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Personal info */}
            <div className="w-full lg:w-1/3 px-6 py-8 border-b lg:border-b-0 lg:border-l border-gray-200 flex flex-col items-center">
              <div className="relative -mt-24 mb-6">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <UserCircle className="w-28 h-28 text-teal-600" strokeWidth={1.5} />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-500 mb-4 flex items-center justify-center">
                <Mail className="w-4 h-4 ml-1" /> {user.email}
              </p>
              
              <div className="flex flex-col space-y-4 w-full mt-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-teal-600 ml-2" />
                    <span className="text-gray-700">عمر الحساب</span>
                  </div>
                  <span className="text-gray-900 font-medium">{accountAge} يوم</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-teal-600 ml-2" />
                    <span className="text-gray-700">حالة الحساب</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">نشط</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Account details and actions */}
            <div className="w-full lg:w-2/3 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">معلومات الحساب</h3>
                <button className="flex items-center text-teal-600 hover:text-teal-800 transition-colors">
                  <Edit className="w-4 h-4 ml-1" />
                  تعديل
                </button>
              </div>
              
              <div className="space-y-4" dir="rtl">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:ml-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">الاسم الأول</label>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center">
                      <User className="w-5 h-5 text-gray-500 ml-2" />
                      <span>{user.firstName}</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="block text-gray-700 text-sm font-medium mb-2">اسم العائلة</label>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center">
                      <User className="w-5 h-5 text-gray-500 ml-2" />
                      <span>{user.lastName}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">البريد الإلكتروني</label>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 ml-2" />
                    <span>{user.email}</span>
                  </div>
                </div>
                
                {/* Additional user info can be added here */}
                {user.phone && (
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">رقم الهاتف</label>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      {user.phone}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap justify-end gap-3 mt-8">
                <button
                  className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => window.location.href = "/"}
                >
                  العودة للرئيسية
                </button>
                <button
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                  onClick={handleLogout}
                >
                  <LogOut className="w-4 h-4 ml-1" />
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
