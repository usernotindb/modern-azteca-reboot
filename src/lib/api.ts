
/**
 * Makes an API call to the specified endpoint
 * @param url The API endpoint
 * @param options Fetch options
 * @returns Promise with the API response data
 */
export const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data as T;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * Submit contact form data to the API
 * @param formData Contact form data
 * @returns Promise with the API response
 */
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return fetchApi('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
