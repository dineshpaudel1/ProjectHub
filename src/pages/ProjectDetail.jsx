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
import video from "../assets/videos/video.mp4";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    const selectedProject = projects.find(p => p.id === parseInt(id));
    setProject(selectedProject);
  }, [id]);

  // Play/Pause functionality
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Skip forward by 10 seconds
  const skipForward = () => {
    videoRef.current.currentTime += 10;
  };

  // Skip backward by 10 seconds
  const skipBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  // Toggle fullscreen
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl border border-slate-200 mt-10">
        {/* Project Video with Overlay */}
        <div className="relative w-full h-[400px] group">
          {/* Video Element */}
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full object-cover"
            onClick={togglePlayPause}
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {/* Skip Backward Button */}
            <button
              onClick={skipBackward}
              className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <SkipBack className="text-white w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              {isPlaying ? <Pause className="text-white w-8 h-8" /> : <Play className="text-white w-8 h-8" />}
            </button>

            {/* Skip Forward Button */}
            <button
              onClick={skipForward}
              className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <SkipForward className="text-white w-6 h-6" />
            </button>

            {/* Fullscreen Button */}
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

          {/* Featured Badge */}
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        </div>

        <div className="px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              {/* Project Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">{project.title}</h1>

              {/* Rating */}
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

              {/* Project Description */}
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

            {/* Price Card */}
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

              <button className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Request to Buy
              </button>

              <p className="text-xs text-slate-500 mt-3 text-center">30-day money-back guarantee</p>
            </div>
          </div>

          {/* Tabs */}
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

            {/* Tab Content */}
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
    </div>
  );
};

export default ProjectDetail;