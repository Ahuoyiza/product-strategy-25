import React from 'react';
import { Routes, Route, Navigate, useLocation, HashRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useContent } from './hooks/useContent';
import SectionPage from './components/SectionPage';

const AppContent = () => {
  const { sections, loading } = useContent();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Loading...
      </div>
    );
  }

  if (sections.length === 0) {
    return <div>No content found.</div>;
  }

  const currentSectionIndex = sections.findIndex(s => `/${s.id}` === location.pathname);
  const progress = ((currentSectionIndex + 1) / sections.length) * 100;

  return (
    <>
      {/* Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'rgba(255,255,255,0.1)',
        zIndex: 100
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'var(--accent-gradient)',
          transition: 'width 0.3s ease'
        }} />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to={`/${sections[0].id}`} replace />} />
          {sections.map((section, index) => (
            <Route
              key={section.id}
              path={`/${section.id}`}
              element={
                <SectionPage
                  section={section}
                  prevSection={sections[index - 1]}
                  nextSection={sections[index + 1]}
                  isHero={index === 0}
                />
              }
            />
          ))}
          <Route path="*" element={<Navigate to={`/${sections[0].id}`} replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
