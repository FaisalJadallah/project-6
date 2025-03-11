import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Payment from '../components/PaymentForm';
import { X } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [isModalOpen, setIsModalOpen] = useState(false); 


  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/projects/AllProject/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };
    fetchProjectDetails();
  }, [id]);

  if (!project) return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#2DAA9E] rounded-full animate-spin mb-3"></div>
        <div className="text-lg font-medium text-gray-600">جاري التحميل...</div>
      </div>
    </div>
  );

  // Calculate progress percentage
  const progressPercentage = (project.collected_amount / project.goal_amount) * 100;
  
  const photosArray = project.photos
  ? project.photos.map((photo) => `http://localhost:4000/${photo.replace(/\\/g, '/')}`) // تحويل المسار الكامل
  : []; 


  return (
    <div className="font-sans bg-white min-h-screen" dir="rtl">
      {/* Hero Section */}
      <div
  className="w-full py-16 bg-cover bg-center relative"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(238, 237, 237, 0.3)), url(${project.main_image})`,
  }}
>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="inline-flex items-center px-4 py-1.5 bg-green-50 text-[#2DAA9E] rounded-full text-sm font-medium ring-1 ring-green-200 mb-4">
              {project.department || "مشروع خيري"}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">{project.name}</h1>
            <p className="text-gray-500 flex items-center text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
              المؤسسة المسؤولة: <span className="font-semibold mr-1 text-gray-700">{project.organization_name}</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 max-w-6xl">      
        {/* Main Content and Donation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Media Section - Video or Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              {project.youtubeUrl ? (
                <div className="aspect-w-16 aspect-h-9 bg-black">
                  <iframe 
                    src={`https://www.youtube.com/embed/${project.youtubeUrl.split('v=')[1] || project.youtubeUrl.split('/').pop()}`}
                    className="w-full h-96"
                    allowFullScreen
                    title={project.title}
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full h-96 overflow-hidden">
                  <img 
                  src={`http://localhost:4000/${projectData.main_image}`}
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="border-b">
                <div className="flex">
                  <button
                    className={`relative py-4 px-6 font-medium text-base transition-colors ${
                      activeTab === 'details' 
                        ? 'text-[#2DAA9E] font-semibold' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('details')}
                  >
                    تفاصيل المشروع
                    {activeTab === 'details' && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DAA9E]"></span>
                    )}
                  </button>
                  <button
                    className={`relative py-4 px-6 font-medium text-base transition-colors ${
                      activeTab === 'photos' 
                        ? 'text-[#2DAA9E] font-semibold' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('photos')}
                  >
                    صور المشروع
                    {activeTab === 'photos' && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DAA9E]"></span>
                    )}
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'details' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 inline-flex items-center">
                      <span className="w-1.5 h-6 bg-[#2DAA9E] rounded-full inline-block ml-3"></span>
                      لماذا ادعم هذا المشروع؟
                    </h2>
                    <div className="prose max-w-none text-gray-600 leading-relaxed">
                      <p className="text-lg">{project.description || "لا يوجد وصف متاح لهذا المشروع."}</p>
                    </div>
                  </div>
                )}
    {activeTab === 'photos' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 inline-flex items-center">
                  <span className="w-1.5 h-6 bg-[#2DAA9E] rounded-full inline-block ml-3"></span>
                  صور المشروع
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photosArray.length > 0
                    ? photosArray.map((url, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-sm group relative">
                          <div className="aspect-w-4 aspect-h-3">
                            <img 
                              src={url} 
                              alt={`صورة ${index + 1}`} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      ))
                    : (
                      <div className="text-center text-gray-500">لا توجد صور إضافية</div>
                    )}
                </div>
              </div>
            )}
                {/* {activeTab === 'photos' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 inline-flex items-center">
                      <span className="w-1.5 h-6 bg-[#2DAA9E] rounded-full inline-block ml-3"></span>
                      صور المشروع
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[project.photo1Url, project.photo2Url, project.photo3Url, project.photo4Url, 
                        project.photo5Url, project.photo6Url, project.photo7Url, project.photo8Url]
                        .filter(url => url)
                        .map((url, index) => (
                          <div key={index} className="rounded-xl overflow-hidden shadow-sm group relative">
                            <div className="aspect-w-4 aspect-h-3">
                              <img 
                                src={url} 
                                alt={`صورة ${index + 1}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ))}
                        
                      {[project.photo1Url, project.photo2Url, project.photo3Url, project.photo4Url, 
                        project.photo5Url, project.photo6Url, project.photo7Url, project.photo8Url]
                        .filter(url => url).length < 2 && (
                          <div className="rounded-xl overflow-hidden bg-gray-50 aspect-w-4 aspect-h-3 border border-gray-100 flex items-center justify-center">
                            <div className="text-gray-400 flex flex-col items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>لا توجد صور إضافية</span>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
          
          {/* Donation Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-md sticky top-4">
              {/* Progress Status */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <div className="text-[#2DAA9E] font-bold text-3xl">${project.collected_amount}</div>
                  <div className="text-gray-400 text-sm">من ${project.goal_amount}</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-3 overflow-hidden">
                  <div 
                    className="bg-[#2DAA9E] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage > 100 ? 100 : progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    {project.donorsCount || 0} متبرع
                  </div>
                  <div className="bg-green-50 text-[#2DAA9E] px-2 py-0.5 rounded-full text-xs font-medium">
                    {Math.round(progressPercentage)}% من الهدف
                  </div>
                </div>
              </div>

              {/* Target Amount */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 mb-8 text-center">
                <div className="mb-2 text-gray-500 text-sm">إجمالي التمويل المطلوب</div>
                <div className="font-bold text-2xl text-gray-800">${project.goal_amount}</div>
              </div>

              {/* Donation Button */}
              <button 
            id="donate" 
            className="w-full bg-[#2DAA9E] text-white py-4 px-6 rounded-xl font-bold text-base hover:bg-[#2DAA9E] transition-all hover:shadow-lg group overflow-hidden relative"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              ادعم الآن
            </span>
            <span className="absolute inset-0 bg-[#2DAA9E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </button>
              
              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5 text-[#2DAA9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    دفع آمن
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5 text-[#2DAA9E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    شفافية كاملة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <payment/>
        {/* Bottom CTA Section */}
        <div className="bg-[#2DAA9E] p-12 rounded-2xl shadow-lg text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">كن جزءاً من التغيير الإيجابي</h3>
            <p className="text-white/90 mb-8 text-lg">
              بتبرعك اليوم، ستساهم في دعم هذا المشروع الحيوي وتحقيق أهدافه النبيلة. كل مساهمة، مهما كانت قيمتها، لها أثر كبير.
            </p>
            <a  
            className="inline-flex items-center bg-white text-[#2DAA9E] py-4 px-10 rounded-xl font-bold text-base hover:bg-green-50 transition-all hover:shadow-lg transform hover:-translate-y-1"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            ادعم الآن
          </a>
          </div>
          {/* Model */}
          {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-h-[80vh] w-[90%] sm:w-[50%] overflow-y-auto relative">
      <button 
        onClick={() => setIsModalOpen(false)} 
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
      >
        <X size={24} />
      </button>
      <Payment />
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
