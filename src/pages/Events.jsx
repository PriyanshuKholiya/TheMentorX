import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 1. Added Link import

const Events = () => {
  // Animation Variants for smooth reveals
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="w-full pb-24 bg-primary overflow-hidden font-sans">
      
      {/* SECTION 1: HACKATHON & IDEATHON HERO */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="pt-24 pb-16 px-6 max-w-site mx-auto text-center"
      >
        <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 tracking-wide">
          HACKATHON <span className="text-gold">—</span> IDEATHON
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] w-24 bg-gold mx-auto mb-10"
        ></motion.div>
        
        <div className="max-w-4xl mx-auto space-y-6 text-white/80 text-lg leading-relaxed font-light">
          <p>
            The MENTORx Global Ideathon and Hackathon is an opportunity for people who believe international education and intercultural exchange can make a difference and want to be involved in shaping the future by encouraging creativity and exchanging ideas.
          </p>
          <p>
            It is a digital event (a marathon for ideas = ideathon) run by MENTORx volunteers for everyone around the world who identifies with our mission. Together we can bring forward solutions to help organizations work towards a mission to make the world worth living in with peace and harmony.
          </p>
        </div>
      </motion.section>

      {/* SECTION 2: THE MOVEMENT & MISSION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-12"
      >
        <motion.div 
          variants={fadeInUp} 
          className="bg-charcoal border-l-4 border-gold p-8 md:p-16 relative overflow-hidden shadow-xl"
        >
          {/* Subtle geometric overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white/90 leading-relaxed font-light">
              <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4 font-sans">
                Be Part of the Change
              </h2>
              <p>
                We want to be part of the change that will shape a sustainable future for intercultural exchange and contribute to empowering and elevating everyone around.
              </p>
              <p>
                We offer an opportunity for innovative ideas, new approaches, and new solutions at the Ideathon — to rethink, reshape & expand the existing concepts to continue to fulfil students' life missions.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0A0A0A] border border-gold-dark/30 p-8 text-center md:text-left rounded-md shadow-sm"
            >
              <p className="font-serif text-2xl text-gold-light italic leading-snug">
                "The HACKATHONS and IDEATHONS are new-age tools to innovate, ideate, and engage with campus talent, employees, and like-minded individuals."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/20 w-full max-w-site mx-auto my-20"></div>

      {/* SECTION 3: WEBINARS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-24"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6 text-white/80 leading-relaxed font-light">
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4 font-sans">
              The Learning Evolution
            </h2>
            <h3 className="font-serif text-4xl text-white mb-6 italic">Global Webinars</h3>
            <p>
              A global evolutionary movement of MENTORx by Educationists, Administrators, Corporate leaders, and Professionals to Educate, Empower, Elevate, to provide massive value to people at large. We believe that the current dynamics of education and learning have evolved with technologies of the Internet and Web that will continue to reshape the future.
            </p>
            <p>
              We have officially started the <strong>'Learning Evolution'</strong> daily on online meets, running since April and in continuation now. We host daily Webinar Sessions to share expert knowledge and life experiences from expert professionals and masters from across the globe.
            </p>
          </motion.div>

          {/* Right: Stats & CTA */}
          <motion.div variants={fadeInUp} className="lg:col-span-5">
            <div className="bg-[#111111] border-t-[3px] border-gold p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none group-hover:bg-gold/10 transition-colors duration-500"></div>
              
              <div className="text-center relative z-10">
                <span className="font-serif text-5xl md:text-6xl text-gold block mb-4 group-hover:scale-105 transition-transform duration-500">
                  10,000+
                </span>
                <p className="text-white/90 text-sm uppercase tracking-[2px] font-bold mb-6">
                  Global Community Members
                </p>
                <p className="text-mid-gray text-sm leading-relaxed mb-8">
                  Now it’s FULL STEAM AHEAD with our Online Learning Module in place!
                </p>
                
                {/* 2. Replaced <button> with <Link> */}
                <Link to="/contact" className="block w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-500 py-4 text-xs uppercase tracking-[3px] font-bold">
                  Ask For Details
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

    </div>
  );
};

export default Events;