import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - SecureChoice Insurance</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to SecureChoice Insurance homepage." />
      </Helmet>

      <div className="min-h-[600px] flex items-center justify-center bg-neutral-bg">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <div className="text-6xl font-ubuntu font-bold text-primary mb-4">404</div>
            <h1 className="text-2xl font-ubuntu font-bold text-neutral-text mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <CTAButton to="/" className="w-full">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </CTAButton>
            
            <CTAButton 
              onClick={() => window.history.back()} 
              variant="outline" 
              className="w-full"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </CTAButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage; 