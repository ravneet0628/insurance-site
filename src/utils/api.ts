// Stub API functions for contact form submissions

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string; // honeypot field
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message: string;
}

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const submitContact = async (data: ContactFormData): Promise<ApiResponse> => {
  // Check honeypot field
  if (data.company) {
    return {
      success: false,
      message: 'Invalid submission detected.',
    };
  }

  // Simulate API call delay
  await delay(1000);

  // Simulate random success/failure for demo purposes
  const isSuccess = Math.random() > 0.05; // 95% success rate

  if (isSuccess) {
    // Log the data (in real app, this would be sent to backend)
    console.log('Contact submission:', data);

    return {
      success: true,
      data: {
        ticketId: `CT-${Date.now()}`,
        estimatedResponse: '2-4 hours',
      },
      message: "Thank you for contacting us! We'll respond to your message within 24 hours.",
    };
  } else {
    return {
      success: false,
      message: 'There was an error sending your message. Please try again.',
    };
  }
};
