import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Homesql from "./pages/Home";
import ProjectCard from "./pages/projects";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/AboutUs";
import ContactForm from "./pages/contactus";
import CreateProject from "./pages/CreateProject";
import Profile from "./components/Profile";
import Payment from "./components/PaymentForm";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import Users from "./pages/admin/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDonations from "./pages/admin/AdminDonations";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminMessages from "./pages/admin/ِAdminMessages";
import AdminDashboard from "./pages/admin/AdminDashboard";

function Layout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Homesql />} />
        <Route path="/projects" element={<ProjectCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* 🔐 صفحات الإدارة محمية بـ `ProtectedRoute` */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="admindashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="admindonations" element={<AdminDonations />} />
            <Route path="adminprojects" element={<AdminProjects />} />
            <Route path="adminmessages" element={<AdminMessages />} />
          </Route>
        </Route>

        {/* ❌ إعادة التوجيه إذا حاول شخص دخول /dashboard بدون صلاحية */}
        <Route
          path="/dashboard"
          element={
            localStorage.getItem("adminRole") === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin-login" />
            )
          }
        />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
