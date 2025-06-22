import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

// Wrapper component for Router context
const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('Navbar Component', () => {
  it('renders the SecureChoice logo and brand name', () => {
    render(
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );
    
    const logoLink = screen.getByRole('link', { name: /go to homepage/i });
    expect(logoLink).toBeInTheDocument();
    
    const brandName = screen.getByText('SecureChoice');
    expect(brandName).toBeInTheDocument();
  });

  it('renders all main navigation links', () => {
    render(
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );
    
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Quote' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    render(
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );
    
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
    expect(screen.getByRole('link', { name: 'Quote' })).toHaveAttribute('href', '/quote');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });

  it('renders contact information links', () => {
    render(
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );
    
    const phoneLink = screen.getByRole('link', { name: /call securechoice insurance/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890');
    
    const emailLink = screen.getByRole('link', { name: 'info@securechoice.com' });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:info@securechoice.com');
  });
}); 