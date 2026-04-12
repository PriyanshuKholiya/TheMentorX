import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  // Data for Placement Drive Benefits
  const benefits = [
    "There will be a large number of opportunities for the students.",
    "The time and efforts of everyone will be saved.",
    "The selection retention ratio is high.",
    "The candidates chosen will be quick learners as well as multitasking in nature.",
    "There will be a strong relationship between the company and the Institution.",
    "There will be new knowledge as well as skills with this concept."
  ];

  // Data for the 4-Step Placement Process
  const placementSteps = [
    {
      step: "STEP 1",
      title: "Opportunity Sharing",
      desc: "The relevant information of the company is electronically broadcasted to all the students. Students apply for the companies according to their expertise and interests."
    },
    {
      step: "STEP 2",
      title: "Screening & Placements",
      desc: "MENTORx TPO cell does screening to shortlist the eligible students. Students follow the process till the completion of the placement process."
    },
    {
      step: "STEP 3",
      title: "Government / PSUs Job Opportunities",
      desc: "Job opportunities from Government/PSUs will also be made available to all students who are not already placed in a PSU."
    },
    {
      step: "STEP 4",
      title: "Power of Decision",
      desc: "The discretion of the Professor In-charge of MENTORx TPO cell shall be final in this regard."
    }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemFade = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
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
      
      {/* HEADER SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="pt-24 pb-16 px-6 max-w-site mx-auto text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic tracking-tight">
          Careers & <span className="text-gold">Internships</span>
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-gold mx-auto mb-6"
        ></motion.div>
        <p className="text-mid-gray max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Bridging the gap between Academia & Industry
        </p>
      </motion.section>

      {/* SECTION 1: INTERNSHIPS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <div className="grid md:grid-cols-12 gap-12 items-center bg-[#111111] border-l-[3px] border-gold p-8 md:p-12 shadow-[0_0_30px_rgba(201,168,76,0.05)] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none -mt-32 -mr-32"></div>

          <motion.div variants={slideInLeft} className="md:col-span-8 space-y-6 text-white/80 leading-relaxed font-light relative z-10">
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4 font-sans">Internships</h2>
            <p className="text-lg text-white/90">
              Our internship coordinators make sure they meet with the interns at least once a week to set up a rapport, to see what they're learning and be conscious of any issues they are having. Our coordinators are always available to learn about the interns and answer their questions. We keep encouraging the interns to follow up with any speakers that resonated with them.
            </p>
            <p>
              Internships are the first experience of being in a professional work environment for the interns; we want to make sure they're learning about the industry and developing as individuals.
            </p>
          </motion.div>

          <motion.div variants={slideInRight} className="md:col-span-4 flex flex-col gap-6 relative z-10">
            <div className="bg-[#0A0A0A] border border-gold-dark/30 p-8 text-center hover:border-gold transition-colors duration-300 group">
              <span className="font-serif text-5xl text-gold block mb-3 group-hover:scale-110 transition-transform duration-300">100%</span>
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[2px]">Coordinator commitment</span>
            </div>
            <div className="bg-[#0A0A0A] border border-gold-dark/30 p-8 text-center hover:border-gold transition-colors duration-300 group">
              <span className="font-serif text-5xl text-gold block mb-3 group-hover:scale-110 transition-transform duration-300">100%</span>
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[2px]">Student-first approach</span>
            </div>
          </motion.div>

        </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/20 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 2: PLACEMENT DRIVES - BENEFITS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">Placement Drives</h2>
          <h3 className="font-serif text-3xl text-white mb-6 italic">Benefits for Students & Institutions</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              variants={itemFade}
              key={index} 
              className="bg-charcoal border-t-[3px] border-gold-dark hover:border-gold transition-colors duration-300 p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-gold/10 transition-colors"></div>
              <div className="w-10 h-10 rounded-full bg-[#111111] border border-gold/50 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <svg className="w-4 h-4 text-gold group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-mid-gray text-sm leading-relaxed font-light group-hover:text-white/90 transition-colors">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 3: PLACEMENT DRIVE PROCESS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="bg-[#050505] py-24 border-y border-gold-dark/20"
      >
        <div className="max-w-site mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">The Process</h2>
            <h3 className="font-serif text-3xl text-white mb-8 italic">MENTORx conducts two types of Campus Placement drives:</h3>
            <div className="inline-flex items-center text-mid-gray tracking-[2px] uppercase text-[11px] font-bold border border-gold-dark/50 px-8 py-3 bg-[#0A0A0A]">
              On-Campus <span className="text-gold mx-4">OR</span> Off-Campus / Pool Campus
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {placementSteps.map((item, index) => (
              <motion.div 
                variants={itemFade}
                key={index} 
                className="flex flex-col md:flex-row gap-6 bg-[#111111] border border-gold-dark/30 p-8 hover:border-gold transition-colors duration-300 group"
              >
                <div className="flex-shrink-0">
                  <span className="text-gold-dark font-serif text-6xl opacity-30 block group-hover:opacity-70 group-hover:text-gold transition-all duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest block mb-3">
                    {item.step}
                  </span>
                  <h4 className="font-serif text-xl text-white mb-3 group-hover:text-gold-light transition-colors">{item.title}</h4>
                  <p className="text-mid-gray text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Careers;