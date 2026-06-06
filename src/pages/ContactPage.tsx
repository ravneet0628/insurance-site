import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';

import Card from '../components/Card';
import CTAButton from '../components/CTAButton';
import { submitContact } from '../utils/api';
import { useContactPageContent } from '../content/hooks/usePageContent';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Read hCaptcha token from DOM if present
      const hcaptchaResponse = (document.getElementsByName('h-captcha-response')[0] as HTMLInputElement)?.value || '';

      const response = await submitContact({
        ...data,
        'h-captcha-response': hcaptchaResponse,
      });

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
      <link rel="canonical" href="https://toptrustinsurance.ca/contact" />

      {/* Local SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'InsuranceAgency',
          name: 'Top Trust Insurance',
          telephone: content.contactInfo.phone.numbers[0]?.value,
          email: content.contactInfo.email.addresses[0]?.value,
          url: 'https://toptrustinsurance.ca',
          openingHours: ['Mo-Fr 09:00-17:00'],
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* Contact Form */}
      <section className="py-16 bg-neutral-bg relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl">
              <h3 className="text-xl font-ubuntu font-bold text-neutral-text mb-6">
                {content.form.title}
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* hCaptcha Widget Placeholder - To enable:
                    1. Uncomment the script tag in index.html
                    2. Uncomment the div below
                */}
                {/* 
                <div 
                  className="h-captcha mb-4" 
                  data-sitekey="10000000-ffff-ffff-ffff-ffffffffffff"
                ></div>
                */}

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
