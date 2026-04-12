import React from 'react';
import { motion } from 'framer-motion';

const Coe = () => {
  // Data for Incubation Benefits
  const incubationBenefits = [
    { id: "01", title: "All-Round Development" },
    { id: "02", title: "Business and Technical Assistance" },
    { id: "03", title: "Financial Assistance and Advice" },
    { id: "04", title: "A Network of Relationships with other Business Owners" },
    { id: "05", title: "Ability to Adjust Business Model to Market Conditions" },
    { id: "06", title: "Preservation of Working Capital — Incubation Space" }
  ];

  // Data for Key Objectives
  const keyObjectives = [
    "Facilitate awareness, training, learning, and sharing of knowledge and best practices through customized training modules in the field of Industry 5.0, manufacturing, AI, and continuous improvement.",
    "Identify and disseminate innovations and best practices in Industry 5.0 and AI among industry.",
    "Provide international training-of-trainers courses for members.",
    "Develop training materials and modules to support its activities.",
    "Build a database of technical and domain experts to assist members with their Industry 5.0 & AI programs.",
    "Develop a Certification Program for Industry 5.0 and AI based on IT through courses.",
    "Undertake Research in the field of Industry 5.0 and AI to develop IT app-based dissemination tools for greater scalability.",
    "Establish industry-academia linkages with other institutions, to resolve any related issues of Students, Startups, and projects.",
    "Develop strategic engagements with leading international organizations/bodies to maximise the benefits of Industry 5.0.",
    "Organise National and International Events / Seminars / Workshops / Meets for overall growth of students and members."
  ];

  // Data for CoE Benefits
  const coeBenefits = [
    "Innovation Research in the Area of Robotics, AI, IoT, etc.",
    "World Class Infrastructure for Building Industry 5.0 Technologies' Projects",
    "Technology-enabled training programs",
    "Incubation Center for Budding Entrepreneurs",
    "Industry Collaboration to Upscale the Learners Experience",
    "On-Premise Internships and Faculty Development Programs",
    "Consulting & industry experts to work on research work"
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
        className="pt-24 pb-12 px-6 max-w-site mx-auto text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 italic tracking-tight">
          MENTORx <span className="text-gold">Incubation Centre</span>
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-gold mx-auto mb-6"
        ></motion.div>
        <p className="text-mid-gray max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Empowering Industry 5.0 Innovation
        </p>
      </motion.section>

      {/* SECTION 1: INCUBATION CENTRE INTRO */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-24"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Framed Image Area */}
          <motion.div variants={slideInLeft} className="lg:col-span-7 relative group">
            <div className="absolute -inset-2 bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-[450px] bg-[#111111] border border-gold/30 flex flex-col items-center justify-center overflow-hidden group-hover:border-gold transition-colors duration-500 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Innovation Centre"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
              <div className="relative z-10 p-8 text-center">
                 {/* REMOVED Innovation Hub text */}
              </div>
            </div>
          </motion.div>
          
          {/* Intro Content */}
          <motion.div variants={slideInRight} className="lg:col-span-5 space-y-6 text-white/80 leading-relaxed">
            <h2 className="font-serif text-3xl text-gold mb-6 italic">Bridging Academia & Industry</h2>
            <p className="text-lg font-light text-white/90">
              MENTORx Incubation Centre aims to support the institutions, industries & universities to become more competitive and productive in the global digital economy.
            </p>
            <div className="w-12 h-[1px] bg-gold-dark/50 my-6"></div>
            <p className="font-light">
              We identify methods to bridge gaps that could hinder the adoption of Industry 5.0 tools and technology, actively working towards bridging the gap from academia to industry and incubating startups at the institute itself.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 2: INCUBATION BENEFITS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-12 px-6 max-w-site mx-auto bg-[#0A0A0A] border-y border-gold-dark/20 mb-20"
      >
        <motion.h2 variants={fadeInUp} className="text-gold text-xs uppercase tracking-[4px] font-bold mb-12 text-center">
          Incubation Benefits
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {incubationBenefits.map((benefit) => (
            <motion.div 
              variants={itemFade}
              key={benefit.id} 
              className="bg-[#111111] border border-gold-dark/30 hover:border-gold p-8 group transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-gold/10 transition-colors"></div>
              <span className="font-serif text-4xl text-gold-dark/40 group-hover:text-gold transition-colors block mb-6">
                {benefit.id}
              </span>
              <h3 className="text-white/90 font-bold uppercase tracking-[1px] text-sm leading-relaxed relative z-10">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 3: CoE OVERVIEW & EDUCATION 5.0 */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left: Images */}
          <motion.div variants={slideInLeft} className="grid grid-cols-2 gap-4 h-[350px]">
            <div className="bg-charcoal border border-gold/20 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600" 
                alt="AI Research"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="bg-charcoal border border-gold/20 relative overflow-hidden group mt-8">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" 
                alt="Collaboration"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </motion.div>
          
          {/* Right: Text */}
          <motion.div variants={slideInRight} className="flex flex-col justify-center space-y-6 text-white/80 leading-relaxed font-light">
            <h2 className="font-serif text-3xl text-gold mb-2 italic">MENTORx CoE Overview</h2>
            <p>
              Technologies involved in Industry 5.0 open up a plethora of opportunities for youngsters. Industry 5.0 education in India is an emerging field and along with high interest and demand among the students, the potential is immense.
            </p>
            <div className="text-gold-light p-6 border-l-2 border-gold bg-[#111111] shadow-lg text-sm leading-relaxed">
              <strong className="block text-white mb-2 uppercase tracking-wider text-xs">A National Initiative</strong>
              National Productivity Council (DPIIT, Ministry of Commerce & Industry, Govt of India) and MENTORx Global hereby present On-Campus Centre of Excellence (CoE) setup opportunity at your Institute premise to imbibe and empower in new disruptive technologies of Industry 5.0.
            </div>
          </motion.div>
        </div>

        {/* Education 5.0 Block */}
        <motion.div variants={fadeInUp} className="bg-charcoal border-t-[3px] border-gold p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-6 relative z-10">Education 5.0</h3>
          <p className="text-white/90 font-serif text-2xl mb-10 italic relative z-10">
            A desired approach to learning that aligns itself with the emerging fourth industrial revolution, focusing on smart technology, artificial intelligence, and robotics.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-mid-gray leading-relaxed relative z-10 font-light">
            <div className="border-l border-gold-dark/30 pl-6 hover:border-gold transition-colors">
              <strong className="text-white block mb-2 uppercase tracking-wider text-[11px]">Rapid change in Technology</strong>
              Involves big data, IoT, machine learning, AI, robotics, 3D printing, biotech, nanotech, and renewable energy.
            </div>
            <div className="border-l border-gold-dark/30 pl-6 hover:border-gold transition-colors">
              <strong className="text-white block mb-2 uppercase tracking-wider text-[11px]">Lack of Employability Skills</strong>
              May cause unemployment and hinder career development. Renewing skills is essential.
            </div>
            <div className="border-l border-gold-dark/30 pl-6 hover:border-gold transition-colors">
              <strong className="text-white block mb-2 uppercase tracking-wider text-[11px]">Teaching Quality</strong>
              Education providers must implement teaching that reflects real-world problems.
            </div>
            <div className="border-l border-gold-dark/30 pl-6 hover:border-gold transition-colors">
              <strong className="text-white block mb-2 uppercase tracking-wider text-[11px]">Lack of Infrastructure</strong>
              Poor infrastructure is a serious obstacle in community development and economic progress.
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* SECTION 4: KEY OBJECTIVES */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="bg-[#050505] py-24 border-y border-gold-dark/20 mb-20"
      >
        <div className="max-w-site mx-auto px-6">
          <motion.h2 variants={fadeInUp} className="text-gold text-xs uppercase tracking-[4px] font-bold mb-6 text-center">
            Key Objectives
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex justify-center gap-4 md:gap-6 text-white text-[9px] md:text-[10px] uppercase tracking-[2px] font-bold mb-16 flex-wrap">
             <span className="px-3 py-1 border border-gold-dark/30 rounded-full">Innovation Solution Enabler</span>
             <span className="text-gold-dark hidden md:block mt-1">•</span>
             <span className="px-3 py-1 border border-gold-dark/30 rounded-full">Enabling Entrepreneurship</span>
             <span className="text-gold-dark hidden md:block mt-1">•</span>
             <span className="px-3 py-1 border border-gold-dark/30 rounded-full">Create Ecosystem</span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {keyObjectives.map((objective, index) => (
              <motion.div variants={itemFade} key={index} className="flex items-start group">
                <span className="text-gold-dark font-serif text-2xl mr-5 mt-[-4px] group-hover:text-gold transition-colors">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <p className="text-white/70 text-sm leading-relaxed font-light group-hover:text-white/90 transition-colors">
                  {objective}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 5: CoE BENEFITS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-gold text-xs uppercase tracking-[4px] font-bold mb-8 text-center">
          CoE Benefits
        </motion.h2>
        <motion.div variants={fadeInUp} className="max-w-3xl mx-auto bg-[#111111] border-l-[3px] border-gold p-8 md:p-12 shadow-xl">
          <ul className="space-y-6">
            {coeBenefits.map((benefit, index) => (
              <motion.li 
                variants={itemFade} 
                key={index} 
                className="flex items-center text-white/80 font-light text-sm md:text-base group"
              >
                <div className="w-2 h-2 border border-gold rotate-45 mr-6 flex-shrink-0 group-hover:bg-gold transition-colors"></div>
                <span className="group-hover:text-white transition-colors">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

    </div>
  );
};

export default Coe;