import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CharityCard = ({ 
  id, 
  title, 
  image, 
  category, 
  organization, 
  targetAmount, 
  currentAmount, 
  supportAmount, 
  donorsCount, 
  progress, 
  isCompleted = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md m-2 w-72 h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-60 object-cover transition-transform duration-300"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent px-3 py-2 pt-8">
          <h3 className="text-white text-lg font-bold text-right">{title}</h3>
        </div>
      </div>
      <div className="p-3 flex-grow flex flex-col">
        <p className="text-gray-800 text-sm mb-1 text-right">{organization}</p>
        <h3 className="text-lg font-bold mb-3 text-right">{category}</h3>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <FaUsers className="text-gray-500 mr-1" />
            <span className="text-gray-700 text-sm">{donorsCount} متبرعين</span>
          </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mb-3">
          <motion.div 
            className="h-2 rounded-full bg-[#2DAA9E]" 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mb-3 mt-auto">
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
        <Link to={`/project/${id}`}>
          <motion.button 
            className={`w-full rounded-md py-2 px-4 text-center ${isCompleted ? 'bg-red-700' : 'bg-[#2DAA9E]'} text-white font-bold transition duration-300 hover:shadow-lg`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCompleted ? 'مكتمل' : 'ادعم الآن'}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

// مكون الصفحة الرئيسية
function ProjectCard() {
  const [activeCategory, setActiveCategory] = useState("جميع الفئات");
  const [charityProjects, setCharityProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/projects/AllProject"
        );
        setCharityProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "جميع الفئات"
      ? charityProjects
      : charityProjects.filter(
          (project) => project.categoryType === activeCategory
        );

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
    <div className="container mx-auto py-20 px-4 ">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-0 gap-y-10 justify-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects
          .filter((project) => project.status === "approved") 
          .map((project) => (
            <CharityCard
              key={project.id}
              id={project.id}
              title={project.name}
              // image={project.main_image}
              image={`http://localhost:4000/${project.main_image}`}
              category={project.department}
              organization={project.organization_name}
              targetAmount={project.goal_amount}
              currentAmount={project.collected_amount}
              supportAmount={project.supportAmount}
              donorsCount={project.donorsCount}
              progress={project.progress}
              isCompleted={project.isCompleted}
            />
          ))}
      </motion.div>
    </div>
  </div>
  );
}

export default ProjectCard;