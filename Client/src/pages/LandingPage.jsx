import React from "react";
import {
  Rocket,
  Users,
  CheckCircle,
  Heart,
  ArrowRight,
  FileText,
  Smile,
  Shield,
  Info,
  HelpCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const ProjectIntroPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-32 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            أنشئ مشروعك وساعد في تغيير حياة الآخرين!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl mb-8"
          >
            من خلال هذه المنصة، يمكنك إنشاء مشروعك الخاص والحصول على الدعم
            المالي من المجتمع.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            href="/create-project"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center mx-auto w-48"
          >
            ابدأ الآن <ArrowRight className="ml-2" />
          </motion.a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-90"></div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            فوائد إنشاء المشروع
          </h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-start space-x-6"
            >
              <div className="bg-blue-100 p-4 rounded-full">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">الدعم المالي</h3>
                <p className="text-gray-600">
                  احصل على التمويل اللازم لتنفيذ مشروعك. نحن نقدم منصة آمنة
                  وشفافة لجمع التبرعات من المجتمع.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start space-x-6"
            >
              <div className="bg-blue-100 p-4 rounded-full">
                <Smile className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">تأثير إيجابي</h3>
                <p className="text-gray-600">
                  ساهم في حل مشكلة مجتمعية أو تحسين حياة الآخرين. مشروعك يمكن أن
                  يكون بداية لتغيير حقيقي.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-start space-x-6"
            >
              <div className="bg-blue-100 p-4 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">مجتمع داعم</h3>
                <p className="text-gray-600">
                  تواصل مع أشخاص يهتمون بنفس القضايا. نحن نقدم لك منصة للتواصل
                  مع المتبرعين والداعمين.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            خطوات إنشاء المشروع
          </h2>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                الخطوة 1: البيانات الشخصية
              </h3>
              <p className="text-gray-600">
                املأ بياناتك الشخصية مثل الاسم الكامل، البريد الإلكتروني، ورقم
                الهاتف. هذه المعلومات تساعدنا في التواصل معك.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                الخطوة 2: تفاصيل المشروع
              </h3>
              <p className="text-gray-600">
                أضف تفاصيل مشروعك مثل الاسم، الوصف، والصور. هذه التفاصيل تساعد
                المتبرعين على فهم مشروعك بشكل أفضل.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                الخطوة 3: معلومات التبرع
              </h3>
              <p className="text-gray-600">
                قدم معلومات التبرع مثل المبلغ المطلوب والحساب البنكي. هذه
                المعلومات تساعدنا في ضمان وصول التبرعات بشكل آمن.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Ask Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            لماذا نطلب هذه المعلومات؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">البيانات الشخصية</h3>
              <p className="text-gray-600">
                نطلب بياناتك الشخصية مثل الاسم والبريد الإلكتروني ورقم الهاتف
                علشان نضمن التواصل معك بسهولة ونؤكد هويتك.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 p-4 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">تفاصيل المشروع</h3>
              <p className="text-gray-600">
                تفاصيل المشروع تساعدنا في فهم فكرتك بشكل أفضل وتقديمها للمتبرعين
                بطريقة واضحة ومقنعة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">قصص نجاح</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="https://via.placeholder.com/400x200"
                alt="مشروع ناجح"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">مدرسة القرية</h3>
              <p className="text-gray-600">
                تم بناء مدرسة جديدة في قرية نائية بفضل تبرعاتكم الكريمة. المدرسة
                الآن تستقبل أكثر من 200 طالب سنويًا.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="https://via.placeholder.com/400x200"
                alt="مشروع ناجح"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">مشروع المياه النظيفة</h3>
              <p className="text-gray-600">
                تم توفير مياه نظيفة لأكثر من 500 عائلة في منطقة نائية. المشروع
                ساهم في تحسين صحة المجتمع بشكل كبير.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">أسئلة شائعة</h2>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">
                هل يمكنني تعديل المشروع بعد إرساله؟
              </h3>
              <p className="text-gray-600">
                نعم، يمكنك تعديل المشروع قبل الموافقة عليه.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">
                كم من الوقت يستغرق الموافقة على المشروع؟
              </h3>
              <p className="text-gray-600">
                عادةً ما تستغرق الموافقة من 1 إلى 3 أيام عمل.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">مستعد لإنشاء مشروعك؟</h2>
          <p className="text-xl mb-8">ابدأ الآن وساهم في تغيير حياة الآخرين!</p>
          <a
            href="/create-project"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            ابدأ الآن <ArrowRight className="inline ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectIntroPage;
