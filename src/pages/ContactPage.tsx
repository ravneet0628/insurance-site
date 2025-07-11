import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';

import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { submitContact, type ContactFormData } from '../utils/api';
import { useContactPageContent } from '../content/hooks/usePageContent';
import 'leaflet/dist/leaflet.css';

// Fix for leaflet default markers
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  company: z.string().optional(), // honeypot field
});

type ContactForm = z.infer<typeof contactFormSchema>;

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Get content from CMS
  const content = useContactPageContent();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  // Office coordinates from CMS
  const officePosition: [number, number] = content.contactInfo.office.coordinates;

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await submitContact(data as ContactFormData);

      if (response.success) {
        toast.success(response.message, {
          duration: 5000,
          position: 'top-center',
        });
        setShowModal(true);
        reset();
      } else {
        toast.error(response.message, {
          duration: 4000,
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('An unexpected error occurred. Please try again.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build contact info from CMS data
  const contactInfo = [
    {
      icon: MapPin,
      title: content.contactInfo.office.title,
      details: content.contactInfo.office.address,
    },
    {
      icon: Phone,
      title: content.contactInfo.phone.title,
      details: content.contactInfo.phone.numbers,
    },
    {
      icon: Mail,
      title: content.contactInfo.email.title,
      details: content.contactInfo.email.addresses,
    },
    {
      icon: Clock,
      title: content.contactInfo.hours.title,
      details: content.contactInfo.hours.schedule,
    },
  ];

  return (
    <>
      <title>{content.meta.title}</title>
      <meta name="description" content={content.meta.description} />
      <meta property="og:title" content={content.meta.title} />
      <meta property="og:description" content={content.meta.description} />
      <link rel="canonical" href="/contact" />

      {/* Local SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'InsuranceAgency',
          name: 'SecureChoice Insurance',
          address: {
            '@type': 'PostalAddress',
            streetAddress: content.contactInfo.office.address[0],
            addressLocality: 'Toronto',
            addressRegion: 'ON', 
            postalCode: content.contactInfo.office.address[1]?.split(' ')[2] || 'M5V 3A8',
            addressCountry: 'CA',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: content.contactInfo.office.coordinates[0],
            longitude: content.contactInfo.office.coordinates[1],
          },
          telephone: content.contactInfo.phone.numbers[0]?.href?.replace('tel:', ''),
          email: content.contactInfo.email.addresses[0]?.href?.replace('mailto:', ''),
          url: 'https://securechoice.com',
          openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-16:00'],
        })}
      </script>

      {/* Contact Information Grid */}
      <section className="section-spacing-sm bg-white">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center heading-spacing-sm"
          >
            <h2 className="text-clamp-2xl font-ubuntu font-bold text-neutral-text mb-4">
              {content.contactInfo.title}
            </h2>
            <p className="text-clamp-base text-gray-600 max-w-2xl mx-auto">
              {content.contactInfo.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-ubuntu font-semibold text-neutral-text mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-sm text-gray-600">
                        {typeof detail === 'string' ? (
                          detail
                        ) : (
                          <div>
                            <span className="text-gray-500">{detail.label}:</span>
                            <br />
                            <a
                              href={detail.href}
                              className="text-primary hover:text-primary/80 font-medium"
                            >
                              {detail.value}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-16 bg-neutral-bg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                  center={officePosition}
                  zoom={15}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={officePosition}>
                    <Popup>
                      <div className="text-center">
                        <strong>SecureChoice Insurance</strong>
                        <br />
                        {content.contactInfo.office.address.map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                        <a 
                          href={content.contactInfo.phone.numbers[0]?.href} 
                          className="text-primary hover:text-primary/80"
                        >
                          {content.contactInfo.phone.numbers[0]?.value}
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-6">
                  {content.form.title}
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    {...register('company')}
                    type="text"
                    name="company"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label htmlFor="name" className="form-label">
                      {content.form.fields.name.label}{' '}
                      {content.form.fields.name.required && (
                        <span className="text-accent" aria-label="required">
                          *
                        </span>
                      )}
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={content.form.fields.name.placeholder}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {content.form.fields.email.label}{' '}
                      {content.form.fields.email.required && (
                        <span className="text-accent" aria-label="required">
                          *
                        </span>
                      )}
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={content.form.fields.email.placeholder}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {content.form.fields.message.label}{' '}
                      {content.form.fields.message.required && (
                        <span className="text-accent" aria-label="required">
                          *
                        </span>
                      )}
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={content.form.fields.message.placeholder}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <CTAButton type="submit" disabled={!isValid || isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </CTAButton>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-ubuntu font-bold text-neutral-text mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                {content.form.successMessage}
              </p>
              <CTAButton onClick={() => setShowModal(false)}>Close</CTAButton>
            </div>
          </motion.div>
        </div>
      )}

      <Toaster />
    </>
  );
};

export default ContactPage;
