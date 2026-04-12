import React from 'react';
import { motion } from 'framer-motion';
// Direct image imports
import founderImg from '../assets/images/about/dr-munish-jindal.jpg';

const About = () => {
  return (
    <div className="w-full pb-20 bg-primary">
      
      {/* SECTION 1: VISION */}
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
          {/* Left Column: Infographic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-charcoal border border-gold-dark/30 flex items-center justify-center relative overflow-hidden group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
              alt="Mentoring Network" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Right Column: Vision Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-white/80 leading-relaxed"
          >
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4 font-sans">Our Vision</h2>
            <p>
              MENTORx is an initiative undertaken by Dr. Munish Jindal and Dr. Nancy Juneja. MENTORx is a team of seasoned professionals, Leaders, Government Officials, Entrepreneurs, Celebrities, Educationists, Corporates, Scientists, Ambassadors, Diplomats, Embassies, Consultants, Principals, Professors, Doctors, Lawyers, Chartered Accountants, CEOs, CxOs, CTOs, Directors & Dignitaries specialized in various fields across the industry.
            </p>
            <p>
              Each one of them has more than a decade of industrial and educational experience.
            </p>
            <p>
              They are coming together to address long-standing needs & providing Skill Development programs. They are curating Entrepreneurship modules for handholding of Students, Educational Institutes, Schools, Colleges, Universities, Startups, Investors, SMEs, Entrepreneurs, Businesses, Professionals & Corporate.
            </p>
            <p className="text-gold font-serif text-xl pt-4 italic">
              Educate | Empower | Elevate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gold Rule Divider */}
      <div className="h-[1px] bg-gold-dark/20 w-full max-w-site mx-auto my-12"></div>

      {/* SECTION 2: THE MENTORx JOURNEY */}
      <section className="py-16 px-6 max-w-site mx-auto">
        <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-16 text-center">The Journey</h2>
        
        <div className="max-w-3xl mx-auto border-l-2 border-gold-dark/30 pl-8 md:pl-12 space-y-16 py-4">
          
          {[
            { 
              text: "MENTORx has conducted more than workshops on over 300+ topics and touched the lives of across the globe.",
              highlights: ["2000 workshops", "2 million people"]
            },
            { 
              text: "MENTORx has trained widely diversified people including CEOs, CTOs, Executives, Youth, Teachers, Principals, Professors, Lecturers, Educators, Doctors, Scientists, Lawyers, Academicians, Women, Parents, Entrepreneurs, and Students.",
              highlights: []
            },
            { 
              text: "MENTORx has certified more than through Train the Trainer programs.",
              highlights: ["1000 corporate and master trainers"]
            },
            { 
              text: "With the aim of equipping faculty members with required skills and knowledge, MENTORx marshals the Faculty Development Program as its emerging and empowering objective.",
              highlights: ["Faculty Development Program"]
            }
          ].map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 h-4 w-4 rounded-full bg-gold border-4 border-primary shadow-[0_0_10px_rgba(201,168,76,0.5)]"></div>
              <p className="text-white/70 leading-relaxed text-lg font-light">
                {milestone.text.split(' ').map((word, i) => 
                  milestone.highlights.includes(word) ? <strong key={i} className="text-white font-bold">{word} </strong> : word + ' '
                )}
                {/* Specific handling for multi-word highlights */}
                {idx === 0 && milestone.text.includes("2000 workshops") ? <span><strong className="text-white">2000 workshops</strong> on over <strong className="text-white">300+ topics</strong> and touched the lives of <strong className="text-gold-light">2 million people</strong></span> : null}
                {idx === 2 && <span><strong className="text-white">1000 corporate and master trainers</strong></span>}
                {idx === 3 && <span><strong className="text-gold-light font-bold">Faculty Development Program</strong></span>}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* SECTION 3: MISSION */}
      <section className="py-16 px-6 max-w-site mx-auto">
        <div className="border border-gold/20 bg-[#0A0A0A] p-8 md:p-16 relative overflow-hidden shadow-2xl">
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
              <p className="font-light">
                We wish to build a shared platform for Mentors as well as Mentees to share their victories, lessons, and challenges so that we can cheer, support and collaborate to achieve our goal of making a difference to people's lives.
              </p>
              <p className="font-light">
                This community is going to grow and become a global force of transformation. So we need to curate a platform to connect, collaborate, co-create and celebrate the journey of impacting lives together.
              </p>
              <p className="text-gold-light border-l-2 border-gold pl-6 mt-8 italic text-lg bg-gold/5 py-4 pr-4">
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
              <div className="w-full max-w-[320px] aspect-[3/4] relative group border border-gold/30 shadow-2xl overflow-hidden">
                <img 
                  src={founderImg} 
                  alt="Dr. Munish Jindal" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Name Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-md p-4 border-t border-gold/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold font-bold text-xs uppercase tracking-widest text-center">Dr. Munish Jindal</p>
                  <p className="text-white/60 text-[10px] uppercase text-center mt-1">Founder & CEO</p>
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