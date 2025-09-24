import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import Browse from './browse/browse';
import Layout from './Layout';

// Lazy load components for better performance
const ProfilePage = React.lazy(() => import('./profilePage/profilePage'));
const WorkPermit = React.lazy(() => import('./pages/WorkPermit'));
const WorkExperience = React.lazy(() => import('./pages/WorkExperience'));
const Recommendations = React.lazy(() => import('./pages/Recommendations'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ContactMe = React.lazy(() => import('./pages/ContactMe'));
const Music = React.lazy(() => import('./pages/Music'));
const Certifications = React.lazy(() => import('./pages/Certifications'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div style={{color: '#fff', textAlign: 'center', padding: '50px'}}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
        <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
        <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
        <Route path="/music" element={<Layout><Music /></Layout>} />
        <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      </Routes>
    </Suspense>
  );
};

export default App;
