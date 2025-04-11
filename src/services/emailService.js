
import nodemailer from 'nodemailer';
import { SMTP_CONFIG, EMAIL_CONFIG } from '../config/env.js';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: SMTP_CONFIG.secure,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
});

/**
 * Send an email using Nodemailer
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text version of the email
 * @param {string} options.html - HTML version of the email
 * @returns {Promise} - Resolves with information about the delivery
 */
export const sendEmail = async (options) => {
  try {
    // Default recipient if not specified
    const to = options.to || EMAIL_CONFIG.contactEmail;
    
    // Set up email data
    const mailOptions = {
      from: EMAIL_CONFIG.from,
      to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Creates an HTML email template for contact form submissions
 * @param {Object} data - Form data
 * @returns {string} - HTML email content
 */
export const createContactEmailTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
      <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Form Submission</h2>
      
      <div style="margin-bottom: 15px;">
        <strong style="display: block; color: #4b5563;">Name:</strong>
        <p style="margin: 5px 0;">${data.name}</p>
      </div>
      
      <div style="margin-bottom: 15px;">
        <strong style="display: block; color: #4b5563;">Email:</strong>
        <p style="margin: 5px 0;">${data.email}</p>
      </div>
      
      <div style="margin-bottom: 15px;">
        <strong style="display: block; color: #4b5563;">Subject:</strong>
        <p style="margin: 5px 0;">${data.subject}</p>
      </div>
      
      <div style="margin-bottom: 15px;">
        <strong style="display: block; color: #4b5563;">Message:</strong>
        <p style="margin: 5px 0; white-space: pre-line;">${data.message}</p>
      </div>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #eaeaea; font-size: 12px; color: #6b7280;">
        This email was sent from the Aztecas contact form.
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
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}

This email was sent from the Aztecas contact form.
  `;
};
