// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import Settings from './pages/Dashboard/Settings';
import Login from './pages/Login';
import Master from './pages/Master';
import ProjectDetail from './pages/ProjectDetail';

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
        {/* Wrap all routes that need Navbar and Footer with the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Master />} /> {/* Default route */}
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projectdetail" element={<ProjectDetail />} />

          {/* Nested routes for Dashboard */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} /> {/* Default nested route */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* Example of a route without Navbar and Footer */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;