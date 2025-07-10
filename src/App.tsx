import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ResourcesPage = React.lazy(() => import('./pages/ResourcesPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Generic service page using content management system
const ServicePage = React.lazy(() => import('./components/ServicePage'));

// Note: Legacy service pages have been removed and replaced with content management system

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="resources" element={<ResourcesPage />} />

              {/* Content-managed service pages */}
              <Route path="services/:serviceSlug" element={<ServicePage />} />

              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
