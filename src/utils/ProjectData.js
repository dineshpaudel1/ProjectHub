import one from "../assets/images/one.png"
import herobg from "../assets/images/two.png"


const projects = [
  {
    id: 1,
    title: "Car Price Predection System",
    description: "AI/Ml web based Project in Django and tailwind",
    image: one,
    price: "NPR 2000",
    discount: true, // 50% off
  },
  {
    id: 2,
    title: "Course Recommender System",
    description: "AI/ML Project web based Project",
    image: herobg,
    price: "$200",
    discount: false, // No discount
  },
  {
    id: 3,
    title: "GuruMarga E-Learning System",
    description: "GuruMarga E-Learning System",
    image: one,
    price: "$300",
    discount: true, // 50% off
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a brief description of Project 4.",
    image: one,
    price: "$400",
    discount: false, // No discount
  },
  
];

export default projects;