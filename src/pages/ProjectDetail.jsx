import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import projects from '../utils/ProjectData';
import {
  Star,
  ShoppingCart,
  Clock,
  HeadphonesIcon,
  RefreshCw,
  Globe,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize,
  Minimize,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const selectedProject = projects.find(p => p.id === parseInt(id));
    setProject(selectedProject);
  }, [id]);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipForward = () => {
    videoRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl border border-slate-200 mt-10">
        {/* Project Video with Overlay */}
        <div className="relative w-full h-[400px] group">
          <video
            ref={videoRef}
            src={project.video}
            className="w-full h-full object-cover"
            onClick={togglePlayPause}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <button
              onClick={skipBackward}
              className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <SkipBack className="text-white w-6 h-6" />
            </button>
            <button
              onClick={togglePlayPause}
              className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              {isPlaying ? <Pause className="text-white w-8 h-8" /> : <Play className="text-white w-8 h-8" />}
            </button>
            <button
              onClick={skipForward}
              className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <SkipForward className="text-white w-6 h-6" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              {isFullscreen ? (
                <Minimize className="text-white w-6 h-6" />
              ) : (
                <Maximize className="text-white w-6 h-6" />
              )}
            </button>
          </div>
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        </div>

        <div className="px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">{project.title}</h1>
              <div className="flex items-center mt-4 space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-500 text-sm">(128 reviews)</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-600 text-sm font-medium">1,234 purchases</span>
              </div>
              <div className="mt-6">
                <p className="text-slate-600 leading-relaxed">
                  {showFullDescription ? project.description : `${project.description.substring(0, 120)}...`}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                >
                  {showFullDescription ? "Show less" : "Read more"}
                  {showFullDescription ? (
                    <ChevronUp className="ml-1 w-4 h-4" />
                  ) : (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 shadow-sm w-full md:w-72 flex-shrink-0">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-slate-800">${project.price}</span>
                <span className="text-lg text-slate-600 ml-1">.99</span>
              </div>
              <div className="mt-1 flex items-center">
                <span className="line-through text-slate-400 text-sm">$299.99</span>
                <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-0.5 rounded">
                  33% OFF
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Request to Buy
              </button>
              <p className="text-xs text-slate-500 mt-3 text-center">30-day money-back guarantee</p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <div className="flex space-x-6 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-3 font-medium text-sm ${activeTab === "details" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-500 hover:text-slate-800"}`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`pb-3 font-medium text-sm ${activeTab === "features" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-500 hover:text-slate-800"}`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`pb-3 font-medium text-sm ${activeTab === "reviews" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-500 hover:text-slate-800"}`}
              >
                Reviews
              </button>
            </div>

            <div className="py-6">
              {activeTab === "details" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-indigo-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-slate-800">Delivery Time</h3>
                      <p className="text-slate-600 text-sm mt-1">3-5 Business Days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <HeadphonesIcon className="w-5 h-5 text-indigo-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-slate-800">Support</h3>
                      <p className="text-slate-600 text-sm mt-1">24/7 Email & Chat Support</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RefreshCw className="w-5 h-5 text-indigo-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-slate-800">Updates</h3>
                      <p className="text-slate-600 text-sm mt-1">Free Lifetime Updates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-indigo-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-slate-800">Compatibility</h3>
                      <p className="text-slate-600 text-sm mt-1">Works on all modern browsers</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "features" && (
                <ul className="space-y-3 text-slate-600">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-emerald-100 rounded-full p-1 mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {project.reviews.map((review, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                        {review.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-slate-800">{review.name}</h3>
                          <span className="text-slate-400 text-sm">{review.date}</span>
                        </div>
                        <div className="flex mt-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-slate-300" />
                          ))}
                        </div>
                        <p className="text-slate-600 text-sm">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">      {/* Modal Container */}
      <div className="bg-white rounded-lg p-6 w-150 h-50 shadow-xl z-50 relative">
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-bold mb-4 text-center">Direct Message for Purchase</h2>

        {/* Horizontal Icons with Labels */}
        <div className="flex justify-center space-x-6">
          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <a
              href={`https://wa.me/9847503434`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.473-.149-.673.149-.2.297-.767.967-.94 1.166-.173.198-.347.223-.643.074-1.188-.594-2.18-1.44-2.963-2.503-.173-.248-.018-.383.13-.506.134-.116.298-.297.446-.446.149-.149.198-.248.298-.446.1-.198.05-.372-.025-.52-.075-.149-.673-1.616-.92-2.213-.24-.595-.487-.514-.673-.514-.173 0-.372-.025-.57-.025-.198 0-.52.074-.792.372-.273.297-1.042 1.02-1.042 2.484 0 1.465 1.065 2.88 1.213 3.078.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.87.118.57-.087 1.758-.72 2.006-1.415.248-.695.248-1.29.173-1.415-.074-.124-.272-.198-.57-.347zM12 2a10 10 0 00-8.617 15.06L2 22l4.94-1.383A10 10 0 1012 2z" />
              </svg>
            </a>
            <span className="text-sm text-gray-600 mt-1">WhatsApp</span>
          </div>

          {/* Facebook */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/satiingraju.sattingraju/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <span className="text-sm text-gray-600 mt-1">Facebook</span>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/divashpaudel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <span className="text-sm text-gray-600 mt-1">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;