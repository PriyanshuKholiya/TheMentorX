import React from 'react';
import { motion } from 'framer-motion';

// Import the specific logo for this page
import womenLogo from '../assets/images/women/women.png';
import nancyImg from '../assets/images/about/dr-nancy-juneja.jpg';

const Women = () => {
  // Data for the Chairpersons
  // Updated image keys to prepare for actual imported images (using paths or imports)
  const chairpersons = [
    {
      name: "Ms. Viola Edward De Glanville",
      role: "Chairperson — Cyprus, MENTORx Women | Founder, GRIT Academy",
      bio: "An inspirational teacher, personal and business leader, humanitarian, a sustainable influencer. She is a transcultural psychotherapist, a trainer in mentoring, breathwork and coaching, a social entrepreneur, Business Consultant and Advisor to many leaders and organizations across multiple sectors. She has been pioneering and developing mental health fitness and wellbeing in the workplace since the nineties.",
      image: "" // Add your imported image here (e.g., violaImg)
    },
    {
      name: "Ms. Mokshi Virk",
      role: "Chairperson — Ontario, Canada, MENTORx Women | Director, Indo-Canadian Association Inc.",
      bio: "A multiple award winner community leader, Events organizer, Speaker, Mentor, Radio and TV Host, doting mother, caring wife, dear friend and a Founder Director of a Not-for-profit organization — Indo Canadian Arts & Culture Initiative. Her passion lies in community service and making a difference in the lives of her fellow-citizens.",
      image: "" 
    },
    {
      name: "Dr. Varsha Jain",
      role: "Chairperson — International Council of Jewellery Design, MENTORx Women | Founder & CEO, Meavika Jewelz",
      bio: "A recognized international jewellery designer with over 16+ years of experience in the industry. She is a specialised designer for fusion of hand-sculpted, traditional, and contemporary jewellery, including yellow gold, rose gold, platinum, diamond, polki, jadau, and temple jewellery.",
      image: "" 
    },
    {
      name: "Dr. Samiksha Borele",
      role: "Chairperson — Maharashtra, MENTORx Women | President, Borele World",
      bio: "A global entrepreneur, visionary leader, and 2x TEDx speaker. CEO of Quantia Gravitas FZC LLC (UAE). She leads enterprises in real estate, hospitality, and AI, while acting as a NITI Aayog-appointed mentor of change and an investor supporting Indian startups. Known for her expertise in real estate, hospitality, and luxury developments.",
      image: "" 
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
        {/* Improved Logo Placement with Glow & Drop Shadow */}
        <motion.div variants={fadeInUp} className="w-32 h-32 md:w-40 md:h-40 mx-auto flex items-center justify-center mb-10 relative">
           <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl pointer-events-none"></div>
           <img 
              src={womenLogo} 
              alt="MENTORx Women Logo" 
              className="relative z-10 w-full h-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]" 
            />
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-white mb-6 italic tracking-tight">
          MENTOR<span className="text-gold">x</span> Women
        </motion.h1>
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

      {/* SECTION 2: THE WOWOMAN MOVEMENT (Redesigned) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto mb-20"
      >
        <motion.div variants={fadeInUp} className="relative bg-[#111111] rounded-2xl p-10 md:p-16 overflow-hidden shadow-2xl border border-gold/10 group">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-700"></div>
          <span className="absolute -top-8 -left-2 text-[15rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none">
            "
          </span>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
            {/* Left Side: Headline & Core Quote */}
            <div className="md:col-span-5">
              <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-gold mr-4"></span>
                The Movement
              </h2>
              <p className="font-serif text-3xl md:text-4xl text-white leading-tight italic">
                "Possibilities are endless here; we make your dreams come true."
              </p>
            </div>
            
            {/* Right Side: Body Content */}
            <div className="md:col-span-7 space-y-6 text-white/70 leading-relaxed font-light">
              <p>
                It's a global realm where women from every walk of life come together and gear up to reach their maximum potential. We have curated a platform to connect, collaborate, co-create and celebrate the journey — a journey that is positively impacting lives of millions around the globe.
              </p>
              <p>
                "MENTORx Women" is an initiative undertaken by MENTORx Founders for the recognition, respect, honor and celebration of Women. An Empowered woman empowers women — lead by example — Make others rise; this is the way we can make others grow and we grow together.
              </p>
              <p>
                We are creating a movement <strong>'WoWoman'</strong> whereby women know their worth and make sure the women in your workplace know theirs — to be brave, and ask for what you deserve; future generations of working women will thank you.
              </p>
              
              <div className="border-l-2 border-gold/50 pl-6 py-2 mt-8 bg-gold/5 rounded-r-lg">
                <p className="text-gold-light italic font-serif text-xl tracking-wide">
                  "WoWoman" is the global solidarity initiative of MENTORx Women towards global sisterhood.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* SECTION 3: FOUNDER'S VISION (Dr. Nancy Juneja) */}
      <section className="py-20 bg-[#0A0A0A] border-y border-gold/10">
        <div className="max-w-site mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-5">
            <div className="relative group max-w-sm mx-auto">
              <div className="absolute -inset-2 border border-gold/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <img 
                src={nancyImg} 
                alt="Dr. Nancy Juneja" 
                className="relative z-10 w-full aspect-[4/5] object-cover object-top border border-gold/30" 
              />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-7 space-y-6">
            <h2 className="text-gold text-xs uppercase tracking-[4px] font-bold">The Visionary</h2>
            <h3 className="font-serif text-4xl text-white italic">Dr. Nancy Juneja</h3>
            <p className="text-white/70 text-lg font-light leading-relaxed">
              "MENTORx Women" is an initiative undertaken for the recognition, respect, honor, and celebration of Women. An Educationist, Communication Strategist, and Leadership Mentor, Dr. Nancy Juneja was conferred with the United Nations "Karmaveer Chakra" for her commitment to driving transformational change.
            </p>
            <p className="text-gold-light italic border-l-2 border-gold/30 pl-6 py-2 text-xl">
              "An Empowered woman empowers women — lead by example — Make others rise."
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WOMEN CHAIRPERSONS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="px-6 max-w-site mx-auto pt-20"
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
              
              {/* Image side - Updated to support actual images */}
              <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto bg-charcoal relative overflow-hidden flex-shrink-0 border-r border-gold/10">
                {person.image ? (
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center text-mid-gray text-xs p-4 text-center">
                    [Image Placeholder]
                  </div>
                )}
                <div className="absolute inset-0 bg-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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