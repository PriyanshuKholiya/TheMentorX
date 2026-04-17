import React from 'react';
import { motion } from 'framer-motion';

// Direct image imports
import founderImg from '../assets/images/about/dr-munish-jindal.jpg';
// Added the new network image import
import networkImg from '../assets/images/about/mentoring-network.jpeg';

const About = () => {
  return (
    <div className="w-full pb-20 bg-[#050505]">
      
      {/* SECTION 1: GLOBAL VISION & AUTHORITY */}
      <section className="pt-24 pb-16 px-6 max-w-site mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            About MENTORx
          </motion.h1>
          <div className="h-[2px] w-24 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Premium Infographic / Brand Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-[#0A0A0A] border border-gold-dark/30 flex items-center justify-center relative overflow-hidden group shadow-2xl"
          >
            {/* FIX: Swapped hardcoded src for import variable.
              Removed opacity-60 so there is no grey tint. 
              Added object-center for perfect framing. 
            */}
            <img 
              src={networkImg} 
              alt="Mentoring Network Global Reach" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Kept the bottom gradient so the text remains readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>
            
            {/* Overlay Badge for Authority */}
            <div className="absolute bottom-8 left-8 border-l-2 border-gold pl-4">
              <p className="text-white font-serif text-xl">A Global Powerhouse</p>
              <p className="text-gold-light text-xs uppercase tracking-[3px]">Education & Technology</p>
            </div>
          </motion.div>

          {/* Right Column: Vision & Prestige Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-white/80 leading-relaxed font-light text-lg"
          >
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4 font-sans">Our Vision</h2>
            <p>
              MENTORx is a global conglomerate in education and technology (EdTech). MENTORx is an initiative undertaken by Dr. Munish Jindal and Dr. Nancy Juneja. 
            </p>
            <p>
              Both founders have been conferred with the highest civilian honor, the "Karmaveer Chakra," by United Nations-iCongo.
            </p>
            <p>
              We are a team of seasoned professionals, Leaders, Government Officials, Entrepreneurs, Scientists, Diplomats, CEOs, and CxOs specialized in various fields across the industry. Each one of them has more than a decade of industrial and educational experience.
            </p>
            <p>
              They are coming together to address long-standing needs by providing Skill Development programs and curating Entrepreneurship modules for the handholding of Students, Universities, Startups, Investors, and Corporate entities.
            </p>
            <p className="text-gold font-serif text-xl pt-4 italic">
              Educate | Empower | Elevate
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5: PILLARS OF IMPACT (New Grid Integration) */}
      <section className="py-12 px-6 max-w-site mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gold-dark/20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase mb-3 flex items-center">
              <span className="w-3 h-[2px] bg-gold mr-3"></span> Who We Empower
            </h4>
            <p className="text-sm text-mid-gray leading-relaxed">
              We have trained a widely diversified global audience including CEOs, CTOs, scientists, engineers, doctors, lawyers, academicians, women, and youth.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase mb-3 flex items-center">
              <span className="w-3 h-[2px] bg-gold mr-3"></span> Government Ties
            </h4>
            <p className="text-sm text-mid-gray leading-relaxed">
              Our initiatives carry high-authority credentials, acting as NITI Aayog-appointed mentors of change and working alongside the Atal Innovation Mission (AIM).
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase mb-3 flex items-center">
              <span className="w-3 h-[2px] bg-gold mr-3"></span> Core Disciplines
            </h4>
            <p className="text-sm text-mid-gray leading-relaxed">
              We run highly specialized modules in AI & Robotics, Industry 5.0, Design Thinking, Cyber Security, Quantum Mechanics, and Startup Mentoring.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase mb-3 flex items-center">
              <span className="w-3 h-[2px] bg-gold mr-3"></span> Mentoring
            </h4>
            <p className="text-sm text-mid-gray leading-relaxed">
              We serve members with Traditional One-on-one Mentoring, Distance Mentoring, and Group Mentoring to tackle complex business situations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gold Rule Divider */}
      <div className="h-[1px] bg-gold-dark/20 w-full max-w-site mx-auto my-12"></div>

      {/* SECTION 2: THE MENTORx JOURNEY */}
      <section className="py-24 px-6 max-w-site mx-auto overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">The Journey</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-white">Milestones of Transformation</h3>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[11px] left-[12%] right-[12%] h-[2px] bg-gold-dark/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            
            {/* Milestone 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative group">
              {/* Mobile Vertical Line */}
              <div className="md:hidden absolute left-[11px] top-8 bottom-[-48px] w-[2px] bg-gold-dark/20 z-0"></div>
              {/* Timeline Node */}
              <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-[3px] border-gold-dark group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(201,168,76,0.6)] transition-all duration-500 z-10"></div>
              {/* Content */}
              <div className="pl-12 md:pl-0 pt-1 md:pt-12 md:text-center">
                <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3 hidden md:block">Global Reach</div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base font-light">
                  Conducted more than <strong className="text-white">2000 workshops</strong> on 300+ topics, touching the lives of <strong className="text-gold-light">2 million people</strong> globally.
                </p>
              </div>
            </motion.div>

            {/* Milestone 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative group">
              <div className="md:hidden absolute left-[11px] top-8 bottom-[-48px] w-[2px] bg-gold-dark/20 z-0"></div>
              <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-[3px] border-gold-dark group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(201,168,76,0.6)] transition-all duration-500 z-10"></div>
              <div className="pl-12 md:pl-0 pt-1 md:pt-12 md:text-center">
                <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3 hidden md:block">Diverse Network</div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base font-light">
                  Trained a diverse demographic including <strong className="text-white">CEOs, CTOs, Youth, Teachers, Scientists, Lawyers, and Entrepreneurs</strong>.
                </p>
              </div>
            </motion.div>

            {/* Milestone 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="relative group">
              <div className="md:hidden absolute left-[11px] top-8 bottom-[-48px] w-[2px] bg-gold-dark/20 z-0"></div>
              <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-[3px] border-gold-dark group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(201,168,76,0.6)] transition-all duration-500 z-10"></div>
              <div className="pl-12 md:pl-0 pt-1 md:pt-12 md:text-center">
                <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3 hidden md:block">Master Trainers</div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base font-light">
                  Certified more than <strong className="text-white">1000 corporate and master trainers</strong> through highly specialized Train the Trainer programs.
                </p>
              </div>
            </motion.div>

            {/* Milestone 4 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="relative group">
              <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-[3px] border-gold-dark group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(201,168,76,0.6)] transition-all duration-500 z-10"></div>
              <div className="pl-12 md:pl-0 pt-1 md:pt-12 md:text-center">
                <div className="text-gold text-xs font-bold tracking-widest uppercase mb-3 hidden md:block">Faculty Empowerment</div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base font-light">
                  Equipping academic institutions with required skills by marshaling the <strong className="text-gold-light font-bold">Faculty Development Program</strong> as an empowering objective.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION */}
      <section className="py-16 px-6 max-w-site mx-auto">
        <div className="border border-gold-dark/30 bg-[#0A0A0A] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none"></div>

          <div className="grid md:grid-cols-12 gap-12 relative z-10 items-center">
            
            {/* Left: Mission Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 space-y-6 text-white/90 leading-relaxed"
            >
              <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-6 font-sans">Our Mission</h2>
              <p className="font-serif text-2xl md:text-3xl text-white mb-4">
                MENTORx to be the World's largest growing chain of Mentors & Mentees.
              </p>
              <p className="font-light text-white/70">
                We wish to build a shared platform for Mentors as well as Mentees to share their victories, lessons, and challenges so that we can cheer, support and collaborate to achieve our goal of making a difference to people's lives.
              </p>
              <p className="font-light text-white/70">
                This community is going to grow and become a global force of transformation. So we need to curate a platform to connect, collaborate, co-create and celebrate the journey of impacting lives together.
              </p>
              <p className="text-gold-light border-l-[3px] border-gold pl-6 mt-8 italic text-lg bg-gold/5 py-5 pr-4">
                "We at MENTORx know, believe and work towards the philosophy that there is no dearth of opportunities; the bigger challenge is to identify them and help convert them into sustainable business propositions."
              </p>
            </motion.div>

            {/* Right: Founder Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-4 flex justify-center"
            >
              <div className="w-full max-w-[320px] aspect-[3/4] relative group border border-gold-dark/40 shadow-2xl overflow-hidden bg-[#111111]">
                <img 
                  src={founderImg} 
                  alt="Dr. Munish Jindal" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#050505]/90 backdrop-blur-md p-5 border-t border-gold/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold font-bold text-sm uppercase tracking-widest text-center mb-1">Dr. Munish Jindal</p>
                  <p className="text-white/60 text-[10px] uppercase text-center tracking-[2px]">Founding President</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;