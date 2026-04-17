import React from 'react';
import { Link } from 'react-router-dom';
// Direct import for the logo
import logo from '../assets/images/logos/mentorx.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 border-t border-gold-dark/30 relative pb-20 sm:pb-16">
      <div className="max-w-site mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand & Social */}
        <div>
          {/* Logo Section - Swapped Text for Image */}
          <Link to="/" className="mb-4 block">
            <img 
              src={logo} 
              alt="MENTORx Global" 
              className="h-14 w-auto object-contain" 
            />
          </Link>
          <p className="text-mid-gray tracking-[2px] text-xs mb-6 uppercase">
            Educate | Empower | Elevate
          </p>
          <div className="flex space-x-4 text-gold text-lg font-bold">
            <a href="https://facebook.com/MENTORxGlobal/" target="_blank" rel="noreferrer" className="hover:text-gold-light transition-colors">FB</a>
            
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-gold uppercase tracking-[2px] text-sm font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About MENTORx</Link></li>
            <li><Link to="/partners" className="hover:text-gold transition-colors">Partners & Institutions</Link></li>
            <li><Link to="/why" className="hover:text-gold transition-colors">Why MENTORx</Link></li>
            <li><Link to="/women" className="hover:text-gold transition-colors">MENTORx Women</Link></li>
            <li><Link to="/team" className="hover:text-gold transition-colors">Our Team</Link></li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div>
          <h4 className="text-gold uppercase tracking-[2px] text-sm font-bold mb-6">Programs</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link to="/programs" className="hover:text-gold transition-colors">School of Learning</Link></li>
            <li><Link to="/coe" className="hover:text-gold transition-colors">CoE & Incubation Centre</Link></li>
            <li><Link to="/events" className="hover:text-gold transition-colors">Hackathons & Ideathons</Link></li>
            <li><Link to="/research" className="hover:text-gold transition-colors">Research & Publishing</Link></li>
            <li><Link to="/careers" className="hover:text-gold transition-colors">Careers & Internships</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-gold uppercase tracking-[2px] text-sm font-bold mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>+91 85888 34548</li>
            <li>+91 98885 83736</li>
            <li>+91 78278 12599</li>
            <li className="pt-2"><a href="mailto:mentorxglobal@gmail.com" className="hover:text-gold transition-colors">mentorxglobal@gmail.com</a></li>
            <li><a href="https://www.thementorx.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">www.thementorx.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gold w-full mt-8">
        <div className="max-w-site mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center text-xs text-mid-gray uppercase tracking-[2px]">
          <p>&copy; {new Date().getFullYear()} MENTORx Global.</p>
          <div className="space-x-4 mt-4 lg:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;