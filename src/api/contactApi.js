
import express from 'express';
import { sendEmail, createContactEmailTemplate, createContactEmailText } from '../services/emailService.js';

const router = express.Router();

// Rate limiting variables
const requestCounts = {};
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute

// Middleware for rate limiting
const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.socket.remoteAddress;
  const now = Date.now();
  
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
    return res.status(429).json({
      success: false,
      message: 'Too many requests, please try again later.'
    });
  }
  
  // Increment request count
  requestCounts[ip].count++;
  next();
};

// Contact form endpoint
router.post('/contact', rateLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }
    
    // Create email content
    const htmlContent = createContactEmailTemplate({ name, email, subject, message });
    const textContent = createContactEmailText({ name, email, subject, message });
    
    // Send email
    await sendEmail({
      to: process.env.CONTACT_EMAIL || 'info@aztecas.com',
      subject: `Contact Form: ${subject}`,
      text: textContent,
      html: htmlContent
    });
    
    // Auto-responder email to the sender
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting Aztecas',
      text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nRegards,\nAztecas Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">Thank You for Contacting Aztecas</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
          <p>Regards,<br>Aztecas Team</p>
        </div>
      `
    });
    
    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email'
    });
  }
});

export default router;
