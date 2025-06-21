import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NavbarWrapper = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar', () => {
  it('should render navigation links', () => {
    render(<NavbarWrapper />);
    
    expect(screen.getByText('SecureChoice')).toBeInTheDocument();
    // Use getAllByText for Home and About since they appear in both desktop and mobile nav
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Quote').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('should toggle mobile menu when hamburger button is clicked', () => {
    render(<NavbarWrapper />);
    
    // Find the mobile menu button (hamburger)
    const mobileMenuButton = screen.getByRole('button', { name: /toggle navigation/i });
    expect(mobileMenuButton).toBeInTheDocument();
    
    // Mobile menu should be closed initially (checking for transform class)
    const mobileNav = screen.getByTestId('mobile-nav');
    expect(mobileNav).toHaveClass('translate-x-full');
    
    // Click to open
    fireEvent.click(mobileMenuButton);
    expect(mobileNav).toHaveClass('translate-x-0');
    
    // Click to close
    fireEvent.click(mobileMenuButton);
    expect(mobileNav).toHaveClass('translate-x-full');
  });

  it('should close mobile menu when a navigation link is clicked', () => {
    render(<NavbarWrapper />);
    
    const mobileMenuButton = screen.getByRole('button', { name: /toggle navigation/i });
    const mobileNav = screen.getByTestId('mobile-nav');
    
    // Open mobile menu
    fireEvent.click(mobileMenuButton);
    expect(mobileNav).toHaveClass('translate-x-0');
    
    // Click on a mobile navigation link
    const mobileHomeLinks = screen.getAllByText('Home');
    if (mobileHomeLinks.length > 1) {
      fireEvent.click(mobileHomeLinks[1]);
    }
    
    // Menu should close
    expect(mobileNav).toHaveClass('translate-x-full');
  });

  it('should highlight active navigation link', () => {
    render(<NavbarWrapper />);
    
    // Check if Home link has active styling (since we're on root path)
    const homeLinks = screen.getAllByText('Home');
    // Desktop nav link should have active styling
    const homeLink = homeLinks[0]?.closest('a');
    if (homeLink) {
      expect(homeLink).toHaveClass('text-primary');
    }
  });
});