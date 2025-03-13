// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Master from './pages/Master';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

// Layout component to wrap pages with Navbar and Footer
const Layout = () => {
  return (
    <>
      <Outlet /> {/* This will render the nested routes */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="ProjectHub" element={<Layout />}>
          <Route index element={<Master />} /> {/* Default route */}
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projectdetail/:id" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;