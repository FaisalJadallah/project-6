import React, { useState, useEffect } from "react";
import { FileText, DollarSign } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2"; // إضافة SweetAlert2

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      console.error("No user data found");
    }
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("اسم المشروع مطلوب"),
    description: Yup.string().required("وصف المشروع مطلوب"),
    main_image: Yup.mixed().required("الصورة الرئيسية للمشروع مطلوبة"),
    youtubeUrl: Yup.string()
      .url("رابط الفيديو غير صحيح")
      .required("رابط الفيديو مطلوب"),
    photos: Yup.mixed().required("الصور الإضافية مطلوبة"),
    department: Yup.string().required("الفئة مطلوبة"),
    goal_amount: Yup.number()
      .required("المبلغ المطلوب مطلوب")
      .positive("المبلغ يجب أن يكون موجبًا"),
    organization_name: Yup.string().required("المنظمة الداعمة مطلوبة"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      main_image: null,
      youtubeUrl: "",
      photos: [],
      department: "",
      goal_amount: "",
      organization_name: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("goal_amount", values.goal_amount);
      formData.append("main_image", values.main_image);
      formData.append("department", values.department);
      formData.append("organization_name", values.organization_name);
      formData.append("youtubeUrl", values.youtubeUrl);
      formData.append("user_id", user.id);

      for (let i = 0; i < values.photos.length; i++) {
        formData.append("photos", values.photos[i]);
      }

      try {
        const response = await axios.post(
          "http://localhost:4000/api/addproject/add",
          formData,
          { withCredentials: true },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Project added successfully:", response.data);
        
        // عرض SweetAlert عند النجاح
        Swal.fire({
          title: "نجاح!",
          text: "شكرا لك ,سيتم مرجعه طلبك من قبل ادراة الموقع ومن ثم نشره ",
          icon: "success",
          confirmButtonText: "موافق",
        });
      } catch (error) {
        console.error("Error adding project:", error);
        // عرض SweetAlert عند حدوث خطأ
        Swal.fire({
          title: "خطأ!",
          text: "حدث خطأ أثناء إضافة المشروع.",
          icon: "error",
          confirmButtonText: "موافق",
        });
      }
    },
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          formik.values.name &&
          formik.values.description &&
          formik.values.main_image &&
          !formik.errors.name &&
          !formik.errors.description &&
          !formik.errors.main_image
        );
      case 2:
        return (
          formik.values.youtubeUrl &&
          formik.values.photos.length > 0 &&
          formik.values.department &&
          formik.values.organization_name &&
          !formik.errors.youtubeUrl &&
          !formik.errors.photos &&
          !formik.errors.department &&
          !formik.errors.organization_name
        );
      case 3:
        return formik.values.goal_amount && !formik.errors.goal_amount;
      default:
        return false;
    }
  };

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">من فضلك قم بتسجيل الدخول لكي تتمكن من اضافة مشروعك  </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl transition-all duration-300 ease-in-out transform hover:shadow-xl">
        {/* Steps Indicator */}
        <div className="flex justify-between items-center mb-8">
          <div
            className={`flex items-center ${step >= 1 ? "text-blue-500" : "text-gray-400"}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {step > 1 ? <span>✓</span> : <span>1</span>}
            </div>
            <span className="ml-2">تفاصيل المشروع</span>
          </div>
          <div
            className={`flex items-center ${step >= 2 ? "text-blue-500" : "text-gray-400"}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {step > 2 ? <span>✓</span> : <span>2</span>}
            </div>
            <span className="ml-2">معلومات إضافية</span>
          </div>
          <div
            className={`flex items-center ${step >= 3 ? "text-blue-500" : "text-gray-400"}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              <span>3</span>
            </div>
            <span className="ml-2">معلومات التبرع</span>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={formik.handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <FileText className="mr-2 text-green-500" /> تفاصيل المشروع
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  اسم المشروع
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل اسم المشروع"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  وصف المشروع
                </label>
                <textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="أدخل وصف المشروع"
                ></textarea>
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-red-500 text-sm">{formik.errors.description}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="main_image">
                  الصورة الرئيسية للمشروع
                </label>
                <input
                  type="file"
                  name="main_image"
                  onChange={(e) => formik.setFieldValue("main_image", e.currentTarget.files[0])}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept="image/*"
                />
                {formik.touched.main_image && formik.errors.main_image ? (
                  <div className="text-red-500 text-sm">{formik.errors.main_image}</div>
                ) : null}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <FileText className="mr-2 text-green-500" /> معلومات إضافية
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="youtubeUrl">
                  رابط فيديو يوتيوب
                </label>
                <input
                  type="url"
                  name="youtubeUrl"
                  value={formik.values.youtubeUrl}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل رابط فيديو يوتيوب"
                />
                {formik.touched.youtubeUrl && formik.errors.youtubeUrl ? (
                  <div className="text-red-500 text-sm">{formik.errors.youtubeUrl}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photos">
                  صور إضافية للمشروع
                </label>
                <input
                  type="file"
                  name="photos"
                  onChange={(e) => formik.setFieldValue("photos", e.currentTarget.files)}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept="image/*"
                  multiple
                />
                {formik.touched.photos && formik.errors.photos ? (
                  <div className="text-red-500 text-sm">{formik.errors.photos}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                  الفئة التابعة للمشروع
                </label>
                <select
                  name="department"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">اختر الفئة</option>
                  <option value="education">تعليم</option>
                  <option value="health">صحة</option>
                  <option value="environment">بيئة</option>
                  <option value="community">مجتمع</option>
                </select>
                {formik.touched.department && formik.errors.department ? (
                  <div className="text-red-500 text-sm">{formik.errors.department}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organization_name">
                  المنظمة الداعمة
                </label>
                <input
                  type="text"
                  name="organization_name"
                  value={formik.values.organization_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل اسم المنظمة"
                />
                {formik.touched.organization_name && formik.errors.organization_name ? (
                  <div className="text-red-500 text-sm">{formik.errors.organization_name}</div>
                ) : null}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <DollarSign className="mr-2 text-green-500" /> معلومات التبرع
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goal_amount">
                  المبلغ المطلوب
                </label>
                <input
                  type="number"
                  name="goal_amount"
                  value={formik.values.goal_amount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل المبلغ المطلوب"
                />
                {formik.touched.goal_amount && formik.errors.goal_amount ? (
                  <div className="text-red-500 text-sm">{formik.errors.goal_amount}</div>
                ) : null}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handlePrev}
              className="px-6 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
              disabled={step === 1}
            >
              الرجوع
            </button>
            <div>
              {step !== 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                  disabled={!isStepValid()}
                >
                  التالي
                </button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg"
                >
                  إرسال
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;