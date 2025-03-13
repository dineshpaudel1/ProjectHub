import one from "../assets/images/one.png"
import herobg from "../assets/images/two.png"
import bookphoto from "../assets/images/book.png"
import photo from "../assets/images/projecthub.png"
import car from "../assets/videos/car.mp4"
import book from "../assets/videos/book.mp4"
import course from "../assets/videos/course.mp4"



const projects = [
  {
    id: 1,
    title: "Car Price Predection System",
    description: "AI/Ml web based Project in Django and tailwind",
    image: one,
    price: "NPR 5000",
    discount: true, // 50% off
    video: car
  },
  {
    id: 2,
    title: "Course Recommender System",
    description: "AI/ML Project web based Project",
    image: herobg,
    price: "NPR 3500",
    discount: false, // No discount
    video: course
  },
  {
    id: 3,
    title: "Book Recommender System",
    description: "AI Recommendation System",
    image: bookphoto,
    price: "NPR 4500",
    discount: true, // 50% off
    video: book
  },
  {
    id: 4,
    title: "Coming soon",
    description: "Coming soon",
    image: photo,
    price: "NPR 4000",
    discount: false, // No discount
    video: book
  },
  
];

export default projects;