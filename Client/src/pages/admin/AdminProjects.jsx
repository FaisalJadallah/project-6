import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Fetch all projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Function to fetch all projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/projects/AllProject"
      );
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error("❌ خطأ في جلب المشاريع:", error);
      setLoading(false);
    }
  };

  // Function to update project status
  const updateProjectStatus = async (projectId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:4000/api/projects/${projectId}/status`,
        {
          status: newStatus,
        }
      );
      // Refresh the project list after updating status
      fetchProjects();
      alert("تم تحديث حالة المشروع بنجاح");
    } catch (error) {
      console.error("❌ خطأ في تحديث حالة المشروع:", error);
      alert("فشل تحديث حالة المشروع");
    }
  };

  // Filter projects based on search term and selected filter
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === "all") return matchesSearch;
    if (filter === "active")
      return matchesSearch && project.status === "active";
    if (filter === "completed")
      return matchesSearch && project.status === "completed";
    if (filter === "funded")
      return matchesSearch && project.collected_amount >= project.goal_amount;

    return matchesSearch;
  });

  // Calculate statistics
  const totalProjects = projects.length;
  const totalFunding = projects.reduce(
    (sum, project) => sum + project.collected_amount,
    0
  );
  const completedProjects = projects.filter(
    (p) => p.collected_amount >= p.goal_amount
  ).length;

  const getProgressColor = (collected, goal) => {
    const percentage = (collected / goal) * 100;
    if (percentage >= 100) return "bg-green-500";
    if (percentage >= 75) return "bg-blue-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen mr-64">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          📂 قائمة المشاريع
        </h1>
        <p className="text-gray-600">إدارة ومراقبة جميع المشاريع الخيرية</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-r-4 border-indigo-500">
          <h3 className="text-gray-500 text-sm mb-1">إجمالي المشاريع</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">
              {totalProjects}
            </span>
          </div>
        </div>

        {/* <div className="bg-white rounded-lg shadow-md p-6 border-r-4 border-green-500">
          <h3 className="text-gray-500 text-sm mb-1">إجمالي التمويل</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">
              ${totalFunding.toLocaleString()}
            </span>
          </div>
        </div> */}

        <div className="bg-white rounded-lg shadow-md p-6 border-r-4 border-amber-500">
          <h3 className="text-gray-500 text-sm mb-1">المشاريع المكتملة</h3>
          <div className="flex items-end">
            <span className="text-3xl font-bold text-gray-800">
              {completedProjects}
            </span>
            <span className="text-gray-500 ml-2">من {totalProjects}</span>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="البحث عن مشروع..."
              className="block w-full pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-right"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4 rtl">
            <span className="text-gray-700 ml-2">تصفية:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "all"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                الكل
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "active"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                نشط
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "completed"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                مكتمل
              </button>
              <button
                onClick={() => setFilter("funded")}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === "funded"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                ممول بالكامل
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      {loading ? (
        <div className="text-center p-10">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          <p className="mt-3 text-gray-600">جاري تحميل المشاريع...</p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الاسم
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الوصف
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProjects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {project.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span
                      className={`px-2 py-1 text-sm font-semibold rounded-full ${
                        project.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {project.status === "pending" && (
                      <button
                        onClick={() =>
                          updateProjectStatus(project.id, "approved")
                        }
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                      >
                        الموافقة
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
