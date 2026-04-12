import React from 'react';
import { motion } from 'framer-motion';

import globalLogo from '../assets/images/contact/global.png';
import womenLogo from '../assets/images/contact/women.png';

const Contact = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full pb-24 bg-primary overflow-hidden font-sans">
      
      {/* SECTION 1: CTA HEADER */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="bg-[#050505] border-b border-gold-dark/30 pt-24 pb-20 px-6 text-center relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-dark/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-mid-gray tracking-[4px] text-xs uppercase mb-4">THANK YOU!</p>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 italic tracking-tight">
            Join MENTOR<span className="text-gold">x</span> Today
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="h-[2px] bg-gold mx-auto mb-6"
          ></motion.div>
          <p className="text-white/80 text-xl tracking-[2px] uppercase font-light">
            Contact us to elevate your journey
          </p>
        </div>
      </motion.section>

      {/* SECTION 2 & 3: CONTACT DETAILS & FORM */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mt-20"
      >
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Details & Logos */}
          <motion.div variants={slideInLeft} className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-8 border-b border-gold-dark/30 pb-4">
                Get in Touch
              </h2>
              
              <div className="space-y-8 text-white/90 font-light">
                {/* Phone */}
                <div className="group">
                  <p className="text-mid-gray text-[10px] uppercase tracking-widest mb-2 group-hover:text-gold transition-colors">Phone</p>
                  <p className="text-lg tracking-wide">+91 85888 34548</p>
                  <p className="text-lg tracking-wide">+91 98885 83736</p>
                  <p className="text-lg tracking-wide">+91 78278 12599</p>
                </div>
                
                {/* Email */}
                <div className="group">
                  <p className="text-mid-gray text-[10px] uppercase tracking-widest mb-2 group-hover:text-gold transition-colors">Email</p>
                  <a href="mailto:mentorxglobal@gmail.com" className="text-lg hover:text-gold transition-colors block">
                    mentorxglobal@gmail.com
                  </a>
                </div>

                {/* Website & Social */}
                <div className="group">
                  <p className="text-mid-gray text-[10px] uppercase tracking-widest mb-2 group-hover:text-gold transition-colors">Online</p>
                  <a href="https://www.thementorx.com" target="_blank" rel="noreferrer" className="block text-lg hover:text-gold transition-colors mb-2">
                    www.thementorx.com
                  </a>
                  <a href="https://facebook.com/MENTORxGlobal/" target="_blank" rel="noreferrer" className="block text-lg hover:text-gold transition-colors">
                    facebook.com/MENTORxGlobal/
                  </a>
                </div>
              </div>
            </div>

            {/* Logos */}
            <div className="flex items-center space-x-6 pt-8 border-t border-gold-dark/30">
              {/* Global Logo */}
              <div className="w-24 h-24 bg-charcoal border border-gold/20 flex items-center justify-center p-3 group hover:border-gold transition-colors duration-300">
                <img 
                  src={globalLogo} 
                  alt="MENTORx Global Logo" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              {/* Women Logo */}
              <div className="w-24 h-24 bg-charcoal border border-gold/20 flex items-center justify-center p-3 group hover:border-gold transition-colors duration-300 overflow-hidden">
                <img 
                  src={womenLogo} 
                  alt="MENTORx Women Logo" 
                  className="w-full h-full object-contain scale-[1.25] translate-x-1.5 group-hover:scale-[1.4] transition-transform duration-500" 
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={slideInRight} className="lg:col-span-7">
            <div className="bg-[#0A0A0A] border border-gold-dark/50 hover:border-gold p-8 md:p-12 relative shadow-[0_0_40px_rgba(201,168,76,0.05)] transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-dark via-gold to-gold-dark"></div>

              <h3 className="font-serif text-3xl text-white mb-8 italic">Send an Enquiry</h3>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="relative">
                    <input 
                      type="text" id="name" placeholder=" " required
                      className="block w-full bg-transparent border-b border-gold-dark/50 py-2 text-white focus:outline-none focus:border-gold transition-colors peer" 
                    />
                    <label htmlFor="name" className="absolute left-0 top-2 text-mid-gray text-sm uppercase tracking-wider transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
                      Name
                    </label>
                  </div>
                  
                  {/* Phone */}
                  <div className="relative">
                    <input 
                      type="tel" id="phone" placeholder=" " required
                      className="block w-full bg-transparent border-b border-gold-dark/50 py-2 text-white focus:outline-none focus:border-gold transition-colors peer" 
                    />
                    <label htmlFor="phone" className="absolute left-0 top-2 text-mid-gray text-sm uppercase tracking-wider transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
                      Phone
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <input 
                    type="email" id="email" placeholder=" " required
                    className="block w-full bg-transparent border-b border-gold-dark/50 py-2 text-white focus:outline-none focus:border-gold transition-colors peer" 
                  />
                  <label htmlFor="email" className="absolute left-0 top-2 text-mid-gray text-sm uppercase tracking-wider transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
                    Email Address
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Organisation */}
                  <div className="relative">
                    <input 
                      type="text" id="organisation" placeholder=" " required
                      className="block w-full bg-transparent border-b border-gold-dark/50 py-2 text-white focus:outline-none focus:border-gold transition-colors peer" 
                    />
                    <label htmlFor="organisation" className="absolute left-0 top-2 text-mid-gray text-sm uppercase tracking-wider transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
                      Organisation / Institute
                    </label>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="relative group">
                    <select 
                      id="enquiryType"
                      className="block w-full bg-transparent border-b border-gold-dark/50 py-2 text-white focus:outline-none focus:border-gold appearance-none cursor-pointer relative z-10"
                      defaultValue="" required
                    >
                      <option value="" disabled className="text-mid-gray bg-[#111111]">Select Enquiry Type</option>
                      <option value="membership" className="bg-[#111111]">Membership</option>
                      <option value="partnership" className="bg-[#111111]">Partnership / MoU</option>
                      <option value="programs" className="bg-[#111111]">Programs & Courses</option>
                      <option value="events" className="bg-[#111111]">Events (Hackathon/Ideathon)</option>
                      <option value="general" className="bg-[#111111]">General Enquiry</option>
                    </select>
                    <div className="absolute right-0 top-3 pointer-events-none z-0 group-hover:text-gold transition-colors text-mid-gray">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea 
                    id="message" rows="4" placeholder=" " required
                    className="block w-full bg-transparent border-b border-gold-dark/50 py-2 text-white focus:outline-none focus:border-gold transition-colors peer resize-none" 
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-2 text-mid-gray text-sm uppercase tracking-wider transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-gold peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button type="submit" className="w-full sm:w-auto bg-primary border border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300 px-10 py-4 text-sm uppercase tracking-[2px] font-bold">
                    Submit Enquiry
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
};

export default Contact;