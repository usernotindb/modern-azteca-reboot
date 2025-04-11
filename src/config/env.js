
/**
 * Environment variables configuration
 * This file provides fallback values for development
 * In production, these values should be set via environment variables
 */

// SMTP Configuration
export const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER || 'user@example.com',
  pass: process.env.SMTP_PASS || 'password',
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
};

// Application Configuration
export const APP_CONFIG = {
  environment: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
};
