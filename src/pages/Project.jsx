import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../utils/ProjectData';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const navigate = useNavigate();

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBuyNow = (id) => {
    navigate(`/projectdetail/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
          Our Projects
        </h2>
        <p className="text-lg text-gray-600 animate-fade-in delay-100">
          All Projects Have Complete Documentation with Their Code
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col min-h-[400px]"
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-[#252de6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.price}
                </div>
                {project.discount && (
                  <div className="absolute top-2 right-2 bg-[#ff0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    50% Off
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-1 overflow-hidden overflow-ellipsis">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-2 overflow-hidden overflow-ellipsis">
                  {project.description}
                </p>
              </div>
              <div className="p-4">
                <button
                  onClick={() => handleBuyNow(project.id)}
                  className="w-full px-4 py-2 text-sm sm:text-lg font-semibold text-white bg-gradient-to-r from-[#ff0000] to-[#252de6] rounded-lg shadow-lg hover:from-[#ff4444] hover:to-[#4a54e8] transition-all duration-300"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(1)}
            className={`mx-1 px-4 py-2 rounded ${currentPage === 1 ? 'bg-[#ff0000] text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            1
          </button>
          <button
            onClick={() => paginate(2)}
            className={`mx-1 px-4 py-2 rounded ${currentPage === 2 ? 'bg-[#ff0000] text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            2
          </button>
          <button
            onClick={() => paginate(3)}
            className={`mx-1 px-4 py-2 rounded ${currentPage === 3 ? 'bg-[#ff0000] text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            3
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
            className="mx-1 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-[#252de6] hover:text-white transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;