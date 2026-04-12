import React from 'react';
import { motion } from 'framer-motion';
// 1. Import the specific program logo
import schoolLearningLogo from '../assets/images/programs/school-of-learning.png';

const Programs = () => {
  // Data for the 3-Phase Course Model
  const coursePhases = [
    {
      phase: "PHASE 1",
      title: "Preparation (Pre-active phase)",
      desc: "Preparations for Future, Learning Lifeskills and Interview Preparations."
    },
    {
      phase: "PHASE 2",
      title: "Association & Application",
      desc: "Trainings and Placements."
    },
    {
      phase: "PHASE 3",
      title: "Presentation & Generalization",
      desc: "Interviews and Opportunities. Industrial Coordination (Interactive phase)."
    }
  ];

  // Data for Certification Technologies
  const techList = [
    "Artificial Intelligence", "Robotics", "Technology", "Internet of Things", 
    "Big Data", "Block Chain", "Crypto", "Cyber Security", "Design Thinking", 
    "Robotronics", "Mechatronics", "Humanoids", "Virtual Reality", 
    "Augmented Reality", "Biotechnology", "Nano Technology", "Quantum Mechanics"
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full pb-24 bg-primary overflow-hidden">
      
      {/* HEADER SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="pt-24 pb-16 px-6 max-w-site mx-auto text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic tracking-tight">
          Programs & <span className="text-gold">Courses</span>
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-gold mx-auto mb-6"
        ></motion.div>
      </motion.section>

      {/* SECTION 1: MENTORx SCHOOL OF LEARNING */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <div className="bg-[#111111] border-t-[3px] border-gold p-8 md:p-16 relative shadow-2xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Logo - UPDATED: Circle and shadow removed */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="w-56 h-56 flex flex-col items-center justify-center text-center p-4 group">
                <img 
                  src={schoolLearningLogo} 
                  alt="School of Learning" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-8 space-y-6 text-white/80 leading-relaxed">
              <h2 className="font-serif text-4xl text-gold mb-4 italic">MENTORx School of Learning</h2>
              <p className="font-light">
                The MENTORx School of Learning is a global organisation specialising in international cultural and educational opportunities. We build connections, understanding, and trust between people around the globe through skills, education, and technology.
              </p>
              <p className="font-light">
                Our work in Lifeskills, Futuristic Technologies, Entrepreneurship stimulates a creative environment for our mentees. We connect our learners with the world and the best of the world with our learners.
              </p>
              
              {/* Core Pillars */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pt-6 border-t border-gold-dark/30 mt-6"
              >
                <p className="text-gold text-[10px] uppercase tracking-[4px] font-bold mb-6">Our Core Pillars:</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-[3px] font-bold text-white">
                  {["Connection", "Consistency", "Compassion", "Global Reach", "Global Opportunities"].map((pillar, i) => (
                    <React.Fragment key={i}>
                      <motion.span variants={itemFade} className="hover:text-gold transition-colors cursor-pointer">{pillar}</motion.span>
                      {i < 4 && <motion.span variants={itemFade} className="text-gold-dark/50">•</motion.span>}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: EXPERIENTIAL LEARNING */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <div className="border-l-4 border-gold pl-8 md:pl-12 py-4">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4 font-sans">Experiential Learning</h2>
          <h3 className="font-serif text-3xl text-white mb-6 italic">By Mentors / CEOs / CTOs and Industry Leaders</h3>
          <p className="text-white/70 leading-relaxed max-w-4xl mb-6 font-light text-lg">
            Experiential Learning brings the real world and learning concepts together. In a lot of ways, it's learning by doing but with defined goals. Traditional learning methods don't have a lasting impact. Without hands-on application, concepts don't connect or are forgotten altogether.
          </p>
          <p className="text-gold-light italic border-l-2 border-gold/30 pl-4 py-1 text-lg">
            "Experiential learning takes you out of the office/case study environment and gives you a hands-on learning experience that drives home concepts — think of it like a flight simulator for pilots."
          </p>
        </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/20 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 3, 4 & 5: DEVELOPMENT PROGRAMS GRID */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <div className="grid md:grid-cols-3 gap-8">
          
          <motion.div variants={itemFade} className="bg-[#0A0A0A] border border-gold-dark/20 p-10 hover:border-gold transition-all duration-500 group">
            <h3 className="font-serif text-2xl text-gold mb-8 italic">Faculty Development</h3>
            <div className="space-y-8">
              <div>
                <p className="text-white text-[10px] uppercase tracking-[3px] font-bold mb-3 border-b border-gold/20 pb-1 w-fit">FDP</p>
                <p className="text-mid-gray text-sm font-light leading-relaxed">Forming a bridge between the industry and academic institution to appraise knowledge and impart techniques to faculty members.</p>
              </div>
              <div>
                <p className="text-white text-[10px] uppercase tracking-[3px] font-bold mb-3 border-b border-gold/20 pb-1 w-fit">FEP</p>
                <p className="text-mid-gray text-sm font-light leading-relaxed">Enhancing skills to make faculty conducive for research in AI, Robotics, Security, Cloud, IoT, and Data Science.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemFade} className="bg-[#0A0A0A] border border-gold-dark/20 p-10 hover:border-gold transition-all duration-500 shadow-2xl">
            <h3 className="font-serif text-2xl text-gold mb-8 italic">Management Development</h3>
            <p className="text-mid-gray text-sm leading-relaxed mb-6 font-light">
              MDP provides participants with the opportunity to refocus, immerse themselves in best practices, and provide professional tools to strengthen their effectiveness as managers.
            </p>
            <p className="text-mid-gray text-sm leading-relaxed font-light">
              Provides a global context for enhancing awareness, leading change, and working effectively in uncertain environments.
            </p>
          </motion.div>

          <motion.div variants={itemFade} className="bg-[#0A0A0A] border border-gold-dark/20 p-10 hover:border-gold transition-all duration-500">
            <h3 className="font-serif text-2xl text-gold mb-8 italic">Corporate Training</h3>
            <p className="text-mid-gray text-sm leading-relaxed mb-6 font-light">
              Providing corporate training with new advances in AI, AR, VR, machine learning, and robotics technology to transform the training industry at an accelerated pace.
            </p>
            <p className="text-mid-gray text-sm leading-relaxed font-light">
              Leveraging technology to improve employee performance, moving beyond basic skill development to performance improvement.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 6: COURSE VITALS */}
      <section className="bg-[#050505] py-24 border-y border-gold-dark/10 mb-20 overflow-hidden">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-site mx-auto px-6"
        >
          <motion.h2 variants={itemFade} className="text-gold text-xs uppercase tracking-[5px] font-bold mb-16 text-center">Course Vitals</motion.h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {coursePhases.map((phase, index) => (
              <motion.div key={index} variants={itemFade} className="relative group">
                <div className="text-gold-dark text-8xl opacity-10 font-serif absolute top-0 left-1/2 -translate-x-1/2 -mt-10 group-hover:opacity-20 transition-opacity duration-500">
                  0{index + 1}
                </div>
                <div className="relative z-10 pt-8">
                  <p className="text-gold text-[10px] uppercase tracking-[3px] font-bold mb-4">{phase.phase}</p>
                  <h3 className="font-serif text-2xl text-white mb-6 italic">{phase.title}</h3>
                  <p className="text-mid-gray text-sm px-6 font-light leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 7: CERTIFICATIONS & INTEGRATED PROGRAMS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-6">Certifications & Programs</h2>
          <p className="text-white/60 max-w-3xl mx-auto leading-relaxed font-light text-lg">
            MENTORx has various courses and Integrated Certification Programs in cutting-edge futuristic technologies.
          </p>
        </motion.div>

        {/* Tech Stack Pills - Staggered */}
        <motion.div 
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3 mb-20 max-w-5xl mx-auto"
        >
          {techList.map((tech, index) => (
            <motion.span 
              variants={itemFade}
              key={index} 
              className="border border-gold-dark/30 text-gold-light px-5 py-2.5 text-[10px] uppercase tracking-[2px] font-bold hover:bg-gold hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Program Highlights Grid */}
        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-12">
          {[
            { 
                title: "Integrated Certification", 
                body: "Industry 5.0 certification program designed with best practices of Industry 5.0 implementation. Participants learn how to adopt the latest technologies to solve real-world problems." 
            },
            { 
                title: "Robotics Programs", 
                body: "Examines theoretical foundations of industrial robotic control within the frameworks of intelligent control methods and modern industrial technologies." 
            },
            { 
                title: "Internship Program", 
                body: "Internships in Intelligent Industrial Automation Systems and Smart Manufacturing designed by Industrial Subject Matter Experts. Work on real-time Industry 5.0 Automation problems." 
            },
            { 
                title: "Certificate for Learners", 
                body: "Sharing many National and International opportunities to students to learn and present themselves at bigger platforms." 
            }
          ].map((item, i) => (
            <motion.div key={i} variants={itemFade} className="border-l-2 border-gold-dark/30 pl-8 py-2 hover:border-gold transition-all group">
              <h4 className="text-white font-bold uppercase tracking-[3px] text-xs mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
              <p className="text-mid-gray text-sm leading-relaxed font-light">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

    </div>
  );
};

export default Programs;