// API functions for contact form submissions using Web3Forms

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  'h-captcha-response'?: string;
  access_key?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message: string;
}

export const submitContact = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: data.access_key || '1bd0a6cc-e1d8-457f-ad90-2ab9ffd39aa1',
        name: data.name,
        email: data.email,
        message: data.message,
        from_name: 'Top Trust Insurance Website',
        subject: 'New Contact Form Submission - Top Trust Insurance',
        'h-captcha-response': data['h-captcha-response'] || '',
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: result.message || "Thank you for contacting us! We'll respond to your message within 24 hours.",
      };
    } else {
      return {
        success: false,
        message: result.message || 'There was an error sending your message. Please try again.',
      };
    }
  } catch (error) {
    console.error('Contact form Web3Forms submission error:', error);
    return {
      success: false,
      message: 'There was an error sending your message. Please try again.',
    };
  }
};
