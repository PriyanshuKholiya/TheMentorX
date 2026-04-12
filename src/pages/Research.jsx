import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  // Data for the Research Paper 4-Step Process
  const researchSteps = [
    {
      id: "01",
      title: "Selection",
      desc: "Selecting a Journal & Writing your Paper"
    },
    {
      id: "02",
      title: "Submission",
      desc: "Making your Submission"
    },
    {
      id: "03",
      title: "Assessment",
      desc: "Peer Review or Assessment by Experts"
    },
    {
      id: "04",
      title: "Production",
      desc: "Publishing in your Chosen Journal"
    }
  ];

  // Data for the Book Publishing 8-Step Process
  const bookSteps = [
    "Acquisitions",
    "Editing",
    "Design & Typesetting",
    "Proofreading",
    "Printing",
    "Sales",
    "Marketing",
    "Publicity"
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
          Research & <span className="text-gold">Publishing</span>
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="h-[2px] bg-gold mx-auto mb-6"
        ></motion.div>
        <p className="text-mid-gray max-w-2xl mx-auto tracking-widest text-sm uppercase">
          Empowering academic excellence and authorship
        </p>
      </motion.section>

      {/* SECTION 1: RESEARCH PAPER PUBLISHING */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Intro Text */}
          <motion.div variants={slideInLeft} className="lg:col-span-5 space-y-6 text-white/80 leading-relaxed bg-[#111111] p-8 md:p-10 border-l-[3px] border-gold shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-bl-full -mr-12 -mt-12 pointer-events-none"></div>
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-6 relative z-10">Academic / Journal Publishing</h2>
            <p className="font-light relative z-10 text-white/90">
              In academic publishing, a paper is an academic work that is usually published in an academic journal. It contains original research results or reviews existing results. A paper may undergo a series of reviews, revisions, and re-submissions before finally being accepted or rejected for publication.
            </p>
            <p className="font-light relative z-10">
              Publishing your research is an important step in your academic career. This guide is designed to take you through the typical steps in publishing a research paper — from choosing the right journal and understanding what a peer-reviewed article is, to responding to reviewers and navigating the production process.
            </p>
          </motion.div>

          {/* Right: The 4-Step Process */}
          <motion.div variants={slideInRight} className="lg:col-span-7">
            <h3 className="font-serif text-3xl text-white mb-8 border-b border-gold-dark/30 pb-4 italic">
              The Four-Step Process
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {researchSteps.map((step) => (
                <motion.div 
                  variants={itemFade}
                  key={step.id} 
                  className="bg-[#0A0A0A] border border-gold-dark/30 hover:border-gold transition-all duration-300 p-8 group shadow-lg"
                >
                  <span className="font-serif text-5xl text-gold-dark/40 group-hover:text-gold transition-colors block mb-4">
                    {step.id}.
                  </span>
                  <h4 className="text-white/90 font-bold uppercase tracking-[1px] text-sm mb-3">
                    {step.title}
                  </h4>
                  <p className="text-mid-gray text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/20 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 2: AUTHORSHIP & BOOK PUBLISHING */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-4">Authorship Opportunities</h2>
          <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 italic">Opportunities for your Book Publishing</h3>
          <p className="text-white/70 max-w-3xl mx-auto leading-relaxed font-light text-lg">
            If you are a master of your subject or want to share your knowledge amongst others, writing is the best source. There are many excellent reasons to take the time to write and publish a book. Having authored a book gives you instant credibility as an expert and that immediately sets you apart from everyone else in your field.
          </p>
        </motion.div>

        {/* 8-Step Process Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.h4 variants={fadeInUp} className="text-gold text-center text-xs uppercase tracking-[4px] font-bold mb-8">
            The Process
          </motion.h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bookSteps.map((step, index) => (
              <motion.div 
                variants={itemFade}
                key={index} 
                className="bg-[#0A0A0A] border-t-[3px] border-gold-dark hover:border-gold hover:bg-[#111111] transition-all duration-300 p-8 text-center group"
              >
                <span className="text-gold-dark font-serif text-3xl block mb-3 group-hover:text-gold transition-colors">
                  {index + 1}.
                </span>
                <p className="text-white/90 text-xs font-bold uppercase tracking-wider">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Research;