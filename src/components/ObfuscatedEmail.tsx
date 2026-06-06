import React, { useState, useEffect, useCallback } from 'react';

interface ObfuscatedEmailProps {
  /** Email stored as an array of character codes to prevent scraper detection */
  encodedEmail: number[];
  className?: string;
}

/**
 * Renders an email address that is protected from bot scraping.
 *
 * The email is stored as an array of character codes (not as a readable string),
 * so neither the source code, the compiled JS bundle, nor the static HTML contain
 * a recognizable email pattern (no "@", no ".com", etc.).
 *
 * The address is reconstructed only at runtime inside the user's browser.
 */
const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({
  encodedEmail,
  className = '',
}) => {
  const [email, setEmail] = useState('');

  const decode = useCallback(() => {
    return encodedEmail.map((code) => String.fromCharCode(code)).join('');
  }, [encodedEmail]);

  useEffect(() => {
    // Small delay to further deter headless scrapers that execute JS briefly
    const timer = setTimeout(() => setEmail(decode()), 100);
    return () => clearTimeout(timer);
  }, [decode]);

  if (!email) {
    return <span className={className}>Loading...</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
};

export default ObfuscatedEmail;

/**
 * Helper: encode an email string into a char code array.
 * Usage (in a Node/browser console):
 *   encodeEmail('sukhvirsingh31@yahoo.com')
 *   → [115, 117, 107, 104, 118, 105, 114, 115, 105, 110, 103, 104, 51, 49, 64, 121, 97, 104, 111, 111, 46, 99, 111, 109]
 */
export const encodeEmail = (email: string): number[] =>
  Array.from(email).map((ch) => ch.charCodeAt(0));
