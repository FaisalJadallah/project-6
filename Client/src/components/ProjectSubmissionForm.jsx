import { useState } from "react";
import axios from "axios";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    organization: "",
    // targetAmount: "",
    youtubeUrl: "",
    whySupport: "",
    photo1Url: "",
    photo2Url: "",
    photo3Url: "",
    photo4Url: "",
    photo5Url: "",
    photo6Url: "",
    photo7Url: "",
    photo8Url: "",
    adminapprove: false,
    isCompleted: false,
    targetAmount: 0,
    currentAmount: 0,
    supportAmount: 0,
    donorsCount: 0,
    progress: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/projects/addProject", formData, {
        headers: { "Content-Type": "application/json" }
      });
      console.log("Success:", response.data);
      alert("Project submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#248f83] py-6 px-8">
          <h2 className="text-3xl font-bold text-white text-center">تقديم مشروعك</h2>
          <p className="text-blue-100 text-center mt-2">أضف مشروعك الجديد ليتم دعمه من قبل المجتمع</p>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Project Information Section */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold  mb-4 border-b border-blue-200 pb-2">معلومات المشروع الأساسية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">عنوان المشروع</label>
                  <input 
                    type="text" 
                    name="title" 
                    placeholder="أدخل عنوان المشروع" 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">الفئة</label>
                  <input 
                    type="text" 
                    name="category" 
                    placeholder="فئة المشروع" 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">المنظمة الداعمة</label>
                  <input 
                    type="text" 
                    name="organization" 
                    placeholder="اسم المنظمة" 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">المبلغ المستهدف</label>
                  <input 
                    type="number" 
                    name="targetAmount" 
                    placeholder="أدخل المبلغ المستهدف" 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Media Section */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold  mb-4 border-b border-blue-200 pb-2">الوسائط المتعددة</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">رابط الصورة الرئيسية</label>
                  <input 
                    type="text" 
                    name="image" 
                    placeholder="أدخل رابط الصورة الرئيسية" 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">رابط فيديو يوتيوب</label>
                  <input 
                    type="text" 
                    name="youtubeUrl" 
                    placeholder="أدخل رابط فيديو يوتيوب" 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold  mb-4 border-b border-blue-200 pb-2">وصف المشروع</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">لماذا يجب دعم مشروعك؟</label>
                <textarea 
                  name="whySupport" 
                  placeholder="اشرح سبب أهمية دعم مشروعك" 
                  onChange={handleChange} 
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                  required 
                />
              </div>
            </div>

            {/* Additional Photos */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold  mb-4 border-b border-blue-200 pb-2">صور إضافية للمشروع</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">صورة {i + 1}</label>
                    <input 
                      type="text" 
                      name={`photo${i + 1}Url`} 
                      placeholder={`رابط الصورة ${i + 1}`} 
                      onChange={handleChange} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" 
                      required 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full py-4 px-6 bg-[#248f83] hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-200 transform hover:-translate-y-1"
              >
                تقديم المشروع
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                بالضغط على زر التقديم، أنت توافق على الشروط والأحكام
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;