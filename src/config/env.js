
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Environment variables configuration with enhanced security
 * This file provides fallback values for development
 * In production, these values should be set via environment variables
 */

// SMTP Configuration with security considerations
export const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
};

// Email Configuration
export const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || 'noreply@aztecas.com',
  contactEmail: process.env.CONTACT_EMAIL || 'info@aztecas.com',
};

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.API_BASE_URL || '',
  timeout: parseInt(process.env.API_TIMEOUT || '30000', 10),
  maxRetries: parseInt(process.env.API_MAX_RETRIES || '3', 10),
};

// Application Configuration
export const APP_CONFIG = {
  environment: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV !== 'production',
  logLevel: process.env.LOG_LEVEL || 'info',
};

// Security Configuration
export const SECURITY_CONFIG = {
  rateLimitWindow: parseInt(process.env.RATE_LIMIT_WINDOW || '60000', 10), // 1 minute
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX || '3', 10), // 3 requests per window
  enableCors: process.env.ENABLE_CORS !== 'false',
  trustProxy: process.env.TRUST_PROXY !== 'false',
};

// Validation function to check if SMTP is properly configured
export const isSmtpConfigured = () => {
  return !!(
    SMTP_CONFIG.user && 
    SMTP_CONFIG.pass && 
    SMTP_CONFIG.pass !== 'ENCRYPTED_SMTP_PASS' &&
    SMTP_CONFIG.host
  );
};

// Log configuration status (without sensitive data)
if (APP_CONFIG.isDevelopment) {
  console.log('=== CONFIGURATION STATUS ===');
  console.log('Environment:', APP_CONFIG.environment);
  console.log('SMTP Host:', SMTP_CONFIG.host);
  console.log('SMTP User configured:', !!SMTP_CONFIG.user);
  console.log('SMTP Pass configured:', !!SMTP_CONFIG.pass && SMTP_CONFIG.pass !== 'ENCRYPTED_SMTP_PASS');
  console.log('Contact Email:', EMAIL_CONFIG.contactEmail);
  console.log('SMTP Fully configured:', isSmtpConfigured());
}
