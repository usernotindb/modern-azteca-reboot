

/**
 * Makes an API call to the specified endpoint
 * @param url The API endpoint
 * @param options Fetch options
 * @returns Promise with the API response data
 */
export const fetchApi = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    console.log('Making API request to:', url);
    console.log('Request options:', options);
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    // Get response text first to see what we're actually receiving
    const responseText = await response.text();
    console.log('Raw response text:', responseText);
    
    // Check if response is empty or not JSON
    if (!responseText) {
      throw new Error(`Server returned empty response (Status: ${response.status})`);
    }
    
    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse response as JSON:', parseError);
      throw new Error(`Server returned invalid JSON response (Status: ${response.status}). Response: ${responseText.substring(0, 200)}`);
    }
    
    if (!response.ok) {
      throw new Error(data.message || `API request failed with status ${response.status}`);
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

