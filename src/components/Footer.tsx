import { profile } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#080B12] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[#F4F7FB] mb-2">{profile.name}</h3>
            <p className="text-sm text-[#A2AEC0]">
              Building intelligent systems with thoughtful engineering.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="#home"
              className="text-sm text-[#A2AEC0] hover:text-[#F4F7FB] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-[#A2AEC0] hover:text-[#F4F7FB] transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-[#A2AEC0] hover:text-[#F4F7FB] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-[#A2AEC0] hover:text-[#F4F7FB] transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A2AEC0] hover:text-[#F4F7FB] transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A2AEC0] hover:text-[#F4F7FB] transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-[#A2AEC0] hover:text-[#F4F7FB] transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#1E293B] text-center">
          <p className="text-sm text-[#A2AEC0]">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
