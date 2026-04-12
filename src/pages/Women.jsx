import React from 'react';
import { motion } from 'framer-motion';

// Import the specific logo for this page
import womenLogo from '../assets/images/women/women.png';

const Women = () => {
  // Data for the Chairpersons
  const chairpersons = [
    {
      name: "Ms. Viola Edward De Glanville",
      role: "Chairperson — Cyprus, MENTORx Women | Founder, GRIT Academy",
      bio: "An inspirational teacher, personal and business leader, humanitarian, a sustainable influencer. She is a transcultural psychotherapist, a trainer in mentoring, breathwork and coaching, a social entrepreneur, Business Consultant and Advisor to many leaders and organizations across multiple sectors. She has been pioneering and developing mental health fitness and wellbeing in the workplace since the nineties.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Ms. Mokshi Virk",
      role: "Chairperson — Ontario, Canada, MENTORx Women | Director, Indo-Canadian Association Inc.",
      bio: "A multiple award winner community leader, Events organizer, Speaker, Mentor, Radio and TV Host, doting mother, caring wife, dear friend and a Founder Director of a Not-for-profit organization — Indo Canadian Arts & Culture Initiative. Her passion lies in community service and making a difference in the lives of her fellow-citizens.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. Varsha Jain",
      role: "Chairperson — International Council of Jewellery Design, MENTORx Women | Founder & CEO, Meavika Jewelz",
      bio: "A recognized international jewellery designer with over 16+ years of experience in the industry. She is a specialised designer for fusion of hand-sculpted, traditional, and contemporary jewellery, including yellow gold, rose gold, platinum, diamond, polki, jadau, and temple jewellery.",
      imageRef: "[PicturePlaceholder52.jpg]"
    },
    {
      name: "Dr. Samiksha Borele",
      role: "Chairperson — Maharashtra, MENTORx Women | President, Borele World",
      bio: "A global entrepreneur, visionary leader, and 2x TEDx speaker. CEO of Quantia Gravitas FZC LLC (UAE). She leads enterprises in real estate, hospitality, and AI, while acting as a NITI Aayog-appointed mentor of change and an investor supporting Indian startups. Known for her expertise in real estate, hospitality, and luxury developments.",
      imageRef: "[PicturePlaceholder52.jpg]"
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

  return (
    <div className="w-full pb-24 bg-primary overflow-hidden font-sans">
      
      {/* SECTION 1: INITIATIVE INTRODUCTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="pt-24 pb-16 px-6 max-w-site mx-auto text-center relative"
      >
        {/* UPDATED: Cleaned up container to remove the "Outer Circle" look */}
        <motion.div variants={fadeInUp} className="w-48 h-48 mx-auto flex items-center justify-center mb-8 relative overflow-hidden group">
           <img 
              src={womenLogo} 
              alt="MENTORx Women Logo" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
            />
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-white mb-6 italic tracking-tight">MENTOR<span className="text-gold">x</span> Women</motion.h1>
        <motion.div 
          variants={fadeInUp}
          className="h-[2px] w-24 bg-gold mx-auto mb-8"
        ></motion.div>
        <motion.p variants={fadeInUp} className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed mb-6 font-light">
          MENTORx Women is a space where women from every background, race and religion can come together in a place of community and get ready to reach their maximum potential.
        </motion.p>
        <motion.p variants={fadeInUp} className="text-gold uppercase tracking-[3px] text-sm font-bold mb-8">
          We are goal chasers, dreamers and hardworking hustlers ready to reach for more.
        </motion.p>
        <motion.p variants={fadeInUp} className="text-mid-gray tracking-[4px] text-xs uppercase">
          Educate | Empower | Elevate
        </motion.p>
      </motion.section>

      <div className="h-[1px] bg-gold-dark/20 w-full max-w-site mx-auto mb-20"></div>

      {/* SECTION 2: THE WOWOMAN MOVEMENT */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.div variants={fadeInUp} className="bg-charcoal border-l-[3px] border-gold p-8 md:p-16 text-center md:text-left relative overflow-hidden shadow-2xl">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

          <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-8">The WoWoman Movement</h2>
          
          <div className="space-y-6 text-white/80 leading-relaxed max-w-4xl relative z-10 font-light">
            <p className="font-serif text-3xl text-white mb-6 italic">
              "Possibilities are endless here; we make your dreams come true."
            </p>
            <p>
              It's a global realm where women from every walk of life come together and gear up to reach their maximum potential. We have curated a platform to connect, collaborate, co-create and celebrate the journey — a journey that is positively impacting lives of millions around the globe.
            </p>
            <p>
              "MENTORx Women" is an initiative undertaken by MENTORx Founders for the recognition, respect, honor and celebration of Women. An Empowered woman empowers women — lead by example — Make others rise; this is the way we can make others grow and we grow together.
            </p>
            <p>
              We are creating a movement 'WoWoman' whereby women know their worth and make sure the women in your workplace know theirs — to be brave, and ask for what you deserve; future generations of working women will thank you.
            </p>
            <div className="border-t border-gold-dark/30 pt-6 mt-8">
              <p className="text-gold-light italic font-serif text-xl tracking-wide">
                "WoWoman" is the global solidarity initiative of MENTORx Women towards global sisterhood.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* SECTION 3: WOMEN CHAIRPERSONS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-gold text-xs uppercase tracking-[4px] font-bold mb-12 text-center">Women Chairpersons</motion.h2>
        
        {/* 2x2 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {chairpersons.map((person, index) => (
            <motion.div 
              variants={itemFade}
              key={index} 
              className="bg-[#111111] border-t-[3px] border-gold group hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500 flex flex-col sm:flex-row"
            >
              
              {/* Image side */}
              <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto bg-charcoal relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center text-mid-gray text-xs border-r border-gold/20 p-4 text-center">
                   {person.imageRef}
                </div>
                <div className="absolute inset-0 bg-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content side */}
              <div className="p-8 flex-grow flex flex-col justify-center">
                <h3 className="font-serif text-2xl text-gold mb-2">{person.name}</h3>
                <p className="text-white/90 text-[10px] font-bold uppercase tracking-[1px] mb-4 border-b border-gold-dark/30 pb-4 leading-relaxed group-hover:text-gold-light transition-colors">{person.role}</p>
                <p className="text-mid-gray text-xs leading-relaxed font-light">{person.bio}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default Women;