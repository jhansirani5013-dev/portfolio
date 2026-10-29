import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    const resumePath = profile.resumePath;
    window.open(resumePath, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(8, 11, 18, 0.8)', borderColor: '#1E293B' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-xl font-bold hover:text-[#5EE7F5] transition-colors"
            style={{ color: '#F4F7FB' }}
          >
            {profile.name}
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium transition-colors"
                style={{
                  color: activeSection === item.href.substring(1) ? '#5EE7F5' : '#A2AEC0',
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-[#5EE7F5]/20 transition-colors"
              style={{
                backgroundColor: 'rgba(94, 231, 245, 0.1)',
                borderColor: 'rgba(94, 231, 245, 0.3)',
                color: '#F4F7FB',
              }}
            >
              View Resume
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: '#A2AEC0' }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-b" style={{ backgroundColor: '#0E1320', borderColor: '#1E293B' }}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-3 py-2 text-base font-medium rounded-lg transition-colors"
                style={{
                  color: activeSection === item.href.substring(1) ? '#5EE7F5' : '#A2AEC0',
                  backgroundColor: activeSection === item.href.substring(1) ? 'rgba(94, 231, 245, 0.1)' : 'transparent',
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="w-full mt-4 px-4 py-2 text-sm font-medium rounded-lg hover:bg-[#5EE7F5]/20 transition-colors"
              style={{
                backgroundColor: 'rgba(94, 231, 245, 0.1)',
                borderColor: 'rgba(94, 231, 245, 0.3)',
                color: '#F4F7FB',
              }}
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
