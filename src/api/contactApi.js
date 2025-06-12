
import express from 'express';
import { sendEmail, createContactEmailTemplate, createContactEmailText } from '../services/emailService.js';

const router = express.Router();

// Rate limiting variables with more restrictive limits
const requestCounts = {};
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per minute for security

// Input validation and sanitization
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Middleware for rate limiting with IP tracking
const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || 
             (req.connection.socket ? req.connection.socket.remoteAddress : null);
  const now = Date.now();
  
  console.log('Rate limiter - IP:', ip);
  
  // Initialize or clean up old requests
  if (!requestCounts[ip] || now - requestCounts[ip].timestamp > RATE_LIMIT_WINDOW_MS) {
    requestCounts[ip] = {
      count: 1,
      timestamp: now
    };
    return next();
  }
  
  // Check if rate limit exceeded
  if (requestCounts[ip].count >= RATE_LIMIT_MAX_REQUESTS) {
    console.log('Rate limit exceeded for IP:', ip);
    return res.status(429).json({
      success: false,
      message: 'Too many requests, please try again later.'
    });
  }
  
  // Increment request count
  requestCounts[ip].count++;
  next();
};

// Contact form endpoint with enhanced security
router.post('/contact', rateLimiter, async (req, res) => {
  try {
    console.log('=== CONTACT API CALLED ===');
    console.log('Request method:', req.method);
    console.log('Request path:', req.path);
    console.log('Request body keys:', Object.keys(req.body || {}));
    
    const { name, email, subject, message } = req.body;
    
    // Validate and sanitize required fields
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);
    
    if (!sanitizedName || !sanitizedEmail || !sanitizedSubject || !sanitizedMessage) {
      console.log('Validation failed - missing or empty fields');
      return res.status(400).json({
        success: false,
        message: 'All fields are required and cannot be empty'
      });
    }
    
    // Validate email format
    if (!validateEmail(sanitizedEmail)) {
      console.log('Validation failed - invalid email format');
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }
    
    // Check for minimum length requirements
    if (sanitizedName.length < 2 || sanitizedSubject.length < 3 || sanitizedMessage.length < 10) {
      console.log('Validation failed - content too short');
      return res.status(400).json({
        success: false,
        message: 'Please provide more detailed information in your message'
      });
    }
    
    // For development/testing - if email service is not configured, return mock success
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || process.env.SMTP_PASS === 'ENCRYPTED_SMTP_PASS') {
      console.log('Email service not configured - returning mock success');
      return res.status(200).json({
        success: true,
        message: 'Message received successfully (development mode)'
      });
    }
    
    // Create email content with sanitized data
    const emailData = {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage
    };
    
    const htmlContent = createContactEmailTemplate(emailData);
    const textContent = createContactEmailText(emailData);
    
    // Send email to the company
    await sendEmail({
      to: process.env.CONTACT_EMAIL || 'info@aztecas.com',
      subject: `Contact Form: ${sanitizedSubject}`,
      text: textContent,
      html: htmlContent
    });
    
    // Send auto-responder email to the sender
    await sendEmail({
      to: sanitizedEmail,
      subject: 'Thank you for contacting Aztecas',
      text: `Dear ${sanitizedName},\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nRegards,\nAztecas Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">Thank You for Contacting Aztecas</h2>
          <p>Dear ${sanitizedName},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
          <p>Regards,<br>Aztecas Team</p>
        </div>
      `
    });
    
    console.log('Email sent successfully to both recipient and sender');
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Add a test GET route to verify the API is working
router.get('/test', (req, res) => {
  console.log('API test endpoint called');
  res.json({ 
    message: 'Contact API is working', 
    timestamp: new Date().toISOString(),
    env_check: {
      smtp_configured: !!(process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PASS !== 'ENCRYPTED_SMTP_PASS'),
      contact_email: process.env.CONTACT_EMAIL || 'info@aztecas.com'
    }
  });
});

export default router;
