import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Code, 
  Linkedin, 
  Github, 
  Globe, 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Sun, 
  Moon,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface SocialLink {
  label: string;
  url: string;
  icon: React.ReactNode;
  subtitle?: string;
}

const Linktree: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedUPI, setCopiedUPI] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.className = isDark ? 'dark' : '';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const copyToClipboard = async (text: string, type: 'email' | 'upi') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedUPI(true);
        setTimeout(() => setCopiedUPI(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // TODO: Update these URLs with your actual social media links
  const socialLinks: SocialLink[] = [
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/iamanbhardwaj__/?hl=en',
      icon: <Instagram size={24} />,
      subtitle: 'Follow my journey'
    },
    {
      label: 'LeetCode',
      url: 'https://leetcode.com/u/amankcodes/',
      icon: <Code size={24} />,
      subtitle: 'Coding problems'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dev-aman-kr17/',
      icon: <Linkedin size={24} />,
      subtitle: 'Professional network'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/amankcodes',
      icon: <Github size={24} />,
      subtitle: 'Open source projects'
    },
    {
      label: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/amankr_17/',
      icon: <Code size={24} />,
      subtitle: 'Coding practice'
    },
    {
      label: 'Portfolio',
      url: 'https://amankodes.netlify.app/',
      icon: <Globe size={24} />,
      subtitle: 'My work & projects'
    }
  ];

  const featuredLink = {
    label: 'Latest Project',
    url: 'https://github.com/amankcodes',
    subtitle: 'Check out my recent work'
  };

  return (
    <div className="linktree-container">
      {/* Background grid */}
      <div className="linktree-grid" />
      
      {/* Main content */}
      <div className="linktree-content">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="linktree-theme-toggle"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Header */}
        <header className="linktree-header">
          <div className="linktree-avatar">
            <img 
              src="./avatar.jpg" 
              alt="Aman Kr. profile picture"
              className="linktree-avatar-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="linktree-avatar-fallback">
              A
            </div>
          </div>
          <h1 className="linktree-name">Aman Kr.</h1>
          <p className="linktree-bio">Aspiring Software Engineer | Building things that scale</p>
        </header>

        {/* Latest section */}
        <section className="linktree-section">
          <h2 className="linktree-section-title">Latest</h2>
          <a 
            href={featuredLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-card linktree-featured"
          >
            <div className="linktree-card-content">
              <ExternalLink size={24} />
              <div className="linktree-card-text">
                <span className="linktree-card-label">{featuredLink.label}</span>
                <span className="linktree-card-subtitle">{featuredLink.subtitle}</span>
              </div>
            </div>
            <ChevronRight size={20} className="linktree-card-arrow" />
          </a>
        </section>

        {/* Social links */}
        <section className="linktree-section">
          <h2 className="linktree-section-title">Connect</h2>
          <div className="linktree-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="linktree-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="linktree-card-content">
                  {link.icon}
                  <div className="linktree-card-text">
                    <span className="linktree-card-label">{link.label}</span>
                    {link.subtitle && (
                      <span className="linktree-card-subtitle">{link.subtitle}</span>
                    )}
                  </div>
                </div>
                <ChevronRight size={20} className="linktree-card-arrow" />
              </a>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section className="linktree-section">
          <h2 className="linktree-section-title">Contact</h2>
          <div className="linktree-contact">
            <a 
              href="mailto:aman@example.com"
              className="linktree-card"
            >
              <div className="linktree-card-content">
                <Mail size={24} />
                <div className="linktree-card-text">
                  <span className="linktree-card-label">Email</span>
                </div>
              </div>
              <ChevronRight size={20} className="linktree-card-arrow" />
            </a>
            
            <a 
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="linktree-card"
            >
              <div className="linktree-card-content">
                <MessageCircle size={24} />
                <div className="linktree-card-text">
                  <span className="linktree-card-label">WhatsApp</span>
                </div>
              </div>
              <ChevronRight size={20} className="linktree-card-arrow" />
            </a>

            {/* Copy buttons */}
            <button
              onClick={() => copyToClipboard('aman@example.com', 'email')}
              className="linktree-copy-btn"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check size={20} /> : <Copy size={20} />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={() => copyToClipboard('your-upi-id@paytm', 'upi')}
              className="linktree-copy-btn"
              aria-label="Copy UPI ID"
            >
              {copiedUPI ? <Check size={20} /> : <Copy size={20} />}
              <span>{copiedUPI ? 'Copied!' : 'Copy UPI'}</span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="linktree-footer">
          <p>Developed with ♥ by Aman Kr.</p>
        </footer>
      </div>
    </div>
  );
};

export default Linktree;