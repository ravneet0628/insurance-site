import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useServiceContent } from '../content/hooks/useServiceContent';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import CTAButton from './CTAButton';
import * as Icons from 'lucide-react';

const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const content = useServiceContent(serviceSlug || '');

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-4">The requested service page could not be found.</p>
            <p className="text-sm text-gray-500">Service slug: {serviceSlug}</p>
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  const renderIcon = (iconName: string, className: string = '') => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className={className} /> : <Icons.Shield className={className} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        {content.meta.keywords && (
          <meta name="keywords" content={content.meta.keywords.join(', ')} />
        )}
        {content.meta.ogImage && (
          <meta property="og:image" content={content.meta.ogImage} />
        )}
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          bgImg={content.hero.backgroundImage}
          ctaText={content.hero.ctaText}
          ctaLink={content.hero.ctaLink}
        />

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {content.overview.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {content.overview.content}
              </p>
              {content.overview.highlights && (
                <div className="grid md:grid-cols-2 gap-4">
                  {content.overview.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center justify-center md:justify-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {content.features.title}
              </h2>
              {content.features.subtitle && (
                <p className="text-lg text-gray-600">
                  {content.features.subtitle}
                </p>
              )}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {content.features.features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">
                    {renderIcon(feature.icon, "h-12 w-12")}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  {feature.details && (
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {content.details.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {content.details.content}
              </p>
            </div>

            {content.details.items && (
              <div className="grid lg:grid-cols-3 gap-8">
                {content.details.items.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>
                    {item.benefits && (
                      <ul className="space-y-3">
                        {item.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 bg-blue-600 relative overflow-hidden"
          style={{
            backgroundImage: content.cta.backgroundImage ? `url(${content.cta.backgroundImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {content.cta.backgroundImage && (
            <div className="absolute inset-0 bg-blue-600 bg-opacity-80"></div>
          )}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {content.cta.title}
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {content.cta.subtitle}
              </p>
              <CTAButton 
                to={content.cta.buttonLink}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                {content.cta.buttonText}
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicePage; 