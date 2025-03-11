import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react"; // تأكد من تثبيت حزمة lucide-react إذا كنت تستخدمها
const videoId = "U2c_Ds0JaZo";

const images = [
    "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6994807/pexels-photo-6994807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6995092/pexels-photo-6995092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Homesql = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // تغيير كل 3 ثواني
        return () => clearInterval(interval);
    }, []);

    // بيانات المشاريع الخيرية
    const charityProjects = [
        {
            id: 1,
            title: "حملة الاستجابة الطارئة فريق إنقاذ غزة (GRT)",
            image: "https://i.pinimg.com/736x/69/d7/92/69d792b40984fbfd8e809c7030287b46.jpg",
            category: "حملة الاستجابة الطارئة فريق إنقاذ  (GRT)",
            organization: "مؤسسة حياة للأطفال",
            location: "فلسطين",
            flag: "https://placehold.co/60x40/000/FFF",
            targetAmount: 35000,
            currentAmount: 20192,
            supportAmount: 14808,
            donorsCount: 203,
            progress: 42.3,
        },
        {
            id: 2,
            title: "أفريقيا",
            image: "https://i.pinimg.com/736x/5e/2f/53/5e2f5360ab64039e7a269e6d9adc3350.jpg",
            category: "توفير المصحف الشريف للمحتاجين  ",
            organization: "جمعية النور لخدمة القرآن الكريم",
            location: "تشاد",
            flag: "https://placehold.co/60x40/000/FFF",
            targetAmount: 5029,
            currentAmount: 0,
            supportAmount: 5029,
            donorsCount: 172,
            progress: 100,
            isCompleted: true,
        },
        {
            id: 3,
            title: "غزة",
            image: "https://i.pinimg.com/736x/22/ba/24/22ba24c0100b46b64d854e58b076cb0d.jpg",
            category: "كفالة 500 يتيم في غزة",
            organization: "معهد الأمل للأيتام",
            location: "فلسطين",
            flag: "https://placehold.co/60x40/000/FFF",
            targetAmount: 25000,
            currentAmount: 22715,
            supportAmount: 2285,
            donorsCount: 33,
            progress: 9.1,
        },
        {
            id: 4,
            title: "غزة",
            image: "https://i.pinimg.com/736x/79/15/9e/79159e2c231fa3cfefce38c0a47a817d.jpg",
            category: "حملة موائد إفطار الصائمين  ",
            organization: "جمعية تجسير الخير العالمية",
            location: "فلسطين",
            flag: "https://placehold.co/60x40/000/FFF",
            targetAmount: 20000,
            currentAmount: 19730,
            supportAmount: 270,
            donorsCount: 6,
            progress: 1.4,
        },
    ];


    const ConsultationSection = () => {
        return (
            <div className="relative w-full h-[400px] pt-32 pb-20 bg-gray-50" dir="rtl">
                {/* Wavy Top Border using Tailwind only */}
                <div
                    className="absolute top-0 left-0 right-0 h-24 bg-white"
                    style={{
                        borderBottomLeftRadius: '50% 60%',
                        borderBottomRightRadius: '50% 60%',
                    }}
                ></div>

                {/* Decorative Elements - Using Tailwind classes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                    <div className="absolute top-1/4 left-1/6 text-8xl font-bold transform rotate-12">T</div>
                    <div className="absolute top-1/3 left-1/2 text-8xl font-bold transform -rotate-45">T</div>
                    <div className="absolute top-1/2 left-1/4 text-8xl font-bold transform rotate-90">T</div>
                    <div className="absolute top-3/4 left-3/4 text-8xl font-bold transform -rotate-12">T</div>
                    <div className="absolute top-1/6 left-4/5 text-8xl font-bold transform rotate-45">T</div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 p-30px">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        {/* Content Section */}
                        <div className="w-full md:w-2/3 text-right mt-10 mr-10">
                            <h2 className="text-5xl md:text-4xl font-bold text-gray-800 mb-4">
                                استشارة مجانية
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                تحرص منصة مشكاة على استقبال اقتراحاتكم أو أي شكوى
                                <br className="hidden md:block" />
                                بصفة مستمرة ودورية وحلها بأسرع وقت ممكن وعلى أكمل وجه
                            </p>
                        </div>

                        {/* Button */}
                        <div className="mt-20 ">
                        <a href="/Contact">
                            <button className="bg-[#248f83] hover:bg-[#248f83] text-white py-3 px-10 rounded-full text-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                تواصل معنا
                            </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Wavy Effect at Bottom of Content */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style={{
                    borderTopLeftRadius: '30% 100%',
                    borderTopRightRadius: '70% 100%',
                }}></div>
            </div>
        );
    };


    const WhyTasharukiSection = () => {
        const features = [
            {
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                        <circle cx="8" cy="18" r="2" />
                        <circle cx="8" cy="12" r="2" />
                        <circle cx="8" cy="6" r="2" />
                        <path d="M12 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8" />
                        <path d="M15 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0" />
                        <path d="M16 10v3a1 1 0 0 0 1 1h3" />
                    </svg>
                ),
                title: 'بيت الخبرة في التمويل الجماعي'
            },
            {
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15 15 0 0 1 6 1.5v13a15 15 0 0 0-6 1.5a15 15 0 0 0-6-1.5v-13A15 15 0 0 1 12 2z" />
                        <path d="M12 6L9 9l3 3 3-3-3-3z" />
                    </svg>
                ),
                title: 'تمويل مؤسسات العمل الإنساني'
            },
            {
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                        <path d="M16 13l-4 4-4-4" />
                        <path d="M8 13h8" />
                    </svg>
                ),
                title: 'بيئة للريادة المجتمعية'
            },
            {
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
                        <path d="M2 17h20" />
                    </svg>
                ),
                title: 'أحدث تقنيات التكنولوجيا المالية'
            },
            {
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                        <path d="M12 1v22" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                ),
                title: 'التبرع بطرق دفع إلكتروني آمنة'
            },
        ];

        return (
            <div className="w-full bg-white py-16 px-4" dir="rtl">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title */}
                    <div className="text-center mb-30">
                        <h2 className="text-4xl font-bold text-gray-800">لماذا منصة مشكاة؟</h2>
                        <div className="w-24 h-1 bg-[#248f83] mx-auto mt-4"></div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 hover:text-[#248f83] mb-25">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center hover:text-[#248f83]  transition-all duration-300">
                                <div className="mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2 ">{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };



    // تعريف المكون SuccessStoryCard
    const SuccessStoryCard = ({ id, image, title, description }) => {
        const [isExpanded, setIsExpanded] = useState(false); // حالة عرض النص الكامل
        const navigate = useNavigate();

        return (
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg w-[500px] h-[500px] transition-shadow duration-300">
                {/* الصورة مع تأثير هاڤر */}
                <div className="relative overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-65 object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* النص */}
                <div className="p-6 text-2xl text-end">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-700 ">
                        {isExpanded ? description : `${description.slice(0, 100)}...`} {/* عرض جزء من النص أو النص الكامل */}
                    </p>

                    {/* زر "اقرأ المزيد" */}
                    <button
                        onClick={() => navigate(`/story/${id}`)} // الانتقال لصفحة التفاصيل
                        className="text-blue-600 hover:text-blue-800 mt-2 cursor-pointer"
                    >
                        اقرأ المزيد
                    </button>
                </div>
            </div>
        );
    };

    // تعريف المكون الرئيسي لعرض قائمة البطاقات
    const SuccessStoriesList = () => {
        // بيانات القصص (يمكن استبدالها ببيانات من API أو قاعدة بيانات)
        const stories = [
            {
                id: 1,
                image: "https://images.pexels.com/photos/8068256/pexels-photo-8068256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "قصة علي في ريادة الأعمال ",
                description: "هذه هي قصة النجاح الأولى التي تحكي عن تحقيق الأهداف.",
            },
            {
                id: 2,
                image: "https://images.pexels.com/photos/6205769/pexels-photo-6205769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "قصة النجاح الثانية",
                description: "هذه هي قصة النجاح الثانية التي تحكي عن التحديات والإنجازات.",
            },
            {
                id: 2,
                image: "https://images.pexels.com/photos/4173278/pexels-photo-4173278.jpeg",
                title: "قصة النجاح الثانية",
                description: "هذه هي قصة النجاح الثانية التي تحكي عن التحديات والإنجازات.",
            },

            {
                id: 2,
                image: "https://images.pexels.com/photos/5641839/pexels-photo-5641839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                title: "قصة النجاح الثانية",
                description: "هذه هي قصة النجاح الثانية التي تحكي عن التحديات والإنجازات.",
            },
            // يمكنك إضافة المزيد من القصص هنا
        ];

        return (
          <div className="flex flex-wrap justify-center gap-6 md:flex-row flex-col">
            <div className="flex flex-nowrap gap-10  p-4 overflow-auto">
                {stories.map((story) => (
                    <SuccessStoryCard
                        key={story.id} // استخدام الـ id كـ key
                        id={story.id} // تمرير الـ id كـ prop
                        image={story.image}
                        title={story.title}
                        description={story.description}
                    />
                ))}
            </div>
            </div>
        );
    };



    return (
      <div>
        {/* قسم الصور المتحركة (HeroSection) */}
        <div className="relative bg-white flex items-center justify-center  w-full h-[700px] overflow-hidden">
          {/* صورة الخلفية */}
          <div className="absolute inset-0 w-full h-full ">
            <img
              src={images[currentImage]}
              alt="تمويل جماعي"
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
          </div>

          {/* الشريط النصي */}
          <div
            className="absolute inset-x-0  inset-0 flex items-center justify-center top-1/3 text-white py-20 px-8 text-center w-full h-[200px] flex flex-col gap-4"
            style={{ backgroundColor: "rgba(45, 170, 158, 0.6)" }} // 0.6 = 60% شفافية
          >
            <h1 className="text-1xl md:text-4xl font-bold">
              ساهم في بناء مجتمعنا
            </h1>
            <h1 className="text-1xl md:text-4xl font-bold">
              من خلال منصة مشكاة وكن جزءًا من التغيير
            </h1>
          </div>

          {/* تصميم الهرسكشن السفلي على شكل X */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-white clip-path-x"></div>

          {/* الأزرار أسفل القسم */}
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex gap-4 ">
            <a href="/projects">
              <button className="bg-[#2DAA9E] text-white py-1 px-8 rounded-lg text-lg font-semibold hover:bg-[#248f83] transition-colors duration-300">
                ساهم الآن
              </button>
            </a>
            <a href="/CreateProject">
              <button className="bg-white text-[#2DAA9E] py-1 px-8 rounded-lg text-lg font-semibold border-2 border-[#2DAA9E] hover:bg-[#2DAA9E] hover:text-white transition-colors duration-300">
                ابدأ رحلتك
              </button>
            </a>
          </div>

          <style jsx>{`
            .clip-path-x {
              clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
            }
          `}</style>
        </div>

        {/* قسم حملات المشاريع (CampaignSection) */}
        <div className="flex flex-col items-center text-center my-8 font-bold">
          <h1 className="text-3xl mb-2 text-gray-800">حملات المشاريع</h1>
          <h2 className="text-xl mb-4 text-gray-600">دعمك يبني المجتمعات</h2>
          <div className="w-32 h-1 bg-[#2DAA9E] rounded"></div>
        </div>

        {/* عرض الكاردات */}
        <div className="flex flex-wrap justify-center  bg-white gap-0 ">
          {charityProjects.map((project) => (
            <CharityCard
              key={project.id}
              title={project.title}
              image={project.image}
              category={project.category}
              organization={project.organization}
              location={project.location}
              flag={project.flag}
              targetAmount={project.targetAmount}
              currentAmount={project.currentAmount}
              supportAmount={project.supportAmount}
              donorsCount={project.donorsCount}
              progress={project.progress}
              isCompleted={project.isCompleted}
            />
          ))}
        </div>

        <div className="flex justify-center items-center m-10 ">
          <a href="/projects">
            <button
              className="px-8 py-3 bg-gray-100 text-[#2DAA9E] border-2 border-[#2DAA9E] rounded-full text-lg font-medium hover:bg-gray-200 transition duration-300"
              dir="rtl"
            >
              المزيد من المشاريع
            </button>
          </a>
        </div>

        {/* القسم الجديد (الفيديو والنص) */}
        <div className="w-full bg-white p-10 font-sans mt-30 " dir="rtl">
          <div className="w-full mx-auto justify-around flex flex-col md:flex-row gap-8 ">
            {/* Text Section */}
            <div className="w-full md:w-1/3 text-start ">
              {" "}
              {/* تم تغيير text-start إلى text-end */}
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                كيف تعمل منصة مشكاة
              </h2>
              <p className="text-2xl mb-6 leading-relaxed text-gray-700">
                لأن مساهمتك تنهض بالمجتمعات توفر منصة مشكاة للتمويل الجماعي
                أساليب وطرق ملائمة تسهل لك دعم المشاريع الخيرية والمبادرات
                الانسانية من الإغاثة في حالات الكوارث إلى التعليم والاستدامة،
                كما تقدم مشكاة رحلة تمويل سلسة تبدأ بخطوات معدودة تقوم من خلالها
                الجمعيات بطلب التمويل.
              </p>
              <button
                onClick={() => {
                  setIsPlaying(true);
                  // Scroll to video if needed
                  document
                    .querySelector(".video-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex  text-2xl items-center text-[#2DAA9E] hover:text-[#2DAA9E] mt-4 cursor-pointer"
              >
                <Play size={20} className="mr-2" />{" "}
                {/* تم تغيير ml-2 إلى mr-2 */}
                شاهد آلية عمل منصة مشكاة
              </button>
            </div>

            {/* Video Section */}
            <div className="max-w-3xl md:w-2/3 relative rounded-xl overflow-hidden shadow-lg aspect-video ">
              {!isPlaying ? (
                // Video Thumbnail with Play Button
                <div className="relative w-full h-full">
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="كيف تعمل منصة تشاركي للتمويل الجماعي"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                    <button
                      className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play size={32} color="white" />
                    </button>
                  </div>
                  <div className="absolute top-4 start-4 text-white text-sm bg-black bg-opacity-50 p-1 rounded">
                    كيف تعمل منصة مشكاة
                  </div>
                  <div className="absolute bottom-4 end-4 text-white text-lg">
                    CrowdFunding
                  </div>
                </div>
              ) : (
                // Embedded YouTube iframe
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="كيف تعمل منصة تشاركي للتمويل الجماعي"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* قسم قصص النجاح */}
          
          <div className="w-full bg-white py-12 gap-5 mt-30" dir="rtl">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              {/* العنوان */}
              <div className="flex flex-col items-center text-center my-8 font-bold mb-20">
                <h1 className="text-3xl mb-2 text-gray-800"> قصص النجاح</h1>
                <h2 className="text-xl mb-4 text-gray-600">
                  دعمك يبني المجتمعات
                </h2>
                <div className="w-32 h-1 bg-[#2DAA9E] rounded"></div>
              </div>

              {/* البطاقات */}
              <div className="w-full">
                <SuccessStoriesList /> {/* عرض قائمة قصص النجاح هنا */}
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* محتوى الصفحة الأخرى */}
          <WhyTasharukiSection />
        </div>

        <div>
          {/* محتوى الصفحة الأخرى */}
          <ConsultationSection />
        </div>
      </div>
    );
};

// مكون الكارد
const CharityCard = ({
    title,
    image,
    category,
    organization,
    location,
    targetAmount,
    currentAmount,
    supportAmount,
    donorsCount,
    progress,
    isCompleted = false,
    flag,
}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md m-10 w-85">
            {/* صورة المشروع */}
            <div className="relative">
                <img src={image} alt={title} className="w-full h-60 object-cover" />

                {/* أيقونة المفضلة */}
                <button className="absolute top-2 right-2 z-10">
                    <div className="text-red-500 text-2xl"></div>
                </button>

                {/* شعارات المنظمات */}
                <div className="absolute top-2 left-2 flex">

                </div>

                {/* عنوان المشروع */}
                <div className="absolute bottom-0 right-0 left-0 bg-[#2DAA9E] bg-opacity-50 px-3 py-2">
                    <h3 className="text-white text-lg font-bold text-right">{title}</h3>
                </div>
            </div>

            {/* معلومات المشروع */}
            <div className="p-3">
                <p className="text-gray-800 text-sm mb-1 text-right">{organization}</p>
                <h3 className="text-lg font-bold mb-3 text-right">{category}</h3>

                {/* معلومات المكان والمتبرعين */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                        <span className="text-gray-700 text-sm">{donorsCount} متبرعين</span>
                    </div>
                    <div className="flex items-center">
                        <img src={flag} alt={location} className="w-6 h-4 ml-1" />
                        <span className="text-gray-700 text-sm">{location}</span>
                    </div>
                </div>

                {/* شريط التقدم */}
                <div className="h-2 bg-gray-200 rounded-full mb-3">
                    <div
                        className="h-2 rounded-full bg-green-600"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* معلومات التبرع */}
                <div className="flex justify-between mb-3">
                    <div className="text-left">
                        <p className="text-xs text-gray-500">المتبقي</p>
                        <p className="text-sm font-bold">${currentAmount.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500">الدعم</p>
                        <p className="text-sm font-bold">${supportAmount.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-500">قيمة المشروع</p>
                        <p className="text-sm font-bold">${targetAmount.toLocaleString()}</p>
                    </div>
                </div>

                {/* زر التبرع */}
                <button
                    className={`w-full rounded-md py-2 px-4 text-center ${isCompleted ? "bg-red-700" : "bg-green-700"
                        } text-white font-bold`}
                >
                    {isCompleted ? "مكتمل" : "ادعم الآن"}
                </button>
            </div>


        </div>


    );
};

export default Homesql;