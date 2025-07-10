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

    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByRole('link', { name: 'Resources' })).toHaveLength(2); // Desktop and mobile
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2); // Desktop and mobile
  });

  it('has correct href attributes for navigation links', () => {
    render(
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );

    const homeLinks = screen.getAllByRole('link', { name: 'Home' });
    homeLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/');
    });

    const resourcesLinks = screen.getAllByRole('link', { name: 'Resources' });
    resourcesLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/resources');
    });

    const contactLinks = screen.getAllByRole('link', { name: 'Contact' });
    contactLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/contact');
    });
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

    const emailLinks = screen.getAllByRole('link', { name: 'info@securechoice.com' });
    expect(emailLinks).toHaveLength(2); // Desktop and mobile
    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'mailto:info@securechoice.com');
    });
  });
});
