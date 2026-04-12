import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../assets/images/logos/mentorx.png';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col w-full">
      
      {/* Top Tier: Utility Bar */}
      {/* Removed max-w-site and mx-auto to allow 100% full width */}
      <div className="bg-[#050505] border-b border-gold-dark/10 h-10 hidden lg:flex items-center justify-between px-6 w-full text-[10px] uppercase tracking-widest text-mid-gray font-bold">
        <div className="flex space-x-6">
          <Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
          <Link to="/careers" className="hover:text-gold transition-colors">Careers</Link>
          <Link to="/social-impact" className="hover:text-gold transition-colors">Impact</Link>
          <Link to="/research" className="hover:text-gold transition-colors">Research</Link>
          <Link to="/women" className="hover:text-gold transition-colors">Women</Link>
        </div>
        <div className="flex space-x-4 text-gold/60">
          <span>+91 98885 83736</span>
          <span className="text-mid-gray/30">|</span>
          <a href="mailto:mentorxglobal@gmail.com" className="hover:text-gold transition-colors lowercase font-normal tracking-normal">mentorxglobal@gmail.com</a>
        </div>
      </div>

      {/* Bottom Tier: Main Navbar */}
      <nav className="bg-primary/95 border-b border-gold/10 backdrop-blur-md h-20">
        <div className="max-w-site mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo Section - Left Aligned & Sized Up */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="MENTORx Global" 
                className="h-14 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Right Side: Links + CTA */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6 text-[11px] uppercase tracking-[2px] font-bold text-white/90">
              <Link to="/" className="hover:text-gold transition-all duration-300">Home</Link>
              <Link to="/about" className="hover:text-gold transition-all duration-300">About</Link>
              <Link to="/programs" className="hover:text-gold transition-all duration-300">Programs</Link>
              <Link to="/events" className="hover:text-gold transition-all duration-300">Events</Link>
              <Link to="/team" className="hover:text-gold transition-all duration-300">Team</Link>
              <Link to="/partners" className="hover:text-gold transition-all duration-300">Partners</Link>
              <Link to="/coe" className="hover:text-gold transition-all duration-300">CoE</Link>
            </div>

            {/* Subtle Vertical Divider */}
            <div className="h-6 w-[1px] bg-gold/20 mx-2"></div>

            <Link to="/contact" className="bg-transparent border border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-primary transition-all duration-500 px-6 py-2 text-[10px] uppercase tracking-[2px] font-bold">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button className="lg:hidden text-gold">
            <Menu size={30} />
          </button>
        </div>
      </nav>
      
    </header>
  );
};

export default Navbar;