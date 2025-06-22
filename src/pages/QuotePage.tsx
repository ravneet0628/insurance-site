import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const QuotePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Get a Quote - SecureChoice Insurance | Free Insurance Quotes</title>
        <meta 
          name="description" 
          content="Get a personalized insurance quote in minutes. Compare rates for auto, home, life, commercial, and travel insurance. Free quotes with no obligation." 
        />
        <meta property="og:title" content="Get a Quote - SecureChoice Insurance" />
        <meta property="og:description" content="Get personalized insurance quotes in minutes. Free, fast, and no obligation." />
        <link rel="canonical" href="/quote" />
      </Helmet>

      <Hero
        title="Get Your Insurance Quote"
        subtitle="Quick, easy, and personalized quotes in just a few minutes. Compare coverage options and find the perfect protection for your needs."
        bgImg="/images/office-building.jpg"
        height="lg"
      />

      <div className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quote System Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're working on an amazing new quote system that will provide you with instant, personalized insurance quotes. 
              This feature will be available soon with integration to our external API.
            </p>
            <p className="text-gray-500">
              In the meantime, please <a href="/contact" className="text-primary hover:underline">contact us</a> directly for a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage; 