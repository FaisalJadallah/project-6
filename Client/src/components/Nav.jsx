// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";
// import logo from "../assets/img/logonav.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, [location]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setIsAuthenticated(false);
//     navigate("/login");
//   };

//   const handleDropdownChange = (event) => {
//     const selectedPath = event.target.value;
//     if (selectedPath) {
//       navigate(selectedPath);
//     }
//   };

//   const navItems = [
//     { name: "الرئيسية", path: "/" },
//     { name: "المشاريع", path: "/projects" },
//     { name: "من نحن", path: "/About" },
//     { name: "اتصل بنا", path: "/Contact" },
//   ];

//   return (
//     <nav className="shadow-lg bg-[#EAEAEA]" dir="rtl">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <img
//               src={logo}
//               alt="شعار"
//               className="h-14 hover:scale-105 transition-transform duration-300"
//             />
//           </div>

//           <div className="hidden md:flex items-center space-x-12">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="text-[#2DAA9E] p-2 rounded-lg hover:bg-[#66D2CE] hover:text-white transition-colors duration-300"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {isAuthenticated ? (
//               <>
//                 <Link
//                   to="/profile"
//                   className="bg-[#2DAA9E] text-white px-4 py-2 rounded hover:bg-[#66D2CE] transition-colors duration-300"
//                 >
//                   الملف الشخصي
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 >
//                   تسجيل الخروج
//                 </button>
//               </>
//             ) : (
//               <select
//                 onChange={handleDropdownChange}
//                 className="bg-[#2DAA9E] text-white font-semibold py-2 px-4 rounded-lg cursor-pointer"
//               >
//                 <option value="">التسجيل</option>
//                 <option value="/login">تسجيل الدخول</option>
//                 <option value="/signup">إنشاء حساب</option>
//               </select>
//             )}
//           </div>

//           <button onClick={toggleMenu} className="md:hidden text-gray-700">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden bg-white py-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="block px-4 py-2 text-[#2DAA9E] hover:bg-[#66D2CE] hover:text-white transition-colors duration-300"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             <div className="px-4 py-2">
//               {isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/profile"
//                     className="block w-full bg-[#2DAA9E] text-white py-2 rounded mb-2 hover:bg-[#66D2CE] transition-colors duration-300 text-center"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     الملف الشخصي
//                   </Link>
//                   <button
//                     onClick={() => {
//                       handleLogout();
//                       setMenuOpen(false);
//                     }}
//                     className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
//                   >
//                     تسجيل الخروج
//                   </button>
//                 </>
//               ) : (
//                 <select
//                   onChange={handleDropdownChange}
//                   className="w-full bg-[#2DAA9E] text-white py-2 px-4 rounded-lg cursor-pointer"
//                 >
//                   <option value="">التسجيل</option>
//                   <option value="/login">تسجيل الدخول</option>
//                   <option value="/signup">إنشاء حساب</option>
//                 </select>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import logo from "../assets/img/logonav.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleDropdownChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "المشاريع", path: "/projects" },
    { name: "من نحن", path: "/About" },
    { name: "اتصل بنا", path: "/Contact" },
  ];

  return (
    <nav className="shadow-lg bg-[#EAEAEA]" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src={logo}
              alt="شعار"
              className="h-14 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-12 ml-60">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[#2DAA9E] p-2 rounded-lg hover:bg-[#66D2CE] hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="bg-[#2DAA9E] text-white px-4 py-2 rounded hover:bg-[#66D2CE] transition-colors duration-300"
                >
                  الملف الشخصي
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <div className="relative w-48"> {/* عرض ثابت */}
              <select
                onChange={handleDropdownChange}
                className="bg-[#2DAA9E] text-white font-bold py-2 pr-8 pl-3 rounded-full 
                           shadow-md hover:bg-[#2DAA9E] transition-colors duration-300
                           border-2 border-dashed border-[#2DAA9E]  border-opacity-40
                           appearance-none w-full text-sm"
              >
                <option value="">التسجيل</option>
                <option value="/login">تسجيل الدخول</option>
                <option value="/signup">إنشاء حساب</option>
              </select>
            
              {/* أيقونة السهم للأسفل داخل الزر في اليسار */}
              <div className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white text-md pointer-events-none">
                ▼
              </div>
            </div>
            )}
          </div>

          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-[#2DAA9E] hover:bg-[#66D2CE] hover:text-white transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-4 py-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="block w-full bg-[#2DAA9E] text-white py-2 rounded mb-2 hover:bg-[#66D2CE] transition-colors duration-300 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    الملف الشخصي
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-[#66D2CE]"
                  >
                    تسجيل الخروج
                  </button>
                </>
              ) : (
                <div className="relative w-48"> {/* عرض ثابت */}
              <select
                onChange={handleDropdownChange}
                className="bg-[#2DAA9E] text-white font-bold py-2 pr-8 pl-3 rounded-full 
                           shadow-md hover:bg-[#2DAA9E] transition-colors duration-300
                           border-2 border-dashed border-[#2DAA9E]  border-opacity-40
                           appearance-none w-full text-sm"
              >
                <option value="">التسجيل</option>
                <option value="/login">تسجيل الدخول</option>
                <option value="/signup">إنشاء حساب</option>
              </select>
            
              {/* أيقونة السهم للأسفل داخل الزر في اليسار */}
              <div className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white text-md pointer-events-none">
                ▼
              </div>
            </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;