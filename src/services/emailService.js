
import nodemailer from 'nodemailer';
import { SMTP_CONFIG, EMAIL_CONFIG } from '../config/env.js';

// Create a transporter object using SMTP transport with enhanced security
const createTransporter = () => {
  console.log('Creating email transporter with config:', {
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: SMTP_CONFIG.secure,
    user: SMTP_CONFIG.user ? SMTP_CONFIG.user.substring(0, 5) + '***' : 'Not configured'
  });
  
  return nodemailer.createTransporter({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: SMTP_CONFIG.secure,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass,
    },
    tls: {
      // Do not fail on invalid certs for development
      rejectUnauthorized: process.env.NODE_ENV === 'production'
    }
  });
};

/**
 * Send an email using Nodemailer with enhanced error handling
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text version of the email
 * @param {string} options.html - HTML version of the email
 * @returns {Promise} - Resolves with information about the delivery
 */
export const sendEmail = async (options) => {
  try {
    const transporter = createTransporter();
    
    // Verify connection configuration
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    // Default recipient if not specified
    const to = options.to || EMAIL_CONFIG.contactEmail;
    
    // Set up email data with security headers
    const mailOptions = {
      from: `"Aztecas Contact Form" <${EMAIL_CONFIG.from}>`,
      to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      // Add security headers
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      to: to,
      subject: options.subject
    });
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', {
      error: error.message,
      code: error.code,
      command: error.command
    });
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

/**
 * Creates an HTML email template for contact form submissions
 * @param {Object} data - Form data
 * @returns {string} - HTML email content
 */
export const createContactEmailTemplate = (data) => {
  // Escape HTML to prevent XSS
  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h2 style="color: #3b82f6; margin-bottom: 10px;">New Contact Form Submission</h2>
        <p style="color: #6b7280; font-size: 14px;">Received on ${new Date().toLocaleString()}</p>
      </div>
      
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <div style="margin-bottom: 15px;">
          <strong style="display: block; color: #374151; margin-bottom: 5px;">Name:</strong>
          <p style="margin: 0; padding: 8px; background-color: #ffffff; border-radius: 4px; border: 1px solid #e5e7eb;">${escapeHtml(data.name)}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: block; color: #374151; margin-bottom: 5px;">Email:</strong>
          <p style="margin: 0; padding: 8px; background-color: #ffffff; border-radius: 4px; border: 1px solid #e5e7eb;">
            <a href="mailto:${escapeHtml(data.email)}" style="color: #3b82f6; text-decoration: none;">${escapeHtml(data.email)}</a>
          </p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: block; color: #374151; margin-bottom: 5px;">Subject:</strong>
          <p style="margin: 0; padding: 8px; background-color: #ffffff; border-radius: 4px; border: 1px solid #e5e7eb;">${escapeHtml(data.subject)}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: block; color: #374151; margin-bottom: 5px;">Message:</strong>
          <div style="margin: 0; padding: 12px; background-color: #ffffff; border-radius: 4px; border: 1px solid #e5e7eb; white-space: pre-line; line-height: 1.6;">${escapeHtml(data.message)}</div>
        </div>
      </div>
      
      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
        <p>This email was sent from the Aztecas contact form.</p>
        <p>Please respond promptly to maintain good customer relations.</p>
      </div>
    </div>
  `;
};

/**
 * Creates a plain text email for contact form submissions
 * @param {Object} data - Form data
 * @returns {string} - Plain text email content
 */
export const createContactEmailText = (data) => {
  return `
NEW CONTACT FORM SUBMISSION
===========================

Received: ${new Date().toLocaleString()}

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from the Aztecas contact form.
Please respond promptly to maintain good customer relations.
  `;
};
