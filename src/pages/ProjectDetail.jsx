import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../utils/ProjectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-100 bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-semibold text-gray-800">{project.title}</h1>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <div className="mt-4">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            {/* Additional Photo Placeholders */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-gray-200 h-32 flex items-center justify-center">
                  <span className="text-gray-500">Photo {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Buy Project</h2>
            <div className="flex space-x-4 mt-4">
              <a href={`https://wa.me/?text=${encodeURIComponent(`I want to buy ${project.title}`)}`} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                WhatsApp
              </a>
              <a href={`viber://forward?text=${encodeURIComponent(`I want to buy ${project.title}`)}`} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300">
                Viber
              </a>
              <a href={`https://t.me/share/url?url=&text=${encodeURIComponent(`I want to buy ${project.title}`)}`} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Telegram
              </a>
              <a href={`https://www.instagram.com/?text=${encodeURIComponent(`I want to buy ${project.title}`)}`} className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;